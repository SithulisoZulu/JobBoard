import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'html-escaper';
import 'clsx';
import './chunks/astro_V-9gYlQ5.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.ti5rIuZ1.js"}],"styles":[{"type":"external","src":"/_astro/_id_.Yc6Mpkqw.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Xu0CfOMp.js"}],"styles":[{"type":"external","src":"/_astro/_id_.Yc6Mpkqw.css"}],"routeData":{"route":"/employer","type":"page","pattern":"^\\/Employer\\/?$","segments":[[{"content":"Employer","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Employer/index.astro","pathname":"/Employer","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.ti5rIuZ1.js"}],"styles":[{"type":"external","src":"/_astro/_id_.Yc6Mpkqw.css"}],"routeData":{"route":"/company/[id]","type":"page","pattern":"^\\/Company\\/([^/]+?)\\/?$","segments":[[{"content":"Company","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/Company/[id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.ti5rIuZ1.js"}],"styles":[{"type":"external","src":"/_astro/_id_.Yc6Mpkqw.css"}],"routeData":{"route":"/search","type":"page","pattern":"^\\/search\\/?$","segments":[[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/search.astro","pathname":"/search","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.ti5rIuZ1.js"}],"styles":[{"type":"external","src":"/_astro/_id_.Yc6Mpkqw.css"}],"routeData":{"route":"/jobs/[id]","type":"page","pattern":"^\\/jobs\\/([^/]+?)\\/?$","segments":[[{"content":"jobs","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/jobs/[id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.ti5rIuZ1.js"}],"styles":[{"type":"external","src":"/_astro/_id_.Yc6Mpkqw.css"}],"routeData":{"route":"/404","type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/users","type":"endpoint","pattern":"^\\/api\\/users\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"users","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/users/index.ts","pathname":"/api/users","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/jobs","type":"endpoint","pattern":"^\\/api\\/jobs\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"jobs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/jobs/index.ts","pathname":"/api/jobs","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/jobs/posts","type":"endpoint","pattern":"^\\/api\\/jobs\\/posts\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"jobs","dynamic":false,"spread":false}],[{"content":"posts","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/jobs/posts.ts","pathname":"/api/jobs/posts","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/jobs/[id]","type":"endpoint","pattern":"^\\/api\\/jobs\\/([^/]+?)\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"jobs","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/api/jobs/[id].ts","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/JobBoard/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/JobBoard/src/pages/Company/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/JobBoard/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/JobBoard/src/pages/jobs/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/JobBoard/src/pages/search.astro",{"propagation":"none","containsHead":true}],["C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/JobBoard/src/pages/Employer/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/api/jobs/[id].ts":"chunks/pages/_id__fLYQzYhS.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_yrPraf88.mjs","/src/pages/api/jobs/posts.ts":"chunks/pages/posts_cntGLb6r.mjs","/src/pages/search.astro":"chunks/pages/search_JE5v3Epf.mjs","\u0000@astrojs-manifest":"manifest_wWsHqzC6.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_hUjIs7z9.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_ZgC4NSJY.mjs","\u0000@astro-page:src/pages/Employer/index@_@astro":"chunks/index_v_KhR6_7.mjs","\u0000@astro-page:src/pages/Company/[id]@_@astro":"chunks/_id__W5p6cehu.mjs","\u0000@astro-page:src/pages/search@_@astro":"chunks/search_cpNPP9UK.mjs","\u0000@astro-page:src/pages/jobs/[id]@_@astro":"chunks/_id__8NsIFfpv.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_an7CNDHI.mjs","\u0000@astro-page:src/pages/api/users/index@_@ts":"chunks/index_8dy0jOo5.mjs","\u0000@astro-page:src/pages/api/jobs/index@_@ts":"chunks/index_8rfbR1M1.mjs","\u0000@astro-page:src/pages/api/jobs/posts@_@ts":"chunks/posts_iRmtq8tU.mjs","\u0000@astro-page:src/pages/api/jobs/[id]@_@ts":"chunks/_id__R9R8eP4m.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.ti5rIuZ1.js","/astro/hoisted.js?q=1":"_astro/hoisted.Xu0CfOMp.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/_id_.Yc6Mpkqw.css","/favicon.svg","/favicon/about.txt","/favicon/android-chrome-192x192.png","/favicon/android-chrome-512x512.png","/favicon/apple-touch-icon.png","/favicon/favicon-16x16.png","/favicon/favicon-32x32.png","/favicon/favicon.ico","/favicon/site.webmanifest","/_astro/hoisted.ti5rIuZ1.js","/_astro/hoisted.Xu0CfOMp.js"]});

export { manifest };
