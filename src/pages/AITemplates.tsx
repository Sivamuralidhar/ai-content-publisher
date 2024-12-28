import React from 'react';
import { MessageSquare, Presentation, Camera, Video } from 'lucide-react';

const templates = [
  {
    title: "Social Media Posts",
    description: "Engaging posts for various platforms",
    icon: MessageSquare,
    examples: ["Product launches", "Company updates", "Industry insights"]
  },
  {
    title: "Blog Articles",
    description: "Well-structured blog content",
    icon: Presentation,
    examples: ["How-to guides", "Industry analysis", "Case studies"]
  },
  {
    title: "Photo Captions",
    description: "Compelling image descriptions",
    icon: Camera,
    examples: ["Product photos", "Team events", "Behind-the-scenes"]
  },
  {
    title: "Video Scripts",
    description: "Engaging video content",
    icon: Video,
    examples: ["Product demos", "Company culture", "Tutorial videos"]
  }
];

export function AITemplates() {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h1 className="text-xl font-bold mb-2 dark:text-white">AI Templates</h1>
        <p className="text-gray-600 dark:text-gray-400">Ready-to-use templates for various content types</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {templates.map((template) => {
          const Icon = template.icon;
          return (
            <div key={template.title} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/50 rounded-lg">
                  <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 dark:text-white">{template.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{template.description}</p>
                </div>
              </div>
              <div className="pl-16">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Examples:</h4>
                <ul className="space-y-1">
                  {template.examples.map((example) => (
                    <li key={example} className="text-sm text-gray-600 dark:text-gray-400">• {example}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}