import type { APIRoute } from "astro";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
import { app } from "../../../../../firebase/server";

const db = getFirestore(app);
const accounts = db.collection("UserAccount");

export const POST: APIRoute = async ({ params, redirect, request }) => {
  const formData = await request.formData();

  const FullTime    = formData.get("Full-time")?.toString();
  const PartTime    = formData.get("Part-time")?.toString();
  const Permanent   = formData.get("Permanent")?.toString();
  const Temporary   = formData.get("Temporary")?.toString();
  const TempPerm    = formData.get("Temp-perm")?.toString();
  const Learnership = formData.get("Learnership")?.toString();
  const Internship  = formData.get("Internship")?.toString();
  const Graduate    = formData.get("Graduate")?.toString();
  const id          = params.id;

  let fullTime;
  let partTime;
  let permanent;
  let temporary;
  let tempPerm;
  let learnership;
  let internship;
  let graduate;

  if (FullTime === "on") {
    fullTime = true
  }else{ fullTime = false}

  if (PartTime === "on") {
    partTime = true
  }else{ partTime = false}

  if (Permanent === "on") {
    permanent = true
  }else{ permanent = false}

  if (Temporary === "on") {
    temporary = true
  }else{ temporary = false}
  if (TempPerm === "on") {
    tempPerm = true
  }else{ tempPerm = false}

  if (Learnership === "on") {
    learnership = true
  }else{ learnership = false}

  if (Internship === "on") {
    internship = true
  }else{ internship = false}

  if (Graduate === "on") {
    graduate = true
  }else{ graduate = false}
    
    
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

    const typeRef = userDoc.collection("Types");
    const newDocRef = typeRef.doc();
    const newDocId  = newDocRef.id;
    const Remote    = {
      id         : newDocId,
      fullTime   : fullTime,
      partTime   : partTime,
      permanent  : permanent,
      temporary  : temporary,
      tempPerm   : tempPerm,
      learnership: learnership,
      internship : internship,
      graduate   : graduate,
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