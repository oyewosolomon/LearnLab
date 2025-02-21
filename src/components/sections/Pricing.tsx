import React from 'react';
import { Check, Zap, School, Globe } from 'lucide-react';

// Define the type for a pricing plan
type PricingPlan = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
};

const pricingPlans: PricingPlan[] = [
  {
    icon: School,
    title: "Starter",
    price: "$99/month",
    features: [
      "Up to 100 students",
      "Access to 50 experiments",
      "Basic analytics",
    ],
  },
  {
    icon: Globe,
    title: "Pro",
    price: "$299/month",
    features: [
      "Up to 500 students",
      "Access to all experiments",
      "Advanced analytics",
      "24/7 support",
    ],
    isPopular: true,
  },
  {
    icon: Zap,
    title: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited students",
      "Custom experiments",
      "Dedicated account manager",
      "Priority support",
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <div className="py-20 bg-white" id='pricing'>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Flexible Pricing Plans
          </h2>
          <p className="text-xl text-gray-600">
            Choose a plan that fits your institution's needs and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow ${
                plan.isPopular ? "bg-blue-50" : "bg-white"
              }`}
            >
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <plan.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {plan.title}
              </h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">
                {plan.price}
              </p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600">
                    <Check className="w-4 h-4 text-blue-600" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;