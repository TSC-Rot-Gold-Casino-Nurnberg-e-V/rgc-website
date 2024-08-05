import { NextResponse } from "next/server";

const URL =
  "https://api.vercel.com/v1/integrations/deploy/prj_GbM20cx8CwtXmza6RuJuB0CX6L0G";
const MAIN = "wEAmSHel9u";
const DEVELOP = "qYhyRKtqr3";

export async function GET() {
  await fetch(`${URL}/${MAIN}`);
  await fetch(`${URL}/${DEVELOP}`);
  return NextResponse.json({ ok: true });
}
