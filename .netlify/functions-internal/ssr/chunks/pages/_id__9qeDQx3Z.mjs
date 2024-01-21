/* empty css                         */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, g as renderComponent } from '../astro_V-9gYlQ5.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Input, a as $$Button, b as $$Layout, c as $$Link } from './404_fqhe3qba.mjs';
import { getApps, initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const $$Astro$2 = createAstro();
const $$SearchInput = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SearchInput;
  return renderTemplate`${maybeRenderHead()}<div class="max-w-[50rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-10 "> <form id="search-form" action="/search"> <div class="flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-gray-200 rounded-lg p-2 shadow-lg "> <div class="w-full"> <label for="search" class="sr-only">Search</label> <div class="flex flex-row"> ${renderComponent($$result, "Input", $$Input, { "type": "text", "id": "queary", "name": "query", "placeholder": "Job title, Keywords", "required": true })} ${renderComponent($$result, "Input", $$Input, { "type": "text", "id": "location", "name": "location", "placeholder": 'City, state, zip code or "remote"', "required": true })} </div> </div> ${renderComponent($$result, "Button", $$Button, { "type": "submit" }, { "default": ($$result2) => renderTemplate`Find jobs` })} </div> </form> </div>`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/JobBoard/src/components/SearchInput.astro", void 0);

const activeApps = getApps();
const serviceAccount = {
  type: "service_account",
  project_id: "enoway-solutions",
  private_key_id: "23f9f3ab7f3159c32debbc91b7e5d01976f78d68",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCo8VwQtKf7+EXC\nyMQsMqhmgGx4/opD7lMuxboJSbRxwD1CZEkt8gi+lIz2YLe8fEW+ZKvJVR3Nv81J\nNVthzwVjlX5p6s9YR6uBvxCGAayN5YJ7H5qCeDBbyrUG4Pu6w81bNPs5hq7k8bRr\n+cKLqNjIXIZ/CWTxICFe3h+PC0YJALeVb3wuRevgm0lTB6HubUM8fC9HZwmgmUWF\nnaRAcSvjH/jNxZr6PeqOFuZXfR+A7DW9Knu5nw7E2Gc0r23LQetskQ0QnhK1hOTJ\nXZwePJGWGIU1yevucQvGRX+kIAgZJtVOV8eJWZk8GA0Mr8fQJLcdrYL713NjD110\n+5J7hL+hAgMBAAECggEAAJRfZVFGrZcdn3xH1qz6e0Df3mRlKLQrGzh4xGpj0Otr\namG6BzXS24Xam/JwqZgK4eB/ibUd4TmnZHkR41qDTA2pvYby3NHWH/T+A1pYc14r\ns0IZqhlBH+IopSmQGNpuHGzTRdBqo4TEF9tnVEpT1WV33VIKGMesRaKLx4EEOv4B\nCjpjdqkxOxo+zjnruK22t4DZ80zSyHqgWGdsPZ5pg0lV3PYDXGSAflCdDe6T/NgW\nb8ENXwmZ8oCbGBJfyBTFq1nokot3imWiVzRrqE8NwBJNWfabsaVDjMLLSmtuLjaM\nwNgthhtWUswgRQMiXNWTHfUcs4nQUnltkurAmgYW7wKBgQDgR2UO9Rv2IxtFHVRR\nPgyxjthYUPTCkmdV/Ta3nFRaE8H/vZHU+oE1W4aLtOHZcX+243S1m7ZWxOoiOlGw\n3sT8oPEwZy/OY9o7UK944FcdW13hE2vXelz3ckZdG3XGTsM5TTiAr17LGRt2TQ2c\nB3ST7W6LF01k2xdQ8yst0W3XxwKBgQDA1mCNzrcVGJ3qPlymWhsK4lGIObFgVINb\nej5WrNuUGSu0B2yHGkV43pBQJWWpBOaT58QNv29IfIyeKFOoSixf8qDl0vIPVpdq\nFPF5IuX0wESAiOOwWGuH3rTgQBxidRwas5WnT2p4NRKGpoDp+DO0IuQTzrLTkGnb\nJ009owo9VwKBgQDMG8151lHTKFH6DV4d7cVpliGIBm0p4klO9Xnlkc0miRKl5uUg\nGbabU6dX348m7+cWD1y4pnRD9UNLUR3lRGerreCyd0YHo9II5z46WJiPbAY8/wrG\n+GJBA+vLcmE1z5pVvNQuMOupFDls6WT4WcSbl5ph1RwnLEjE7/ic4xr/IwKBgQC6\nvyE0U2sUAAn17jy1UO99Y90Haq+vFUk8jq7OK4pd6t5a8xGT6Mo8mnTxWLYRr9BI\njhtcIPb5ILzg8TbK9EHzDTnqN5X5aqcpsWyEHlrJ4mS0gVzWy1ofc3qA7TVP2A/G\ngAG+zHbUQLlXMuoHKzmPCncMA5FEt0b8WBxCQ6FH8wKBgQCKAoBdi4IvzQ4NOxai\n5bQzpSRwpXEyGjBUth/YQU8smQ6ARFSDLKC3pcL0J+gtfltnX8LVj2kCqmzupZYN\nO2x4SgZ/1zHBw4PZ/ZSBLvD1F4sDZ8cWJdrUThShRJcgK1NY7BrbObcUSpG1aMzf\n+ge19kiuY/q2eB4Q+3DzTflP7g==\n-----END PRIVATE KEY-----\n".replace(/\\n/g, "\n"),
  client_email: "firebase-adminsdk-56mot@enoway-solutions.iam.gserviceaccount.com",
  client_id: "102228053992796681529",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-56mot%40enoway-solutions.iam.gserviceaccount.com"
};
const app = activeApps.length === 0 ? initializeApp({
  credential: cert(serviceAccount)
}) : activeApps[0];

const $$Astro$1 = createAstro();
const $$id$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$id$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Job title will go here" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Hello Company Details</h1> ` })}`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/JobBoard/src/pages/Company/[id].astro", void 0);

const $$file$1 = "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/JobBoard/src/pages/Company/[id].astro";
const $$url$1 = "/Company/[id]";

const _id_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  if (!id) {
    return Astro2.redirect("/404");
  }
  const db = getFirestore(app);
  const PostsRef = db.collection("Posts");
  const PostsSnapshot = await PostsRef.doc(id).get();
  if (!PostsSnapshot.exists) {
    return Astro2.redirect("/404");
  }
  const Job = PostsSnapshot.data();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": Job.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SearchInput", $$SearchInput, {})} ${maybeRenderHead()}<div class="px-4 sm:px-3 lg:px-8"> <div class="border rounded-lg max-w-[50rem] mx-auto mb-4"> <div class="shadow-md p-3"> <h1 class="font-semibold capitalize mt-2">${Job.title}</h1> <div class="mt-2"> <i class="ri-building-line text-black"></i> ${renderComponent($$result2, "Link", $$Link, { "text": "Dut Appfactory", "href": "/Company/somecompany" })} </div> <div class="mt-2"> <i class="bi bi-geo-alt "></i> <span class="text-small text-gray-600">${Job.center}</span> </div> <div class="mt-2"> <span class="text-small text-gray-900">${Job.salary} - Full-time</span> </div> <div class="flex flex-row mt-2"> <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 me-2">
Apply now
</button> <button type="button" class="flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] text-sm font-semibold rounded-lg border border-transparent bg-gray-400 text-white hover:bg-gray-500 disabled:opacity-50 disabled:pointer-events-none me-2"> <i class="ri-bookmark-line text-lg"></i> </button> <button type="button" class="flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] text-sm font-semibold rounded-lg border border-transparent bg-gray-400 text-white hover:bg-gray-500 disabled:opacity-50 disabled:pointer-events-none"> <i class="ri-spam-2-line text-lg"></i> </button> </div> </div> <div class="h-auto"> <div class="mt-2 p-3 border-b"> <h1 class="font-semibold capitalize mt-2">Job details</h1> <div class="mt-2"> <i class="bi bi-cash"></i> <span class="text-small font-semibold text-gray-900">Pay</span> <div class="flex flex-row"> <div class="mt-2 ms-4 text-green-800 bg-green-700 bg-opacity-20 rounded-md text-sm font-bold p-1 w-auto px-3 shadow-md"> ${Job.salary} <i class="fa fa-check"></i> </div> </div> </div> <div class="mt-2"> <i class="ri-suitcase-line"></i> <span class="text-small font-semibold text-gray-900">Job type</span> <div class="flex flex-row"> <div class="mt-2 ms-4 text-green-800 bg-green-700 bg-opacity-20 rounded-md text-sm font-bold p-1 w-auto px-3 shadow-md">
R20 000 a month <i class="fa fa-check"></i> </div> </div> </div> </div> <div class="mt-2 p-3 border-b"> <h1 class="font-semibold capitalize mt-2">Location</h1> <div class="mt-2"> <i class="ri-map-pin-line"></i><label class="ms-5">${Job.center}</label> </div> </div> <div class="mt-2 p-3 "> <p>${Job.duties}</p> </div> </div> </div> </div> ` })}`;
}, "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/JobBoard/src/pages/jobs/[id].astro", void 0);

const $$file = "C:/Users/Wild_Beast/OneDrive/Documents/Private/Projects/Astro/JobBoard/src/pages/jobs/[id].astro";
const $$url = "/jobs/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$SearchInput as $, _id_$1 as _, app as a, _id_ as b };
