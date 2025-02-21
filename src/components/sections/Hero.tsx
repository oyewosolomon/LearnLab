import React from 'react';
import { ArrowRight, Beaker, School, Users, DollarSign } from 'lucide-react';

const Hero = () => {
  const stats = [
    { icon: School, value: '300+', label: 'Educational Institutions' },
    { icon: Beaker, value: '500+', label: 'Interactive Experiments' },
    { icon: Users, value: '100k+', label: 'Simultaneous Users' },
    { icon: DollarSign, value: '60%', label: 'Cost Reduction' }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-60 -left-40 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-30" />
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <h1 className="text-5xl font-bold leading-tight text-gray-900">
              Experience Science Like Never Before
            </h1>
            <p className="text-xl text-gray-600">
              Transform your laboratory learning with our virtual platform. 
              Access hundreds of interactive experiments from anywhere, anytime.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-3 border border-gray-300 rounded-full font-medium hover:bg-gray-50 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Column - 3D Laboratory Animation */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-tr from-blue-100 to-indigo-50 p-8 shadow-lg transform hover:scale-105 transition-transform">
              <img 
                src="/images/dash.webp" 
                alt="Virtual Laboratory Interface" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <stat.icon className="w-8 h-8 text-blue-600 mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;