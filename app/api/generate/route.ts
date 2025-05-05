import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export async function POST(req: NextRequest) {
  const { topic, platform } = await req.json();

  const prompt = `Create a ${platform} post about "${topic}". Make it engaging, relevant, and suitable for that platform.`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'You are a social media marketing expert.' },
        { role: 'user', content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 300
    });

    const result = completion.choices[0].message.content;
    return NextResponse.json({ result });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ result: 'Something went wrong.' }, { status: 500 });
  }
}
