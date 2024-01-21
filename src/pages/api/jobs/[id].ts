import { getFirestore } from "firebase-admin/firestore";
import { app } from "../../../firebase/server";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  // process the URL into a more usable format
  // const url = new URL(request.url)
  // const params = new URLSearchParams(url.search)

  // // set up a response object
  // const data = {
  //   hello: params.get('id'),
  // };

  // this will yield { hello: 'meow' } on your Astro server console
  console.log('Hello')
  
  // return the response
  return new Response(JSON.stringify('hello'), {
    status: 200
  }); 
}