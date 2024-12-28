import React from 'react';
import { Users, Award, Shield, Globe } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Our team of AI and social media experts work together to deliver the best content solutions."
  },
  {
    icon: Award,
    title: "Industry Leading",
    description: "Recognized as a pioneer in AI-powered social media content generation and management."
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with 99.9% uptime guarantee for your content operations."
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Supporting multiple languages and platforms to reach your audience worldwide."
  }
];

export function About() {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h1 className="text-xl font-bold mb-2 dark:text-white">About Us</h1>
        <p className="text-gray-600 dark:text-gray-400">Empowering creators with AI-driven content solutions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div key={feature.title} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/50 rounded-lg">
                  <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-bold mb-4 dark:text-white">Our Mission</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          We're on a mission to revolutionize social media content creation by combining human creativity with artificial intelligence. 
          Our platform empowers businesses and creators to produce engaging, relevant content efficiently while maintaining their unique voice.
        </p>
      </div>
    </div>
  );
}