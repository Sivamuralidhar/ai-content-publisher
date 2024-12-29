import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Template {
  name: string;
  prompt: string;
}

interface TemplateCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  templates: Template[];
  onSelect: (template: Template) => void;
}

export function TemplateCard({ title, description, icon: Icon, templates, onSelect }: TemplateCardProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-blue-50 dark:bg-blue-900/50 rounded-lg">
          <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-1 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      </div>
      
      <div className={`space-y-2 transition-all ${isExpanded ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}>
        {templates.map((template) => (
          <button
            key={template.name}
            onClick={() => onSelect(template)}
            className="w-full text-left p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          >
            <h4 className="font-medium text-gray-900 dark:text-white">{template.name}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{template.prompt}</p>
          </button>
        ))}
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
      >
        {isExpanded ? 'Show Less' : 'Show Templates'}
      </button>
    </div>
  );
}