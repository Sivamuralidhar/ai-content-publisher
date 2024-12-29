import React from 'react';
import { templateCategories } from '../data/templateCategories';
import { TemplateCard } from '../components/AITemplates/TemplateCard';
import { Toast } from '../components/shared/Toast';

export function AITemplates() {
  const [selectedTemplate, setSelectedTemplate] = React.useState<{ name: string } | null>(null);

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h1 className="text-xl font-bold mb-2 dark:text-white">AI Templates</h1>
        <p className="text-gray-600 dark:text-gray-400">Ready-to-use templates for various content types</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {templateCategories.map((category) => (
          <TemplateCard
            key={category.id}
            title={category.title}
            description={category.description}
            icon={category.icon}
            templates={category.templates}
            onSelect={(template) => {
              setSelectedTemplate(template);
              // Here you would typically open the post editor with the template
            }}
          />
        ))}
      </div>

      {selectedTemplate && (
        <Toast
          message={`Template "${selectedTemplate.name}" selected`}
          onClose={() => setSelectedTemplate(null)}
        />
      )}
    </div>
  );
}