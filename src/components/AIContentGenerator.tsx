import React, { useState } from 'react';
import { AIPrompt } from '../types';
import { Wand2 } from 'lucide-react';
import { LoadingSpinner } from './shared/LoadingSpinner';

interface Props {
  onGenerate: (content: string) => void;
}

export function AIContentGenerator({ onGenerate }: Props) {
  const [prompt, setPrompt] = useState<AIPrompt>({
    topic: '',
    tone: 'professional',
    length: 'medium',
  });
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const content = `Generated content about ${prompt.topic} in a ${prompt.tone} tone.`;
      onGenerate(content);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-900">AI Content Generator</h2>
      <div className="space-y-3">
        <input
          type="text"
          placeholder="What would you like to write about?"
          className="w-full p-3 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={prompt.topic}
          onChange={(e) => setPrompt({ ...prompt, topic: e.target.value })}
        />
        <div className="grid grid-cols-2 gap-3">
          <select
            className="p-3 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={prompt.tone}
            onChange={(e) => setPrompt({ ...prompt, tone: e.target.value as AIPrompt['tone'] })}
          >
            <option value="professional">Professional</option>
            <option value="casual">Casual</option>
            <option value="humorous">Humorous</option>
          </select>
          <select
            className="p-3 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={prompt.length}
            onChange={(e) => setPrompt({ ...prompt, length: e.target.value as AIPrompt['length'] })}
          >
            <option value="short">Short</option>
            <option value="medium">Medium</option>
            <option value="long">Long</option>
          </select>
        </div>
      </div>
      <button
        onClick={handleGenerate}
        disabled={loading || !prompt.topic}
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-lg flex items-center justify-center gap-2 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 transition-all duration-200"
      >
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <Wand2 size={20} />
            Generate Content
          </>
        )}
      </button>
    </div>
  );
}