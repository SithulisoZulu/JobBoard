import type { APIRoute } from "astro";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
import { app } from "../../../../../firebase/server";

const db = getFirestore(app);
const accounts = db.collection("UserAccount");

export const POST: APIRoute = async ({ params, redirect, request }) => {
  const formData = await request.formData();

  const remote     = formData.get("remote")?.toString();
  const hybrid     = formData.get("hybrid")?.toString();
  const inPerson   = formData.get("inPerson")?.toString();
  const tempRemote = formData.get("tempRemote")?.toString();
  const id         = params.id;

  let remoteWork;
  let HybridWork;
  let inPersonWork;
  let tempRemoteWork;

  if (remote === "on") {
    remoteWork = true
  }else{ remoteWork = false}

  if (hybrid === "on") {
    HybridWork = true
  }else{ HybridWork = false}

  if (inPerson === "on") {
    inPersonWork = true
  }else{ inPersonWork = false}

  if (tempRemote === "on") {
    tempRemoteWork = true
  }else{ tempRemoteWork = false}
    
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

    const remoteRef = userDoc.collection("Remote");
    const newDocRef = remoteRef.doc();
    const newDocId  = newDocRef.id;
    const Remote    = {
      id        : newDocId,
      remote    : inPersonWork,
      hybrid    : HybridWork,
      inPerson  : inPersonWork,
      tempRemote: tempRemoteWork,
      createdAt : Timestamp.now(),
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