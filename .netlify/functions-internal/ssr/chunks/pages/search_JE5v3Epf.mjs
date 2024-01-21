/* empty css                         */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, g as renderComponent } from '../astro_V-9gYlQ5.mjs';
import 'kleur/colors';
import 'html-escaper';
import { b as $$Layout } from './404_fqhe3qba.mjs';
import { $ as $$JobCard } from './index_Dd8e94bq.mjs';
import { $ as $$SearchInput } from './_id__9qeDQx3Z.mjs';
import { AllJobs } from './posts_cntGLb6r.mjs';
import 'clsx';

const $$Astro$1 = createAstro();
const $$NoMatchingJobsCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NoMatchingJobsCard;
  const { SearchResult, query, location } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`bg-red-50 border-2 border-red-300 text-red-800 rounded-lg shadow-lg p-4 dark:bg-gray-800 dark:border-gray-700 ${SearchResult.length > 0 ? "hidden" : ""}`, "class")} role="alert"> <div class="flex"> <div class="flex-shrink-0"> <svg class="flex-shrink-0 h-4 w-4 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg> </div> <div class="ms-3"> <h3 class="font-semibold -mt-1 dark:text-white">
Search Results
</h3> <p class="mt-2 text-sm  dark:text-gray-400"></p><h6 class="">The search <strong>${query}</strong> Jobs in <strong>${location}</strong> did not match any jobs.</h6> <div class="mt-3"> <h1 class="font-bold ">Search suggestions:</h1> <div class="mt-2 flex flex-col"> <div class="inline-flex items-center ms-3"> <span class="w-2 h-2 inline-block bg-red-500 rounded-full me-2"></span> <span class=" dark:text-gray-400">Try more general keywords</span> </div> <div class="inline-flex items-center ms-3"> <span class="w-2 h-2 inline-block bg-red-500 rounded-full me-2"></span> <span class=" dark:text-gray-400">Check your spelling</span> </div> <div class="inline-flex items-center ms-3"> <span class="w-2 h-2 inline-block bg-red-500 rounded-full me-2"></span> <span class=" dark:text-gray-400">Replace abbreviations with the entire word</span> </div> </div> </div>  </div> </div> </div>`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/JobBoard/src/components/NoMatchingJobsCard.astro", void 0);

const $$Astro = createAstro();
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const query = Astro2.url.searchParams.get("query");
  const location = Astro2.url.searchParams.get("location");
  if (!query || query === null || !location || location === null) {
    Astro2.redirect("/");
  }
  const Jobs = AllJobs;
  const SearchResult = Jobs.filter((job) => {
    job.title.toLowerCase().includes(query.toLocaleLowerCase());
    const LocationMatch = job.center.toLowerCase().includes(location.toLocaleLowerCase());
    const DutiesMatch = job.duties.toLowerCase().includes(query.toLocaleLowerCase());
    console.log(job.duties);
    return LocationMatch && DutiesMatch;
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Search | ` + query + " - " + location }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SearchInput", $$SearchInput, {})} ${maybeRenderHead()}<div class="items-center gap-12 shawdow-md"> <div class="flex flex-col cards transition-all ease-in-out duration-300  max-w-[50rem] px-4 sm:px-3 lg:px-8 mx-auto pb-6"> <div class="flex flex-col items-start gap-1"> <!--<a href="/" class="inline-block bg-gray-100 p-2 mb-5 hover:bg-indigo-500 hover:text-white rounded-lg me-9">Back</a>--> <div class="flex flex-row items-center justify-evenly"> <span class="text-gray-600 dark:text-gray-400 py-3 text-sm font-semibold"><strong>Search results for: </strong> ${query} Jobs in ${location} </span> <span${addAttribute(`sm:hiddden ms-6 py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium ${SearchResult.length === 0 ? "bg-rose-200 text-rose-800" : "bg-teal-200 text-teal-800"} rounded-full dark:bg-teal-500/10 dark:text-teal-500`, "class")}> <svg class="flex-shrink-0 w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg> ${SearchResult.length} Job post${SearchResult.length > 1 ? "s" : ""} </span> </div> </div> ${SearchResult.map(
    (job) => renderTemplate`${renderComponent($$result2, "JobCard", $$JobCard, { "job": job })}`
  )} ${renderComponent($$result2, "NoMatchingJobsCard", $$NoMatchingJobsCard, { "SearchResult": SearchResult, "query": query, "location": location })} <!-- <SearchPagination  currentPage={currentPage} totalPages={totalPages} disableNext={currentPage === totalPages} disablePrevious={currentPage === 1}/> --> </div> </div> ` })}`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/JobBoard/src/pages/search.astro", void 0);

const $$file = "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/JobBoard/src/pages/search.astro";
const $$url = "/search";

export { $$Search as default, $$file as file, $$url as url };
