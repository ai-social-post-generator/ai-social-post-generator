// app/page.tsx
'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export default function Home() {
  const [topic, setTopic] = useState('');
  const [platform, setPlatform] = useState('Instagram');
  const [result, setResult] = useState('...');
  const [loading, setLoading] = useState(false);

  async function generatePost() {
    setLoading(true);
    setResult('');
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        body: JSON.stringify({ topic, platform }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong');
      setResult(data.result);
    } catch (err: any) {
      setResult('Something went wrong.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-xl space-y-4">
      <h1 className="text-2xl font-bold">AI Social Media Post Generator</h1>

      <Input
        placeholder="Enter a topic (e.g. productivity, travel)"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <select
        className="border px-3 py-2 rounded w-full"
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
      >
        <option>Instagram</option>
        <option>Twitter</option>
        <option>LinkedIn</option>
      </select>

      <Button onClick={generatePost} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Post'}
      </Button>

      <Textarea rows={6} value={result} readOnly />
    </div>
  );
}
