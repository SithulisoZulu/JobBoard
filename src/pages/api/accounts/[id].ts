import type { APIRoute } from "astro";
import { getFirestore } from "firebase-admin/firestore";
import { app } from "../../../firebase/server"

const db = getFirestore(app);
const accounts = db.collection("UserAccount");

export const POST: APIRoute = async ({ params, redirect, request }) => {

    const formData = await request.formData();

    const name = formData.get("name")?.toString();
    const surname = formData.get("surname")?.toString();
    const number = formData.get("number")?.toString();
    const headline = formData.get("headline")?.toString();
    const street = formData.get("street")?.toString();
    const city = formData.get("city")?.toString();
    const postalCode = formData.get("postalCode")?.toString();
    const places = formData.get("places")?.toString();
    const Relocate = formData.get("relocate")?.toString();
    const Relocate_Range = formData.get("relocate_Range")?.toString();
  
    let relocate      : boolean
    let relocate_Range: string
    
    console.log(Relocate_Range)
    
    if (!params.id) {
      return new Response("Cannot find friend", {
          status: 404,
        });
    }
    
    if(Relocate === 'on')
    {
      relocate = true
    }
    else{
      relocate = false
    }
    
    if(Relocate_Range !== 'on')
    {
      relocate_Range = 'Willing to relocate anywhere'
    }
    else{
      relocate_Range = 'Willing to relocate only around me'
    }

    console.log(relocate_Range)

    if (!name || ! surname || !number || !headline || !street || !city || !postalCode) {
        return new Response("Missing required information", { status: 400 });
      }

    try {
        await accounts.doc(params.id).update({
          name,
          surname,
          number,
          headline,
          street,
          city,
          postalCode,
          relocate,
          relocate_Range,
          places
        });
      } catch (error) {
        console.log(error);
        return new Response("Something went wrong", {
          status: 500,
        });
    }
    return redirect("/Profile");
};
    

export const DELETE: APIRoute = async ({ params, redirect }) => {
    if (!params.id) {
        return new Response("Cannot find friend", {
        status: 404,
        });
    }
    
    try {
        await accounts.doc(params.id).delete();
    } catch (error) {
        return new Response("Something went wrong", {
        status: 500,
        });
    }
    return redirect("/dashboard");
}