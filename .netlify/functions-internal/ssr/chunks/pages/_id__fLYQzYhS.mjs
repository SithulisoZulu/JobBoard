const GET = async () => {
  console.log("Hello");
  return new Response(JSON.stringify("hello"), {
    status: 200
  });
};

export { GET };
