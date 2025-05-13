'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Home() {
  const [topic, setTopic] = useState('');
  const [platform, setPlatform] = useState('Twitter');
  const [post, setPost] = useState('');
  const [loading, setLoading] = useState(false);

  const generatePost = async () => {
    setLoading(true);
    setPost('');
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic, platform })
    });
    const data = await res.json();
    setPost(data.result);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-xl space-y-4">
        <h1 className="text-2xl font-bold">AI Social Media Post Generator</h1>
        <Input
          placeholder="Enter a topic (e.g. productivity, travel)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <select
          className="border rounded-xl p-2 w-full"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        >
          <option>Twitter</option>
          <option>Instagram</option>
          <option>LinkedIn</option>
          <option>Facebook</option>
        </select>
        <Button onClick={generatePost} disabled={loading || !topic}>
          {loading ? 'Generating...' : 'Generate Post'}
        </Button>
        <Textarea readOnly className="h-40" value={post} />
      </div>
    </div>
  );
}
