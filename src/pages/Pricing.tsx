import React, { useState } from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    id: 'price_starter',
    name: "Starter",
    price: "$9",
    features: [
      "5 posts per day",
      "Basic AI templates",
      "3 social platforms",
      "Analytics dashboard",
    ],
  },
  {
    id: 'price_professional',
    name: "Professional",
    price: "$29",
    popular: true,
    features: [
      "25 posts per day",
      "Advanced AI templates",
      "All social platforms",
      "Advanced analytics",
      "Team collaboration",
      "Custom branding",
    ],
  },
  {
    id: 'price_enterprise',
    name: "Enterprise",
    price: "$99",
    features: [
      "Unlimited posts",
      "Custom AI training",
      "All social platforms",
      "Advanced analytics",
      "Team collaboration",
      "Custom branding",
      "API access",
      "Dedicated support",
    ],
  },
];

export function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm text-center">
        <h1 className="text-xl font-bold mb-2 dark:text-white">Pricing Plans</h1>
        <p className="text-gray-600 dark:text-gray-400">Choose the perfect plan for your needs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            onClick={() => handlePlanSelect(plan.id)}
            className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden cursor-pointer transition-all duration-200 ${
              selectedPlan === plan.id ? 'ring-2 ring-purple-500 transform scale-[1.02]' : ''
            } ${plan.popular ? 'ring-2 ring-purple-600' : ''}`}
          >
            {plan.popular && (
              <div className="bg-purple-600 text-white text-center py-1 text-sm">
                Most Popular
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold dark:text-white">{plan.price}</span>
                <span className="text-gray-600 dark:text-gray-400">/month</span>
              </div>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Check size={18} className="text-purple-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                className={`w-full mt-6 py-2 rounded-lg transition-colors ${
                  selectedPlan === plan.id
                    ? 'bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}