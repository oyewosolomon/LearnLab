import React from 'react';
import { 
  Microscope, 
  Users, 
  LineChart, 
  Shield, 
  Clock,
  Globe,
  ArrowRight
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Microscope,
      title: "High-Fidelity Simulations",
      description: "Experience real-world laboratory conditions with our advanced physics engine and precise chemical reaction simulations."
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Work together in real-time with classmates on experiments, share results, and participate in group discussions."
    },
    {
      icon: LineChart,
      title: "Detailed Analytics",
      description: "Track student progress, analyze performance metrics, and generate comprehensive reports for better learning outcomes."
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "Practice potentially hazardous experiments in a risk-free virtual environment with unlimited attempts."
    },
    {
      icon: Clock,
      title: "24/7 Accessibility",
      description: "Access the virtual lab anytime, anywhere, from any device. Perfect for remote and hybrid learning models."
    },
    {
      icon: Globe,
      title: "Global Resources",
      description: "Access a vast library of experiments and resources from leading educational institutions worldwide."
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose LearnLab Virtual?
          </h2>
          <p className="text-xl text-gray-600">
            Our platform combines cutting-edge technology with pedagogical excellence 
            to deliver an unmatched virtual laboratory experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
            Explore All Features
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;