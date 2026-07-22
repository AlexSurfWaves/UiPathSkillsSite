const worker = {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/") {
      url.pathname = "/index.html";
    }

    if (url.pathname === "/graph") {
      url.pathname = "/graph.html";
    }

    return env.ASSETS.fetch(new Request(url, request));
  }
};

export default worker;
