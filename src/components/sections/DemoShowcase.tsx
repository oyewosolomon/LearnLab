import React, { useState } from 'react';
import { Play, Pause, RotateCw, ZoomIn, ZoomOut } from 'lucide-react';

// Define types for the experiments and their structure
type Experiment = {
  title: string;
  description: string;
  controls: string[];
};

type Experiments = {
  [key: string]: Experiment;
};

const experiments: Experiments = {
  chemistry: {
    title: "Chemical Reactions",
    description: "Watch and control chemical reactions in real-time",
    controls: ["Temperature", "Concentration", "Catalyst"],
  },
  physics: {
    title: "Physics Simulations",
    description: "Explore mechanics and wave phenomena",
    controls: ["Force", "Velocity", "Time"],
  },
  biology: {
    title: "Microscopy Lab",
    description: "Examine cellular structures in detail",
    controls: ["Magnification", "Staining", "Focus"],
  },
};

const DemoSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('chemistry');

  return (
    <div className="py-20 bg-gray-900 text-white" id='features'>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Experience It Yourself
          </h2>
          <p className="text-xl text-gray-300">
            Try our interactive demo and see how LearnLab Virtual 
            transforms scientific learning.
          </p>
        </div>

        {/* Demo Interface */}
        <div className="bg-gray-800 rounded-2xl p-6 max-w-5xl mx-auto">
          {/* Experiment Selection Tabs */}
          <div className="flex gap-4 mb-6">
            {Object.keys(experiments).map((exp) => (
              <button
                key={exp}
                onClick={() => setActiveTab(exp)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === exp 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {exp.charAt(0).toUpperCase() + exp.slice(1)}
              </button>
            ))}
          </div>

          {/* Main Demo Area */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Simulation View */}
            <div className="lg:col-span-2">
              <div className="aspect-video bg-gray-700 rounded-xl relative overflow-hidden">
                <img 
                  src="/images/e.jpg" 
                  alt="Experiment Simulation" 
                  className="w-full h-full object-cover"
                />
                
                {/* Simulation Controls */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900/90 to-transparent">
                  <div className="flex items-center justify-center gap-4">
                    <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                      <RotateCw className="w-5 h-5" />
                    </button>
                    <button className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors">
                      <Play className="w-6 h-6" />
                    </button>
                    <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                      <ZoomIn className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Controls Panel */}
            <div className="bg-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">
                {experiments[activeTab].title}
              </h3>
              <p className="text-gray-300 mb-6">
                {experiments[activeTab].description}
              </p>

              <div className="space-y-4">
                {experiments[activeTab].controls.map((control, index) => (
                  <div key={index}>
                    <label className="text-sm text-gray-300 mb-2 block">
                      {control}
                    </label>
                    <input
                      type="range"
                      className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoSection;