import type { APIRoute } from "astro";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
import { app } from "../../../../../firebase/server";

const db = getFirestore(app);
const accounts = db.collection("UserAccount");

export const POST: APIRoute = async ({ params, redirect, request }) => {
  const formData = await request.formData();

  const salary = formData.get("salary")?.toString();
  const period = formData.get("period")?.toString();

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

    const salaryRef = userDoc.collection("Salary");
    const salarySnapshot = await salaryRef.get();

    if (salarySnapshot.empty) {
     const newDocRef = salaryRef.doc();
     await newDocRef.set({
      id: newDocRef.id,
      salary,
      period,
      createdAt: Timestamp.now(),
     })
    }else {
      const salaryDoc = salarySnapshot.docs[0];
      
      await salaryDoc.ref.update({
        salary,
        period,
        updatedAt: Timestamp.now(),
      })
    }
    
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", {
      status: 500,
    });
  }

  return redirect(`Profile/qualifications/${id}`);
};