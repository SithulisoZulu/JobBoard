import type { APIRoute } from "astro";
import { getFirestore } from "firebase-admin/firestore";
import { app } from "../../../firebase/server";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();

  const userId = formData.has("userId") ? formData.get("userId")?.toString() : '00000000-0000-0000-000000000000';
  const country = formData.has("country") ? formData.get("country")?.toString() : 'South Africa';
  const name = formData.get("name")?.toString();
  const surname = formData.get("surname")?.toString();
  const number = formData.get("number")?.toString();
  const headline = formData.get("headline")?.toString();
  const street = formData.get("street")?.toString();
  const city = formData.get("city_state")?.toString();
  const postalCode = formData.get("postalCode")?.toString();
  
  if (!userId || !name || ! surname || !number || !headline || country || !street || !city || !postalCode) {
    return new Response("Missing required information", { status: 400 });
  }

  try {
    const db = getFirestore(app);
    const accountsRef = db.collection("UserAccount");
    await accountsRef.add({ 
        userId,
        name,
        surname,
        number,
        headline,
        country,
        street,
        city,
        postalCode,
    });
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500,
    });
  }
  return redirect("/Account-created");
};