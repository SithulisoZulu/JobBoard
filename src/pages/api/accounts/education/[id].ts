import type { APIRoute } from "astro";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
import { app } from "../../../../firebase/server";

const db = getFirestore(app);
const accounts = db.collection("UserAccount");

export const POST: APIRoute = async ({ params, redirect, request }) => {

  const formData = await request.formData();

  const level = formData.get("level")?.toString();
  const field_of_study = formData.get("field_of_study")?.toString();
  const id = params.id;
  
  if (!id) {
    return new Response("Id not found", {
      status: 404,
    });
  }

  try {
    const userDoc = accounts.doc(id);
    const userSnapshot = await userDoc.get();

    if (!userSnapshot.exists) {
      throw new Error("User Does not exist");
    }

    const educationRef = userDoc.collection("education");
    const newDocRef = educationRef.doc();
    const newDocId = newDocRef.id;
    const experience = {
      id: newDocId,
      level,
      field_of_study,
      createdAt: Timestamp.now(),
    };

    await newDocRef.set(experience);

  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", {
      status: 500,
    });
  }

  return redirect(`Profile/qualifications/${id}`);
};