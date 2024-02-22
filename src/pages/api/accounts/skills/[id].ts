import type { APIRoute } from "astro";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
import { app } from "../../../../firebase/server";

const db = getFirestore(app);
const accounts = db.collection("UserAccount");

export const POST: APIRoute = async ({ params, redirect, request }) => {
  const formData = await request.formData();

  const skill = formData.get("skill")?.toString();
  const years = formData.get("years")?.toString();
  const id = params.id;

  if (!id) {
    return new Response("Cannot find friend", {
      status: 404,
    });
  }

  try {
    const userDoc = accounts.doc(id);
    const userSnapshot = await userDoc.get();

    if (!userSnapshot.exists) {
      throw new Error("User not found");
    }

    const qualificationsRef = userDoc.collection("Skills");
    const newDocRef = qualificationsRef.doc();
    const newDocId = newDocRef.id;
    const qualification = {
      id: newDocId,
      skill,
      years: parseInt(years as string, 10),
      createdAt: Timestamp.now(),
    };

    await newDocRef.set(qualification);

  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", {
      status: 500,
    });
  }

  return redirect(`Profile/qualifications/${id}`);
};