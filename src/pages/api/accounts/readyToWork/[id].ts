import type { APIRoute } from "astro";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
import { app } from "../../../../firebase/server";

const db = getFirestore(app);
const accounts = db.collection("UserAccount");

export const POST: APIRoute = async ({ params, redirect, request }) => {
  const formData = await request.formData();

  const readyToWork = formData.get("readyToWork")?.toString();
  const id          = params.id;

  let ReadyToWork;

  if (readyToWork === "on") {
    ReadyToWork = true
  }else{ ReadyToWork = false}
    
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
    };

    const ReadyToWorkRef = userDoc.collection("ReadyToWork");
    const newDocRef      = ReadyToWorkRef.doc();
    const newDocId       = newDocRef.id;
    const Remote         = {
      id         : newDocId,
      ReadyToWork: ReadyToWork,
      createdAt  : Timestamp.now(),
    };

    await newDocRef.set(Remote);

  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", {
      status: 500,
    });
  }

  return redirect(`Profile/qualifications/${id}`);
};