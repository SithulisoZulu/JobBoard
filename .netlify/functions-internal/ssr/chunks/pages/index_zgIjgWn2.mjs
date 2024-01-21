import { a as app } from './_id__9qeDQx3Z.mjs';
import { getFirestore } from 'firebase-admin/firestore';

const POST$1 = async ({ request, redirect }) => {
  const formData = await request.formData();
  const task = formData.get("task")?.toString();
  const date = formData.get("date")?.toString();
  if (!task || !date) {
    return new Response("Missing required fields", {
      status: 400
    });
  }
  try {
    const db = getFirestore(app);
    const tasksRef = db.collection("tasks");
    await tasksRef.add({
      task,
      date
    });
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500
    });
  }
  return redirect("/Todo");
};

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST: POST$1
}, Symbol.toStringTag, { value: 'Module' }));

const POST = async ({ request, redirect }) => {
  const formData = await request.formData();
  const name = formData.get("name")?.toString();
  const age = formData.get("age")?.toString();
  const isBestFriend = formData.get("isBestFriend") === "on";
  if (!name || !age) {
    return new Response("Missing required fields", {
      status: 400
    });
  }
  try {
    const db = getFirestore(app);
    const friendsRef = db.collection("Posts");
    await friendsRef.add({
      name,
      age: parseInt(age),
      isBestFriend
    });
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500
    });
  }
  return redirect("/someId");
};

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
