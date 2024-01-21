import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_wWsHqzC6.mjs';

const _page0  = () => import('./chunks/generic_hUjIs7z9.mjs');
const _page1  = () => import('./chunks/index_ZgC4NSJY.mjs');
const _page2  = () => import('./chunks/index_v_KhR6_7.mjs');
const _page3  = () => import('./chunks/_id__W5p6cehu.mjs');
const _page4  = () => import('./chunks/search_cpNPP9UK.mjs');
const _page5  = () => import('./chunks/_id__8NsIFfpv.mjs');
const _page6  = () => import('./chunks/404_an7CNDHI.mjs');
const _page7  = () => import('./chunks/index_8dy0jOo5.mjs');
const _page8  = () => import('./chunks/index_8rfbR1M1.mjs');
const _page9  = () => import('./chunks/posts_iRmtq8tU.mjs');
const _page10  = () => import('./chunks/_id__R9R8eP4m.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/Employer/index.astro", _page2],["src/pages/Company/[id].astro", _page3],["src/pages/search.astro", _page4],["src/pages/jobs/[id].astro", _page5],["src/pages/404.astro", _page6],["src/pages/api/users/index.ts", _page7],["src/pages/api/jobs/index.ts", _page8],["src/pages/api/jobs/posts.ts", _page9],["src/pages/api/jobs/[id].ts", _page10]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = undefined;

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
