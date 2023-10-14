import { NextResponse } from "next/server";

export async function POST(data: Request) {
  console.log("Hallo");
  const { email } = await data.json();
  console.log(email);
  return NextResponse.json({ email });
}
