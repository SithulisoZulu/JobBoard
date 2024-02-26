import type { APIRoute } from "astro";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
import { app } from "../../../../firebase/server";

const db = getFirestore(app);
const accounts = db.collection("UserAccount");

export const POST: APIRoute = async ({ params, redirect, request }) => {
  const formData = await request.formData();

  const name   = formData.get("name")?.toString();
  const number = formData.get("number")?.toString();
  const email  = formData.get("email")?.toString();
  const id     = params.id;

  if (!id) {
    return new Response("Cannot find id", {
      status: 404,
    });
  }

  try {
    const userDoc = accounts.doc(id);
    const userSnapshot = await userDoc.get();

    if (!userSnapshot.exists) {
      throw new Error("User not found");
    }

    const referencesRef = userDoc.collection("References");
    const newDocRef     = referencesRef.doc();
    const newDocId      = newDocRef.id;
    const lang          = {
      id: newDocId,
      name,
      number,
      email,
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