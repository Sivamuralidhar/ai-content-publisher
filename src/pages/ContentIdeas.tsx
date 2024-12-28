import React from 'react';
import { Lightbulb, Sparkles, Target, Users, LineChart } from 'lucide-react';

const ideas = [
  {
    title: "Industry Trends",
    description: "Latest developments and news in your industry",
    icon: LineChart,
  },
  {
    title: "Audience Engagement",
    description: "Questions and polls to boost interaction",
    icon: Users,
  },
  {
    title: "Product Showcases",
    description: "Creative ways to highlight your offerings",
    icon: Sparkles,
  },
  {
    title: "Goal-Oriented Content",
    description: "Content aligned with business objectives",
    icon: Target,
  },
];

export function ContentIdeas() {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h1 className="text-xl font-bold mb-2 dark:text-white">Content Ideas</h1>
        <p className="text-gray-600 dark:text-gray-400">Get inspired with these content suggestions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ideas.map((idea) => {
          const Icon = idea.icon;
          return (
            <div key={idea.title} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/50 rounded-lg">
                  <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 dark:text-white">{idea.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{idea.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}