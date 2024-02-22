import { supabase } from "@lib/supabase";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const name = formData.get("name")?.toString();
  const number = formData.get("number")?.toString();

  if (!email || !password) {
    return new Response("Email and password are required", { status: 400 });
  }
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    phone: number,
    options: {
      data: {
        displayName: name,
        phone: number
      },
    },
  });
  if (error) {
    return new Response(error.message, { status: 500 });
  }
  return redirect("/Complete-Account");
};