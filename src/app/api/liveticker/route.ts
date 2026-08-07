import { NextResponse } from "next/server";
import { getLiveticker } from "@/api/api";

// The liveticker must never be served from a cache, so that CMS changes are
// visible on the first reload of the website.
export const dynamic = "force-dynamic";

export async function GET() {
  const liveticker = await getLiveticker();
  return NextResponse.json(liveticker, {
    headers: { "Cache-Control": "no-store" },
  });
}
