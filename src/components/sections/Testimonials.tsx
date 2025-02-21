import React from 'react';
import { Quote, User, School } from 'lucide-react';

// Define the type for a testimonial
type Testimonial = {
  icon: React.ComponentType<{ className?: string }>;
  quote: string;
  author: string;
  role: string;
  institution: string;
};

const testimonials: Testimonial[] = [
  {
    icon: Quote,
    quote: "LearnLab Virtual has revolutionized how we teach science. The simulations are incredibly realistic, and students love the hands-on experience.",
    author: "Dr. Jane Doe",
    role: "Head of Science",
    institution: "Greenwood High School",
  },
  {
    icon: Quote,
    quote: "The platform is intuitive and easy to use. It has significantly reduced our lab setup costs while improving student engagement.",
    author: "John Smith",
    role: "Science Teacher",
    institution: "Riverside Academy",
  },
  {
    icon: Quote,
    quote: "Our students are performing better than ever. The detailed analytics help us identify areas for improvement and tailor our teaching strategies.",
    author: "Emily Carter",
    role: "Curriculum Coordinator",
    institution: "Sunrise International School",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Partners Say
          </h2>
          <p className="text-xl text-gray-600">
            Hear from educational institutions that have transformed their science programs with LearnLab Virtual.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <testimonial.icon className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-gray-600 italic mb-4">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <User className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.institution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;