const i18n = (() => {
  const defaultLanguage = "it";
  const storageKey = "uipathSkillsLanguage";
  const languages = window.uipathLanguageRegistry || [
    { code: "it", label: "Italiano", flag: "./assets/flags/it.png", src: "./locales/it.js" },
    { code: "en", label: "English", flag: "./assets/flags/gb.png", src: "./locales/en.js" }
  ];
  const localePromises = new Map();

  window.uipathLocales = window.uipathLocales || {};

  let currentLanguage = localStorage.getItem(storageKey) || defaultLanguage;
  if (!languages.some((language) => language.code === currentLanguage)) {
    currentLanguage = defaultLanguage;
  }

  function languageMeta(language) {
    return languages.find((item) => item.code === language) || languages.find((item) => item.code === defaultLanguage);
  }

  function format(template, params = {}) {
    return String(template).replace(/\{(\w+)\}/g, (_, key) => params[key] ?? "");
  }

  function dictionary(language = currentLanguage) {
    return window.uipathLocales[language] || window.uipathLocales[defaultLanguage] || {};
  }

  function lookup(key, source) {
    return key.split(".").reduce((acc, part) => acc?.[part], source);
  }

  function t(key, params) {
    const value = lookup(key, dictionary());
    const fallback = lookup(key, dictionary(defaultLanguage));
    return format(value ?? fallback ?? key, params);
  }

  function loadLocale(language) {
    if (window.uipathLocales[language]) {
      return Promise.resolve(window.uipathLocales[language]);
    }

    if (localePromises.has(language)) {
      return localePromises.get(language);
    }

    const meta = languageMeta(language);
    if (!meta?.src) {
      return Promise.resolve(null);
    }

    const promise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = meta.src;
      script.async = false;
      script.onload = () => resolve(window.uipathLocales[language] || null);
      script.onerror = () => reject(new Error(`Unable to load locale: ${language}`));
      document.head.appendChild(script);
    });

    localePromises.set(language, promise);
    return promise;
  }

  function renderLanguageSelectors() {
    document.querySelectorAll("[data-language-selector]").forEach((panel) => {
      const label = t("ui.language");
      panel.setAttribute("aria-label", label);
      panel.innerHTML = `
        <span>${label}</span>
        <div class="language-options">
          ${languages.map((language) => `
            <button class="language-option" type="button" data-lang-choice="${language.code}" aria-pressed="false">
              <img class="flag-img" src="${language.flag}" alt="" aria-hidden="true">
              <span>${language.label}</span>
            </button>
          `).join("")}
        </div>
      `;
    });
  }

  function applyStaticText() {
    document.documentElement.lang = currentLanguage;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = t(element.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      element.setAttribute("placeholder", t(`placeholders.${element.dataset.i18nPlaceholder}`));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      element.setAttribute("aria-label", t(element.dataset.i18nAria));
    });
    document.querySelectorAll("[data-i18n-title]").forEach((element) => {
      element.setAttribute("title", t(element.dataset.i18nTitle));
    });
    document.querySelectorAll("[data-lang-choice]").forEach((button) => {
      const isActive = button.dataset.langChoice === currentLanguage;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
    document.title = document.body.classList.contains("graph-page") ? t("title.graph") : t("title.index");
  }

  async function setLanguage(language, options = {}) {
    const target = languages.some((item) => item.code === language) ? language : defaultLanguage;

    try {
      await loadLocale(target);
    } catch {
      await loadLocale(defaultLanguage);
      currentLanguage = defaultLanguage;
      applyStaticText();
      return;
    }

    currentLanguage = window.uipathLocales[target] ? target : defaultLanguage;
    if (options.persist !== false) {
      localStorage.setItem(storageKey, currentLanguage);
    }
    renderLanguageSelectors();
    applyStaticText();
    window.dispatchEvent(new CustomEvent("uipath-language-change", { detail: { language: currentLanguage } }));
  }

  function phaseLabel(phase) {
    return dictionary().phases?.[phase] || dictionary(defaultLanguage).phases?.[phase] || phase;
  }

  function statusLabel(status) {
    return dictionary().status?.[status] || dictionary(defaultLanguage).status?.[status] || status;
  }

  function localizeSkill(skill) {
    const override = dictionary().skills?.[skill.id] || {};
    return { ...skill, ...override };
  }

  function localizeLifecycle(item) {
    const translated = dictionary().lifecycle?.[item.key];
    if (!translated) return item;
    return { ...item, title: translated.title, text: translated.text };
  }

  function localizeGuide(item, index) {
    const translated = dictionary().guides?.[index];
    if (!translated) return item;
    return { ...item, title: translated.title, text: translated.text };
  }

  async function init() {
    await loadLocale(defaultLanguage);
    await setLanguage(currentLanguage, { persist: false });

    document.addEventListener("click", (event) => {
      const button = event.target.closest("[data-lang-choice]");
      if (!button) return;
      setLanguage(button.dataset.langChoice);
    });
  }

  return {
    init,
    t,
    getLanguage: () => currentLanguage,
    setLanguage,
    phaseLabel,
    statusLabel,
    localizeSkill,
    localizeLifecycle,
    localizeGuide
  };
})();

window.uipathI18n = i18n;
document.addEventListener("DOMContentLoaded", () => i18n?.init());
