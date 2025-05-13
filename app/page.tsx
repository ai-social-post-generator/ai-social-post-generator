'use client';

import { useState } from 'react';

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
      body: JSON.stringify({ topic, platform }),
    });
    const data = await res.json();
    setPost(data.result);
    setLoading(false);
  };

  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>
        AI Social Media Post Generator
      </h1>

      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter topic (e.g. productivity)"
        style={{
          padding: 10,
          marginTop: 20,
          width: '100%',
          borderRadius: 6,
          border: '1px solid #ccc',
        }}
      />

      <select
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
        style={{
          padding: 10,
          marginTop: 10,
          width: '100%',
          borderRadius: 6,
          border: '1px solid #ccc',
        }}
      >
        <option>Twitter</option>
        <option>Instagram</option>
        <option>LinkedIn</option>
        <option>Facebook</option>
      </select>

      <button
        onClick={generatePost}
        disabled={loading || !topic}
        style={{
          marginTop: 20,
          backgroundColor: '#0070f3',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: 6,
          cursor: 'pointer',
        }}
      >
        {loading ? 'Generating...' : 'Generate Post'}
      </button>

      {post && (
        <textarea
          value={post}
          readOnly
          style={{
            marginTop: 20,
            width: '100%',
            height: 150,
            padding: 10,
            borderRadius: 6,
            border: '1px solid #ccc',
          }}
        />
      )}
    </div>
  );
}
