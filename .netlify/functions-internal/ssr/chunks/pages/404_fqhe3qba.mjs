/* empty css                         */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderSlot, g as renderComponent, h as renderHead } from '../astro_V-9gYlQ5.mjs';
import 'kleur/colors';
import 'html-escaper';
import { clsx } from 'clsx';

const $$Astro$b = createAstro();
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Link;
  const { href, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="transition-all ease-in-out duration-300 font-bold capitalize hover:text-blue-800 md:py-6 nav-link dark:text-white"${addAttribute(href, "href")}> ${text} </a> <!-- 
<style>
    .nav-link {
    border-bottom: 2px solid transparent;
    transition: border-bottom-color 0.8s ease, transform 0.8s ease;
    transform: translateY(0%);
    transform-origin: 0 100%;
    
  }
    .nav-link::after{
    content: "";
    position: absolute;
    background-color: #0d6efd;
    height: 2px;
    width: 100%;
    left: 0;
    bottom: 10px;
    transition: 0.3s;
    transform: scale(0);
    transform-origin: right;
    transition: all 0.3s ease-in-out;
  }
  .nav-link:hover::after{
    width: 100%;
    transform: scale(1);
    transform-origin: left;
  }
  </style> -->`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/JobBoard/src/components/ui/Link.astro", void 0);

const $$Astro$a = createAstro();
const $$IconLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$IconLink;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="transition-all ease-in-out duration-300 font-medium hover:text-gray-400 md:py-6 nav-link dark:text-white"${addAttribute(href, "href")}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/JobBoard/src/components/ui/IconLink.astro", void 0);

const SITE_NAME = "Job";
const JOBS_PER_PAGE = 4;

const $$Astro$9 = createAstro();
const $$Logo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Logo;
  return renderTemplate`${maybeRenderHead()}<a class="flex-none text-xl font-bold capitalize dark:text-white text-black" href="/" aria-label="Brand"> <span class="transition-all ease-in-out duration-300 text-rose-700 font-bold animate-pulse text-2xl">.</span>${SITE_NAME}<span class="text-sky-800 dark:text-blue-700">Board</span> </a>`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/JobBoard/src/components/site/Logo.astro", void 0);

const $$Astro$8 = createAstro();
const $$NavBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$NavBar;
  const { user } = Astro2.props;
  return renderTemplate`<!-- ========== HEADER ========== -->${maybeRenderHead()}<header class="top-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm pb-10 fixed"> <nav class="backdrop-blur-sm bg-white-700 relative w-full dark:border-gray-500 rounded-lg md:rounded-none py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto shadow-md" aria-label="Global"> <div class="flex items-center justify-between"> ${renderComponent($$result, "Logo", $$Logo, {})} <div class="md:hidden"> <button type="button" class="hs-collapse-toggle w-8 h-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation"> <svg class="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"></line><line x1="3" x2="21" y1="12" y2="12"></line><line x1="3" x2="21" y1="18" y2="18"></line></svg> <svg class="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> </button> </div> </div> <div id="navbar-collapse-with-animation" class="hs-collapse hidden overflow-hidden transition-all md:justify-start duration-300 basis-full grow md:block"> <div class="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7"> ${renderComponent($$result, "Link", $$Link, { "href": "/", "text": "home" })} ${renderComponent($$result, "Link", $$Link, { "href": "/", "text": "About" })} <!-- <Link href="/" text="Company Reviews" />
          <Link href="/" text="Find Salaries" /> --> </div> </div> <div id="navbar-collapse-with-animation" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"> <div class="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7"> ${user ? renderTemplate`${renderComponent($$result, "IconLink", $$IconLink, { "href": "/" }, { "default": ($$result2) => renderTemplate` <i class="fa-solid fa-message"></i> ` })}` : ""} ${user ? renderTemplate`${renderComponent($$result, "IconLink", $$IconLink, { "href": "/" }, { "default": ($$result2) => renderTemplate` <i class="fa fa-bell relative" aria-hidden="true"> <span class="animate-ping transition-all ease-in-out duration-300 absolute -top-1 -end-1 inline-flex items-center w-2.5 h-2.5 rounded-full border-2 border-white text-xs font-medium bg-teal-500 text-white"> <span class="sr-only">Badge value</span> </span> </i> ` })}` : ""} ${user ? renderTemplate`${renderComponent($$result, "IconLink", $$IconLink, { "href": "/" }, { "default": ($$result2) => renderTemplate` <i class="fa-solid fa-user"></i> ` })}` : renderTemplate`${renderComponent($$result, "IconLink", $$IconLink, { "href": "#" }, { "default": ($$result2) => renderTemplate` <i class="fa fa-sign-in" data-hs-overlay="#hs-focus-management-modal"></i> ` })}`} <div class="md:border-s md:border-gray-300 md:my-6 md:ps-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 hidden"> <button type="button" class="hs-dark-mode-active:hidden block hs-dark-mode group  items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500" data-hs-theme-click-value="dark"> <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg> </button> <button type="button" class="hs-dark-mode-active:block hidden hs-dark-mode group  items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500" data-hs-theme-click-value="light"> <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 8a2 2 0 1 0 4 4"></path><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg> </button> </div> <div class="md:border-s md:border-gray-300 md:my-6 md:ps-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500"> ${renderComponent($$result, "Link", $$Link, { "href": "/Employer/", "text": "Employers/Post Job" })} </div> </div> </div> </nav> </header> <!-- ========== END HEADER ========== -->`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/JobBoard/src/components/NavBar.astro", void 0);

const $$Astro$7 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Footer;
  const date = /* @__PURE__ */ new Date();
  const Year = date.getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto backdrop-blur-sm bg-white-700 border-t"> <!-- Grid --> <div class="text-center"> <div> ${renderComponent($$result, "Logo", $$Logo, {})} </div> <!-- End Col --> <div class="mt-3"> <p class="text-gray-500">We're part of the <a class="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400" href="https://vcbh7dw4-4322.uks1.devtunnels.ms/" target="_blank">OceanOfTech</a> family.</p> <p class="text-gray-500">© JobBoard. ${Year} OceanOfTech. All rights reserved.</p> </div> <!-- Social Brands --> <div class="mt-3 space-x-2"> <a class="transition-all ease-in-out duration-300 inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white" href="#"> <svg class="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path> </svg> </a> <a class="transition-all ease-in-out duration-300 inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white" href="#"> <svg class="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path> </svg> </a> <a class="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition-all ease-in-out duration-300" href="#"> <svg class="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path> </svg> </a> <a class="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition-all ease-in-out duration-30" href="#"> <svg class="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z"></path> </svg> </a> </div> <!-- End Social Brands --> </div> <!-- End Grid --> </footer>`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/JobBoard/src/components/Footer.astro", void 0);

const $$Astro$6 = createAstro();
const $$Cookies = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Cookies;
  return renderTemplate`${maybeRenderHead()}<div id="cookies-simple-with-icon-and-dismiss-button" class="fixed bottom-0 end-50 z-[60] sm:max-w-sm w-full mx-auto p-6"> <!-- Card --> <div class="p-4 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700"> <div class="flex gap-x-4"> <svg class="flex-shrink-0 w-8 h-auto" width="72" height="63" viewBox="0 0 72 63" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.5174 56.1528C16.2903 57.6825 16.929 61.4559 14.8118 60.9459C13.5013 60.5381 11.4445 57.6213 12.493 56.1528C12.661 55.8468 13.2189 55.2757 14.106 55.4389" stroke="currentColor" class="dark:stroke-gray-200" stroke-width="2" stroke-linecap="round"></path> <path d="M15.5173 49.6263L14.0262 48.5579C13.5346 48.2056 12.8477 48.3707 12.658 48.945C12.3456 49.8907 12.1258 51.1463 12.462 52.2324C12.5336 52.4636 12.7127 52.6466 12.9449 52.7146C13.8342 52.9751 15.2568 52.9048 15.8197 51.054" stroke="currentColor" class="dark:stroke-gray-200" stroke-width="2" stroke-linecap="round"></path> <mask id="path-3-inside-1_4542_101166" fill="currentColor" class="text-gray-800 dark:fill-gray-200"> <ellipse rx="1.09811" ry="0.738034" transform="matrix(0.921654 0.388014 -0.38048 0.924789 14.2069 43.4055)"></ellipse> </mask> <path d="M13.3756 43.0555C13.6288 42.4402 14.1378 42.259 14.3273 42.2214C14.5316 42.1809 14.6503 42.223 14.687 42.2384L13.1651 45.9376C13.7607 46.1884 14.4484 46.2907 15.1206 46.1574C15.7781 46.0269 16.654 45.5999 17.0622 44.6076L13.3756 43.0555ZM14.687 42.2384C14.7237 42.2539 14.8369 42.3094 14.9524 42.4846C15.0596 42.6471 15.2913 43.1401 15.0381 43.7554L11.3515 42.2034C10.9432 43.1957 11.261 44.1253 11.6329 44.689C12.0131 45.2654 12.5694 45.6868 13.1651 45.9376L14.687 42.2384ZM15.0381 43.7554C14.7849 44.3708 14.2759 44.552 14.0864 44.5895C13.8821 44.6301 13.7634 44.588 13.7267 44.5725L15.2486 40.8734C14.653 40.6226 13.9653 40.5203 13.2931 40.6536C12.6357 40.784 11.7597 41.2111 11.3515 42.2034L15.0381 43.7554ZM13.7267 44.5725C13.69 44.5571 13.5768 44.5015 13.4613 44.3264C13.3541 44.1638 13.1225 43.6709 13.3756 43.0555L17.0622 44.6076C17.4705 43.6153 17.1527 42.6857 16.7809 42.1219C16.4007 41.5455 15.8443 41.1241 15.2486 40.8734L13.7267 44.5725Z" fill="black" mask="url(#path-3-inside-1_4542_101166)"></path> <mask id="path-5-inside-2_4542_101166" fill="currentColor" class="text-gray-800 dark:fill-gray-200"> <ellipse rx="1.00988" ry="1.0181" transform="matrix(0.921654 0.388014 -0.38048 0.924789 21.3702 57.2201)"></ellipse> </mask> <path d="M20.4576 56.8359C20.6581 56.3486 21.2257 56.094 21.7438 56.312L20.2219 60.0112C21.768 60.6621 23.5159 59.9153 24.1442 58.388L20.4576 56.8359ZM21.7438 56.312C22.2618 56.5301 22.4832 57.1169 22.2827 57.6043L18.5961 56.0522C17.9677 57.5795 18.6757 59.3603 20.2219 60.0112L21.7438 56.312ZM22.2827 57.6043C22.0822 58.0916 21.5146 58.3462 20.9966 58.1281L22.5185 54.429C20.9724 53.7781 19.2245 54.5249 18.5961 56.0522L22.2827 57.6043ZM20.9966 58.1281C20.4785 57.9101 20.2571 57.3233 20.4576 56.8359L24.1442 58.388C24.7726 56.8607 24.0646 55.0799 22.5185 54.429L20.9966 58.1281Z" fill="black" mask="url(#path-5-inside-2_4542_101166)"></path> <mask id="path-7-inside-3_4542_101166" fill="currentColor" class="text-gray-800 dark:fill-gray-200"> <ellipse rx="1.00988" ry="1.0181" transform="matrix(0.921654 0.388014 -0.38048 0.924789 6.75397 38.8236)"></ellipse> </mask> <path d="M5.84142 38.4394C6.04192 37.9521 6.60952 37.6975 7.12756 37.9156L5.60564 41.6147C7.15177 42.2656 8.89966 41.5188 9.52804 39.9915L5.84142 38.4394ZM7.12756 37.9156C7.6456 38.1337 7.86701 38.7205 7.66651 39.2078L3.9799 37.6557C3.35152 39.1831 4.05951 40.9638 5.60564 41.6147L7.12756 37.9156ZM7.66651 39.2078C7.46601 39.6951 6.89842 39.9498 6.38037 39.7317L7.90229 36.0325C6.35616 35.3816 4.60827 36.1284 3.9799 37.6557L7.66651 39.2078ZM6.38037 39.7317C5.86233 39.5136 5.64092 38.9268 5.84142 38.4394L9.52804 39.9915C10.1564 38.4642 9.44843 36.6834 7.90229 36.0325L6.38037 39.7317Z" fill="black" mask="url(#path-7-inside-3_4542_101166)"></path> <path d="M31.6479 50.2383C31.5807 51.2241 32.1721 53.053 35.0756 52.4819" stroke="currentColor" class="dark:stroke-gray-200" stroke-width="2" stroke-linecap="round"></path> <path d="M50.9903 34.6769C50.1699 34.1428 48.3973 33.5907 47.8709 35.6552" stroke="currentColor" class="dark:stroke-gray-200" stroke-width="2" stroke-linecap="round"></path> <path d="M40.9087 17.4562C40.0882 16.9221 38.3156 16.37 37.7892 18.4345" stroke="currentColor" class="dark:stroke-gray-200" stroke-width="2" stroke-linecap="round"></path> <path d="M27.8502 29.3345C27.1279 29.998 26.1419 31.587 27.977 32.6357" stroke="currentColor" class="dark:stroke-gray-200" stroke-width="2" stroke-linecap="round"></path> <path d="M62.1917 19.585C62.4894 18.6451 62.5577 16.7703 60.4502 16.7902" stroke="currentColor" class="dark:stroke-gray-200" stroke-width="2" stroke-linecap="round"></path> <ellipse cx="51.2061" cy="22.3973" rx="3.02446" ry="3.05945" fill="currentColor" class="text-gray-800 dark:fill-gray-200"></ellipse> <path d="M67.7398 29.6361C68.8249 31.2826 67.6381 32.6215 66.8281 33.1457C66.7645 33.1869 66.695 33.2184 66.6214 33.2363C65.0504 33.618 63.6063 31.5388 63.6063 30.0441C63.6064 28.8034 66.3283 27.4945 67.7398 29.6361Z" fill="currentColor" class="text-gray-800 dark:fill-gray-200"></path> <path d="M58.868 38.6126C57.9809 36.4914 54.6002 37.7288 53.0207 38.6126C51.7101 39.2284 52.0126 41.4681 53.6256 43.3038C54.9161 44.7723 56.5157 44.1196 57.1542 43.6097C58.0951 42.8279 59.7552 40.7339 58.868 38.6126Z" fill="currentColor" class="text-gray-800 dark:fill-gray-200"></path> <path d="M5.85665 41.8048C5.21042 40.2694 2.74791 41.1651 1.59743 41.8048C0.642774 42.2505 0.863078 43.8717 2.03804 45.2004C2.978 46.2634 4.14317 45.7909 4.60826 45.4219C5.29365 44.8559 6.50288 43.3402 5.85665 41.8048Z" stroke="currentColor" class="dark:stroke-gray-200" stroke-width="2" stroke-linecap="round"></path> <path d="M45.4596 49.2172C40.9431 47.667 40.2844 51.6987 40.5196 53.9083C40.8221 55.3361 42.4351 55.54 43.4433 55.2341C45.5677 54.5894 51.1052 51.1548 45.4596 49.2172Z" fill="currentColor" class="text-gray-800 dark:fill-gray-200"></path> <ellipse rx="2.96295" ry="3.45694" transform="matrix(0.855131 0.518411 -0.509711 0.860345 30.4996 41.3871)" fill="currentColor" class="text-gray-800 dark:fill-gray-200"></ellipse> <path d="M38.5032 29.1282C39.471 27.8228 37.8983 26.0687 36.991 25.3549C36.0836 24.6411 34.8335 24.8654 33.8657 26.1707C32.7567 27.6664 37.2934 30.7599 38.5032 29.1282Z" fill="currentColor" class="text-gray-800 dark:fill-gray-200"></path> <path d="M19.2476 18.9295C16.4247 18.2768 15.7862 19.8813 15.8198 20.7652C16.0215 23.8246 20.5582 24.4365 21.6672 23.6207C22.4364 23.0548 22.7761 19.7453 19.2476 18.9295Z" fill="currentColor" class="text-gray-800 dark:fill-gray-200"></path> <path d="M36.6888 6.79381C35.6403 4.67259 33.2947 5.02613 32.2529 5.46805C28.7042 6.61025 29.3292 8.52749 30.1358 9.13938C31.3456 10.1252 34.2289 12.0153 36.0839 11.6889C38.4027 11.281 37.9994 9.44533 36.6888 6.79381Z" fill="currentColor" class="text-gray-800 dark:fill-gray-200"></path> <path d="M56.9526 54.9284C57.7592 53.5006 60.2795 51.0735 65.1187 49.9313C66.0596 49.7953 67.9818 48.5647 68.1431 44.7302C68.3448 39.9371 73.5872 32.9003 69.3529 28.1072C67.5382 26.053 68.4456 23.2121 67.5382 17.7051" stroke="currentColor" class="dark:stroke-gray-200" stroke-width="2" stroke-linecap="round"></path> <path d="M66.7316 16.176C65.1521 14.2383 60.6625 9.8939 55.3394 8.01743C48.703 5.67797 55.8063 4.55591 44.1399 4.75246C44.0816 4.75344 44.0194 4.76029 43.9617 4.76836C43.019 4.90008 40.5102 4.51266 37.2614 1.95295C37.2161 1.91728 37.1681 1.88406 37.1153 1.86091C36.6 1.63502 35.1744 1.43154 32.9584 2.2045C30.6195 3.02036 24.0531 5.46791 21.0622 6.58971C20.4237 6.92965 19.0056 8.05825 18.441 9.85312C17.7353 12.0967 5.93991 23.5187 9.56927 28.9237" stroke="currentColor" class="dark:stroke-gray-200" stroke-width="2" stroke-linecap="round"></path> <path d="M10.4768 30.1484C11.9084 30.3333 14.621 31.3895 15.0562 34.1372C15.1369 34.6464 15.5068 35.0847 16.0079 35.2063C18.8253 35.8904 22.6446 38.4014 20.8122 44.4603C20.7218 44.7592 20.7652 45.0847 20.9158 45.3583C21.7327 46.8422 22.367 49.4462 20.6725 51.7386C20.1262 52.4776 20.4167 53.842 21.2912 54.1243C23.3727 54.7962 25.8398 55.985 27.2662 57.833C27.5533 58.2049 28.0338 58.3932 28.4956 58.3062C30.4142 57.9446 33.9492 57.9776 37.2937 60.233C42.1328 63.4964 42.3345 60.0291 48.6858 60.7429C53.7669 61.314 55.7765 58.3294 56.1462 56.7656" stroke="currentColor" class="dark:stroke-gray-200" stroke-width="2" stroke-linecap="round"></path> </svg> <p class="text-sm text-gray-800 dark:text-gray-200">
By browsing this website, you accept our <a class="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium" href="/CookiPolicy">Cookies Policy</a> </p> <div> <button type="button" class="p-2 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-remove-element="#cookies-simple-with-icon-and-dismiss-button"> <span class="sr-only">Dismiss</span> <svg class="flex-shrink-0 h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> </button> </div> </div> </div> <!-- End Card --> </div>`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/JobBoard/src/components/Cookies.astro", void 0);

const $$Astro$5 = createAstro();
const $$BackToTop = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BackToTop;
  return renderTemplate`${maybeRenderHead()}<i class="fixed fas fa-arrow-up bg-blue-300 text-blue-500 bg-opacity-25 fw-bold p-5 rounded-lg max-w-auto cursor-pointer bottom-10 end-10 z-[60] me-15 transition-all ease-in-out duration-300 hidden" id="btn-back-to-top" style="display: none;"></i> `;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/JobBoard/src/components/ui/BackToTop.astro", void 0);

const $$Astro$4 = createAstro();
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Button;
  const { type } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(type, "type")} class="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-non"> ${renderSlot($$result, $$slots["default"])} </button>`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/JobBoard/src/components/ui/Button.astro", void 0);

const $$Astro$3 = createAstro();
const $$Input = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Input;
  const { type, id, name, placeholder, required, disabled, autofocus } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<input${addAttribute(type, "type")}${addAttribute(id, "id")}${addAttribute(name, "name")}${addAttribute(id, "autocomplete")}${addAttribute(placeholder, "placeholder")} required${addAttribute(disabled, "disabled")}${addAttribute(clsx(`form-input py-3 px-4 block w-full rounded-lg text-semibold border-0 ring-1 ring-gray-300 ring-inset focus:ring-0 focus:ring-inset focus:ring-sky-600 disabled:opacity-50 disabled:pointer-events-none me-2 sm:text-sm sm:leading-6`, disabled && "opacity-80 pointer-events-none"), "class")}>`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/JobBoard/src/components/ui/Input.astro", void 0);

const $$Astro$2 = createAstro();
const $$LoginModal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LoginModal;
  return renderTemplate`${maybeRenderHead()}<div id="hs-focus-management-modal" class="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"> <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all lg:max-w-4xl lg:w-full m-3 lg:mx-auto items-center"> <div class="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] "> <div class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700"> <h3 class="font-bold text-gray-800 dark:text-white">
Add user
</h3> <button type="button" class="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-focus-management-modal"> <span class="sr-only">Close</span> <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> </button> </div> <div class="p-4 overflow-y-auto"> <label for="email" class="block text-sm mb-2 dark:text-white font-bold">Email</label> ${renderComponent($$result, "Input", $$Input, { "id": "email", "name": "email", "placeholder": "Enter new users email address", "required": true, "autofocus": true })} <div class="mt-3"> <h1 class="text-lg font-semibold">What level access would you like to provide.?</h1> </div> <div class="mt-4"> <div class="flex flex-col text-lg"> <div> <div class="flex"> <input type="radio" name="hs-default-radio" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-default-radio"> <label for="hs-default-radio" class="text-sm text-gray-500 ms-2 dark:text-gray-400 font-bold">Admin (Full access to all features) - same as you</label> </div> </div> <div> <div class="flex mt-3"> <input type="radio" name="hs-default-radio" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-checked-radio" checked> <label for="hs-checked-radio" class="text-sm text-gray-500 ms-2 dark:text-gray-400 font-bold">Most common access level</label> </div> </div> </div> <div class="flex flex-col ms-4"> <div class="flex me-3"> <input type="checkbox" class="shrink-0 mt-0.5 border-blue-200 rounded disabled:text-blue-600 text-blue-600 focus:ring-blue-500  disabled:pointer-events-none" id="hs-checked-checkbox" checked disabled> <label for="hs-checked-checkbox" class="text-sm text-gray-500 ms-3 dark:text-gray-400">Jobs (Post, sponsor, and manage jobs directly on Indeed)</label> </div> <div class="flex me-3"> <input type="checkbox" class="shrink-0 mt-0.5 border-blue-200 rounded disabled:text-blue-600 text-blue-600 focus:ring-blue-500  disabled:pointer-events-none" id="hs-checked-checkbox" checked disabled> <label for="hs-checked-checkbox" class="text-sm text-gray-500 ms-3 dark:text-gray-400">Candidates (View and contact applicants to posted jobs; message applicants and resume contacts)</label> </div> </div> </div> </div> <div class="flex justify-end items-center gap-x-2 py-3 px-4 dark:border-gray-700"> <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-base rounded-lg font-semibold text-blue-500 hover:bg-blue-300 disabled:opacity-50 disabled:pointer-events-none transition-all ease-in-out duration-300" data-hs-overlay="#hs-focus-management-modal">
Cancel
</button> ${renderComponent($$result, "Button", $$Button, { "type": "submit" }, { "default": ($$result2) => renderTemplate`Save and notify new user` })} </div> <div class=" m-4 p-2"> <p class="text-gray-500 text-sm">
By clicking <strong>"Save and notify new users"</strong>, I agree jobBoard may share access to the employer account with this user, that I am authorized to grant such access, and for my email address to be shared with the user in this email notification. This user's access will match the role(s) I have selected for them.
</p> </div> </div> </div> </div>`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/JobBoard/src/components/LoginModal.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  const user = "";
  return renderTemplate`<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><!-- <link rel="icon" type="image/svg+xml" href="/favicon.svg" /> --><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"><link rel="icon" type="image/png" href="/favicon/favicon-32x32.png"><link rel="icon" type="image/png" href="/favicon/favicon-16x16.png"><link rel="manifest" href="/favicon/site.webmanifest"><!-- <ViewTransitions /> --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.0.1/remixicon.css">${renderHead()}</head> <body class="dark:bg-[#13151a]"> ${renderComponent($$result, "NavBar", $$NavBar, { "user": user })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "Cookies", $$Cookies, {})} ${renderComponent($$result, "BackToTop", $$BackToTop, {})} ${renderComponent($$result, "LoginModal", $$LoginModal, {})}  </body> </html>`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/JobBoard/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Error 404" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16"> <div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0"> <div class="relative"> <div class="absolute"> <div class=""> <h1 class="my-2 text-gray-800 font-bold text-2xl">
Looks like you've found the
                        doorway to the great nothing
</h1> <p class="my-2 text-gray-800 mb-10">Sorry about that! Please visit our homepage to get where you need to go.</p> <a href="/" class="sm:w-full lg:w-auto my-2 border md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50 rounded-lg mt-10">
Take me there!
</a> </div> </div> <div> <img src="https://i.ibb.co/G9DC8S0/404-2.png"> </div> </div> </div> <div> <img src="https://i.ibb.co/ck1SGFJ/Group.png"> </div> </div> ` })}`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/JobBoard/src/pages/404.astro", void 0);

const $$file = "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/JobBoard/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Input as $, JOBS_PER_PAGE as J, _404 as _, $$Button as a, $$Layout as b, $$Link as c, $$Logo as d };