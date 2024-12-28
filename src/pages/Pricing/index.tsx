import React from 'react';
import { Check } from 'lucide-react';
import { CheckoutButton } from './CheckoutButton';

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
            className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden ${
              plan.popular ? 'ring-2 ring-blue-600' : ''
            }`}
          >
            {plan.popular && (
              <div className="bg-blue-600 text-white text-center py-1 text-sm">
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
                    <Check size={18} className="text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <CheckoutButton priceId={plan.id}>
                Get Started
              </CheckoutButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}