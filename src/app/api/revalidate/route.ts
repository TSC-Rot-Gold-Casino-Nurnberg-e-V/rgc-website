import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST() {
  revalidatePath("/", "layout");
  console.info("Revalidation triggered");
  return NextResponse.json({
    message: "Revalidation triggered",
  });
}
