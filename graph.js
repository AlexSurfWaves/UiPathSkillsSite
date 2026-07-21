(() => {
  const data = window.uipathSkillsData;
  if (!data) return;

  const { skills } = data;
  const skillById = new Map(skills.map((skill) => [skill.id, skill]));
  const svg = document.querySelector("#skillGraph");
  const tooltip = document.querySelector("#graphTooltip");
  const searchEl = document.querySelector("#graphSearch");
  const phaseEl = document.querySelector("#graphPhase");
  const resetEl = document.querySelector("#graphReset");
  const statsEl = document.querySelector("#graphStats");

  const width = 1220;
  const height = 760;
  const phaseOrder = ["design", "build", "integrate", "deploy", "operate", "improve"];
  const phaseColors = {
    design: "#111820",
    build: "#fa4616",
    integrate: "#2a9dad",
    deploy: "#7f56d9",
    operate: "#3f4e56",
    improve: "#b33d74"
  };
  const phaseLabels = {
    design: "Design",
    build: "Build",
    integrate: "Integra",
    deploy: "Deploy",
    operate: "Operate",
    improve: "Test & improve"
  };

  function translator() {
    return window.uipathI18n;
  }

  function t(key, params) {
    return translator()?.t(key, params) || key;
  }

  function localizedSkill(skill) {
    return translator()?.localizeSkill(skill) || skill;
  }

  function phaseLabel(phase) {
    return translator()?.phaseLabel(phase) || phaseLabels[phase] || phase;
  }

  const allEdges = skills.flatMap((skill) =>
    skill.handoffs
      .filter((target) => skillById.has(target))
      .map((target) => ({ source: skill.id, target }))
  );

  const degreeById = new Map(skills.map((skill) => [skill.id, 0]));
  allEdges.forEach((edge) => {
    degreeById.set(edge.source, degreeById.get(edge.source) + 1);
    degreeById.set(edge.target, degreeById.get(edge.target) + 1);
  });

  let activeId = skillById.has(window.location.hash.replace("#", ""))
    ? window.location.hash.replace("#", "")
    : "uipath-platform";
  let currentPositions = new Map();
  let currentVisibleEdges = [];
  const manualPositions = new Map();
  let dragged = null;
  let suppressClick = false;

  const initialParams = new URLSearchParams(window.location.search);
  const initialPhase = initialParams.get("phase");
  if (initialPhase === "all" || phaseOrder.includes(initialPhase)) {
    phaseEl.value = initialPhase;
  }
  if (initialParams.has("q")) {
    searchEl.value = initialParams.get("q");
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function normalizeText(value) {
    return String(value).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function getVisibleSkills() {
    const query = normalizeText(searchEl.value.trim());
    const phase = phaseEl.value;
    return skills.filter((skill) => {
      const localized = localizedSkill(skill);
      const phaseMatch = phase === "all" || skill.phase === phase;
      const haystack = normalizeText([
        skill.id,
        skill.name,
        localized.category,
        localized.product,
        skill.files,
        localized.purpose,
        localized.when,
        skill.handoffs.join(" ")
      ].join(" "));
      return phaseMatch && (!query || haystack.includes(query));
    });
  }

  function layoutNodes(visibleSkills) {
    const positions = new Map();
    const centerX = width / 2;
    const centerY = height / 2;
    const visibleIds = new Set(visibleSkills.map((skill) => skill.id));
    const centralId = visibleIds.has("uipath-platform") ? "uipath-platform" : null;

    const grouped = phaseOrder.map((phase) => ({
      phase,
      skills: visibleSkills
        .filter((skill) => skill.phase === phase && skill.id !== centralId)
        .sort((a, b) => a.id.localeCompare(b.id))
    })).filter((group) => group.skills.length);

    if (visibleSkills.length === 1) {
      const only = visibleSkills[0];
      positions.set(only.id, clampPoint({ x: centerX, y: centerY, radius: nodeRadius(only.id) }));
      return applyManualPositions(positions);
    }

    if (!centralId || grouped.length <= 1) {
      const ordered = visibleSkills.slice().sort((a, b) => {
        const phaseDelta = phaseOrder.indexOf(a.phase) - phaseOrder.indexOf(b.phase);
        return phaseDelta || a.id.localeCompare(b.id);
      });
      const radiusX = Math.min(390, Math.max(190, ordered.length * 34));
      const radiusY = Math.min(245, Math.max(145, ordered.length * 21));
      ordered.forEach((skill, index) => {
        const angle = (-Math.PI / 2) + (Math.PI * 2 * index / ordered.length);
        positions.set(skill.id, clampPoint({
          x: centerX + Math.cos(angle) * radiusX,
          y: centerY + Math.sin(angle) * radiusY,
          radius: nodeRadius(skill.id)
        }));
      });
      return applyManualPositions(positions);
    }

    positions.set(centralId, clampPoint({ x: centerX, y: centerY, radius: 38 }));

    grouped.forEach((group, groupIndex) => {
      const angle = (-Math.PI / 2) + (groupIndex * (Math.PI * 2 / grouped.length));
      const orbitX = 360;
      const orbitY = 250;
      const groupX = centerX + Math.cos(angle) * orbitX;
      const groupY = centerY + Math.sin(angle) * orbitY;
      const clusterRadius = Math.max(54, Math.min(96, group.skills.length * 18));

      group.skills.forEach((skill, index) => {
        const itemAngle = angle + (Math.PI * 2 * index / group.skills.length);
        positions.set(skill.id, clampPoint({
          x: groupX + Math.cos(itemAngle) * clusterRadius,
          y: groupY + Math.sin(itemAngle) * clusterRadius,
          radius: nodeRadius(skill.id)
        }));
      });
    });

    return applyManualPositions(positions);
  }

  function nodeRadius(id) {
    const degree = degreeById.get(id) || 0;
    return 24 + Math.min(degree, 8) * 1.45;
  }

  function clampPoint(point) {
    const left = 72;
    const right = width - 72;
    const top = 86;
    const bottom = height - 96;
    return {
      ...point,
      x: Math.min(right, Math.max(left, point.x)),
      y: Math.min(bottom, Math.max(top, point.y))
    };
  }

  function applyManualPositions(positions) {
    positions.forEach((point, id) => {
      const manual = manualPositions.get(id);
      if (!manual) return;
      positions.set(id, clampPoint({ ...point, x: manual.x, y: manual.y }));
    });
    return positions;
  }

  function svgPoint(event) {
    if (svg.createSVGPoint && svg.getScreenCTM()) {
      const point = svg.createSVGPoint();
      point.x = event.clientX;
      point.y = event.clientY;
      return point.matrixTransform(svg.getScreenCTM().inverse());
    }

    const bounds = svg.getBoundingClientRect();
    return {
      x: ((event.clientX - bounds.left) / bounds.width) * width,
      y: ((event.clientY - bounds.top) / bounds.height) * height
    };
  }

  function relationSet(id) {
    const related = new Set([id]);
    allEdges.forEach((edge) => {
      if (edge.source === id) related.add(edge.target);
      if (edge.target === id) related.add(edge.source);
    });
    return related;
  }

  function edgePath(source, target) {
    const dx = target.x - source.x;
    const dy = target.y - source.y;
    const distance = Math.max(Math.hypot(dx, dy), 1);
    const offset = Math.min(82, distance * 0.16);
    const midX = (source.x + target.x) / 2;
    const midY = (source.y + target.y) / 2;
    const controlX = midX - (dy / distance) * offset;
    const controlY = midY + (dx / distance) * offset;
    return `M ${source.x} ${source.y} Q ${controlX} ${controlY} ${target.x} ${target.y}`;
  }

  function updateNodePosition(id) {
    const point = currentPositions.get(id);
    const node = svg.querySelector(`.graph-node[data-skill="${id}"]`);
    if (!point || !node) return;

    node.setAttribute("transform", `translate(${point.x} ${point.y})`);
    const text = node.querySelector("text");
    if (text) text.setAttribute("y", point.radius + 18);
  }

  function updateConnectedEdges(id) {
    svg.querySelectorAll(".graph-edge").forEach((edgeEl) => {
      const sourceId = edgeEl.dataset.source;
      const targetId = edgeEl.dataset.target;
      if (sourceId !== id && targetId !== id) return;
      const source = currentPositions.get(sourceId);
      const target = currentPositions.get(targetId);
      if (!source || !target) return;
      edgeEl.setAttribute("d", edgePath(source, target));
    });
  }

  function updateDraggedNode(event) {
    if (!dragged) return;
    const point = svgPoint(event);
    const previous = currentPositions.get(dragged.id);
    if (!previous) return;
    const next = clampPoint({ ...previous, x: point.x - dragged.offsetX, y: point.y - dragged.offsetY });
    const dx = next.x - dragged.startX;
    const dy = next.y - dragged.startY;

    if (Math.hypot(dx, dy) > 4) {
      suppressClick = true;
      hideTooltip();
    }

    currentPositions.set(dragged.id, next);
    manualPositions.set(dragged.id, { x: next.x, y: next.y });
    updateNodePosition(dragged.id);
    updateConnectedEdges(dragged.id);
  }

  function labelLines(id) {
    const label = id.replace("uipath-", "");
    const parts = label.split("-");
    if (parts.length <= 2) return [label];
    const midpoint = Math.ceil(parts.length / 2);
    return [parts.slice(0, midpoint).join("-"), parts.slice(midpoint).join("-")];
  }

  function renderGraph() {
    const visibleSkills = getVisibleSkills();
    const visibleIds = new Set(visibleSkills.map((skill) => skill.id));
    const visibleEdges = allEdges.filter((edge) => visibleIds.has(edge.source) && visibleIds.has(edge.target));

    if (!visibleIds.has(activeId)) {
      activeId = visibleIds.has("uipath-platform") ? "uipath-platform" : visibleSkills[0]?.id || "";
    }

    const positions = layoutNodes(visibleSkills);
    currentPositions = positions;
    currentVisibleEdges = visibleEdges;
    const activeRelations = activeId ? relationSet(activeId) : new Set();

    statsEl.textContent = t("ui.visibleStats", { count: visibleSkills.length, edges: visibleEdges.length });

    if (!visibleSkills.length) {
      svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
      svg.innerHTML = `
        <text x="${width / 2}" y="${height / 2}" text-anchor="middle" class="graph-empty">
          ${escapeHtml(t("ui.noResults"))}
        </text>
      `;
      renderInspector(null);
      return;
    }

    const edgeMarkup = visibleEdges.map((edge) => {
      const source = positions.get(edge.source);
      const target = positions.get(edge.target);
      const active = edge.source === activeId || edge.target === activeId;
      const dimmed = activeId && !active;
      return `
        <path class="graph-edge ${active ? "is-active" : ""} ${dimmed ? "is-dimmed" : ""}"
          d="${edgePath(source, target)}"
          data-source="${edge.source}"
          data-target="${edge.target}"
          marker-end="url(#arrowHead)" />
      `;
    }).join("");

    const nodeMarkup = visibleSkills.map((skill) => {
      const localized = localizedSkill(skill);
      const point = positions.get(skill.id);
      const degree = degreeById.get(skill.id) || 0;
      const active = skill.id === activeId;
      const related = activeRelations.has(skill.id);
      const dimmed = activeId && !related;
      const labels = labelLines(skill.id);
      const textMarkup = labels.map((line, index) => `
        <tspan x="0" dy="${index === 0 ? 0 : 13}">${escapeHtml(line)}</tspan>
      `).join("");
      return `
        <g class="graph-node ${active ? "is-active" : ""} ${related ? "is-related" : ""} ${dimmed ? "is-dimmed" : ""}"
          role="button"
          tabindex="0"
          aria-label="${escapeHtml(localized.name)}"
          data-skill="${skill.id}"
          transform="translate(${point.x} ${point.y})">
          <circle cx="0" cy="0" r="${point.radius}"
            fill="${phaseColors[skill.phase] || "#62706c"}"
            data-degree="${degree}" />
          <text x="0" y="${point.radius + 18}" text-anchor="middle">${textMarkup}</text>
        </g>
      `;
    }).join("");

    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    svg.innerHTML = `
      <defs>
        <marker id="arrowHead" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M 0 0 L 6 3 L 0 6 z" class="graph-arrow"></path>
        </marker>
      </defs>
      <g class="graph-edges">${edgeMarkup}</g>
      <g class="graph-nodes">${nodeMarkup}</g>
    `;

    bindNodeEvents();
    renderInspector(skillById.get(activeId));
  }

  function renderInspector(skill) {
    if (!skill) {
      document.querySelector("#graphSkillName").textContent = t("ui.noSkill");
      document.querySelector("#graphSkillPurpose").textContent = t("ui.noSkillHelp");
      document.querySelector("#graphSkillCategory").textContent = "-";
      document.querySelector("#graphSkillPhase").textContent = "-";
      document.querySelector("#graphSkillDegree").textContent = "-";
      document.querySelector("#graphOutgoing").innerHTML = "";
      document.querySelector("#graphIncoming").innerHTML = "";
      document.querySelector("#graphOpenDetail").href = "./index.html";
      return;
    }

    const outgoing = skill.handoffs.filter((id) => skillById.has(id));
    const incoming = skills.filter((item) => item.handoffs.includes(skill.id)).map((item) => item.id);
    const localized = localizedSkill(skill);

    document.querySelector("#graphSkillName").textContent = localized.name;
    document.querySelector("#graphSkillPurpose").textContent = localized.purpose;
    document.querySelector("#graphSkillCategory").textContent = localized.category;
    document.querySelector("#graphSkillPhase").textContent = phaseLabel(skill.phase);
    document.querySelector("#graphSkillDegree").textContent = t("ui.degree", { outgoing: outgoing.length, incoming: incoming.length });
    document.querySelector("#graphOpenDetail").href = `./index.html#${skill.id}`;
    document.querySelector("#graphOutgoing").innerHTML = renderRelationButtons(outgoing, t("ui.noOutgoing"));
    document.querySelector("#graphIncoming").innerHTML = renderRelationButtons(incoming, t("ui.noIncoming"));
  }

  function renderRelationButtons(ids, emptyText) {
    if (!ids.length) return `<p class="graph-empty-list">${emptyText}</p>`;
    return ids.map((id) => {
      const related = skillById.get(id);
      const localized = localizedSkill(related);
      return `
        <button class="graph-relation" type="button" data-select-skill="${id}">
          <strong>${id}</strong>
          <span>${escapeHtml(localized.purpose)}</span>
        </button>
      `;
    }).join("");
  }

  function selectSkill(id) {
    if (!skillById.has(id)) return;
    activeId = id;
    window.history.replaceState(null, "", `#${id}`);
    renderGraph();
  }

  function showTooltip(event, skill) {
    const localized = localizedSkill(skill);
    tooltip.innerHTML = `
      <strong>${escapeHtml(localized.name)}</strong>
      <span>${escapeHtml(localized.purpose)}</span>
      <small>${escapeHtml(localized.category)} &middot; ${escapeHtml(phaseLabel(skill.phase))}</small>
    `;
    tooltip.classList.add("is-visible");
    moveTooltip(event);
  }

  function moveTooltip(event) {
    const bounds = document.querySelector(".graph-canvas").getBoundingClientRect();
    const offset = 16;
    const x = event.clientX - bounds.left + offset;
    const y = event.clientY - bounds.top + offset;
    tooltip.style.transform = `translate(${x}px, ${y}px)`;
  }

  function hideTooltip() {
    tooltip.classList.remove("is-visible");
  }

  function bindNodeEvents() {
    svg.querySelectorAll(".graph-node").forEach((node) => {
      const id = node.dataset.skill;
      const skill = skillById.get(id);
      node.addEventListener("mouseenter", (event) => {
        showTooltip(event, skill);
      });
      node.addEventListener("mousemove", moveTooltip);
      node.addEventListener("mouseleave", hideTooltip);
      node.addEventListener("pointerdown", (event) => {
        const start = currentPositions.get(id);
        if (!start) return;
        const point = svgPoint(event);
        dragged = {
          id,
          offsetX: point.x - start.x,
          offsetY: point.y - start.y,
          startX: start.x,
          startY: start.y
        };
        node.classList.add("is-dragging");
        node.setPointerCapture?.(event.pointerId);
      });
      node.addEventListener("pointermove", updateDraggedNode);
      node.addEventListener("pointerup", (event) => {
        if (dragged?.id === id) {
          dragged = null;
          node.classList.remove("is-dragging");
          node.releasePointerCapture?.(event.pointerId);
        }
      });
      node.addEventListener("pointercancel", (event) => {
        if (dragged?.id === id) {
          dragged = null;
          node.classList.remove("is-dragging");
          node.releasePointerCapture?.(event.pointerId);
        }
      });
      node.addEventListener("click", () => {
        if (suppressClick) {
          suppressClick = false;
          return;
        }
        selectSkill(id);
      });
      node.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          selectSkill(id);
        }
      });
    });
  }

  document.querySelector(".graph-inspector").addEventListener("click", (event) => {
    const button = event.target.closest("[data-select-skill]");
    if (!button) return;
    searchEl.value = "";
    phaseEl.value = "all";
    selectSkill(button.dataset.selectSkill);
  });

  searchEl.addEventListener("input", renderGraph);
  phaseEl.addEventListener("change", renderGraph);
  resetEl.addEventListener("click", () => {
    searchEl.value = "";
    phaseEl.value = "all";
    manualPositions.clear();
    selectSkill("uipath-platform");
  });

  window.addEventListener("uipath-language-change", renderGraph);

  renderGraph();
})();
