// app/api/generate/route.ts

import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { OPENAI_API_KEY } from "../../utils/env";

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Received request body:", body);

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: body.messages,
    });

    console.log("OpenAI Response:", completion);

    return NextResponse.json({ result: completion.choices[0].message.content });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
