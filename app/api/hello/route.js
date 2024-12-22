export async function POST(request) {
  const body = await request.json();
  return Response.json({ 
    message: "Got your POST request",
    data: body 
  });
}

export async function PUT(request) {
  const body = await request.json();
  return Response.json({ 
    message: "Got your PUT request",
    data: body 
  });
}
