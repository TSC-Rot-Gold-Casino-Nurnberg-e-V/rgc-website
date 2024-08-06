import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST() {
  revalidate();
}

export async function GET() {
  revalidate();
}

function revalidate() {
  revalidatePath("/", "layout");
  console.info("Revalidation triggered");
  return NextResponse.json({
    message: "Revalidation triggered",
  });
}
