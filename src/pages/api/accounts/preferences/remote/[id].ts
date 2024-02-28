import type { APIRoute } from "astro";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
import { app } from "../../../../../firebase/server";

const db = getFirestore(app);
const accounts = db.collection("UserAccount");

export const POST: APIRoute = async ({ params, redirect, request }) => {
  const formData = await request.formData();

  const remote = formData.get("remote") === "on";
  const hybrid = formData.get("hybrid") === "on";
  const inPerson = formData.get("inPerson") === "on";
  const tempRemote = formData.get("tempRemote") === "on";
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

    const remoteRef = userDoc.collection("Remote");
    const remoteSnapshot = await remoteRef.get();

    if (remoteSnapshot.empty) {
      const newDocRef = remoteRef.doc();
      await newDocRef.set({
        id        : newDocRef.id,
        remote    : remote,
        hybrid    : hybrid,
        inPerson  : inPerson,
        tempRemote: tempRemote,
        createdAt : Timestamp.now(),
      });
    } else {
      const remoteDoc = remoteSnapshot.docs[0];
      await remoteDoc.ref.update({
        remote: remote,
        hybrid: hybrid,
        inPerson: inPerson,
        tempRemote: tempRemote,
        updatedAt: Timestamp.now(),
      });
    }

  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", {
      status: 500,
    });
  }

  return redirect(`Profile/qualifications/${id}`);
};
