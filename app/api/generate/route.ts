// app/api/generate/route.ts

import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // this is the environment variable
});

export async function POST(req: NextRequest) {
  try {
    const { topic, tone } = await req.json();

    const prompt = `Write a social media post about "${topic}" in a "${tone}" tone.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    return NextResponse.json({ result: completion.choices[0].message.content });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
