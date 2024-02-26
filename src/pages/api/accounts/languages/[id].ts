import type { APIRoute } from "astro";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
import { app } from "../../../../firebase/server";

const db = getFirestore(app);
const accounts = db.collection("UserAccount");

export const POST: APIRoute = async ({ params, redirect, request }) => {
  const formData = await request.formData();

  const language = formData.get("language")?.toString();
  const Proficiency = formData.get("Proficiency")?.toString();
  const id = params.id;

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

    const languagesRef = userDoc.collection("Languages");
    const newDocRef = languagesRef.doc();
    const newDocId = newDocRef.id;
    const lang = {
      id: newDocId,
      language,
      Proficiency,
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