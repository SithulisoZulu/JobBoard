import type { APIRoute } from "astro";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
import { app } from "../../../../firebase/server";

const db = getFirestore(app);
const accounts = db.collection("UserAccount");

export const POST: APIRoute = async ({ params, redirect, request }) => {
  const formData = await request.formData();

  const License    = formData.get("License")?.toString();
  const Month      = formData.get("month")?.toString();
  const Year       = formData.get("year")?.toString();
  const doesExpire = formData.get("doesExpire")?.toString();
  const id         = params.id;

  const expiryYear  = Year?.valueOf();
  const expiryMonth = Month?.valueOf();

  let year;
  let month;
  let expiry;

  if(!expiryYear || !expiryMonth)
  {
    year  = ""
    month = ""
  }
  else{
    year  = expiryYear
    month = expiryMonth
  };

  if(!doesExpire)
  {
    expiry = `${month} - ${year}`
  }
  else{
    expiry = "Does not expire"
    year  = ""
    month = ""
  };
    
  if (!id) {
    return new Response("Cannot find id", {
      status: 404,
    });
  };

  try {
    const userDoc      = accounts.doc(id);
    const userSnapshot = await userDoc.get();

    if (!userSnapshot.exists) {
      throw new Error("User not found");
    }

    const languagesRef = userDoc.collection("Licenses");
    const newDocRef    = languagesRef.doc();
    const newDocId     = newDocRef.id;
    const lang = {
      id: newDocId,
      License,
      month,
      year,
      expiry,
      createdAt: Timestamp.now(),
    };

    await newDocRef.set(lang);

  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", {
      status: 500,
    });
  }

  return redirect(`Profile/qualifications/${id}`);
};