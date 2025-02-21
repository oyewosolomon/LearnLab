import React, { useState } from 'react';
import { Target, Globe, Clock, Award, Users, ChevronLeft, ChevronRight } from 'lucide-react';

// Define the type for a team member
type TeamMember = {
  name: string;
  role: string;
  image: string;
  description: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "/images/t-2.jpg",
    description: "John is passionate about transforming education through technology.",
  },
  {
    name: "Jane Smith",
    role: "Chief Product Officer",
    image: "/images/t-3.jpg",
    description: "Jane leads the development of innovative virtual lab solutions.",
  },
  {
    name: "Emily Carter",
    role: "Head of Education",
    image: "/images/t-1.jpg",
    description: "Emily ensures our platform meets the needs of educators and students.",
  },
];

// Define the type for a milestone
type Milestone = {
  year: string;
  event: string;
  description: string;
};

const milestones: Milestone[] = [
  {
    year: "2018",
    event: "Company Founded",
    description: "LearnLab Virtual was established with a mission to revolutionize science education.",
  },
  {
    year: "2019",
    event: "First 100 Institutions",
    description: "Onboarded 100 educational institutions within the first year.",
  },
  {
    year: "2020",
    event: "Remote Learning Boom",
    description: "Supported schools worldwide during the shift to remote learning.",
  },
  {
    year: "2022",
    event: "500+ Experiments",
    description: "Expanded our library to over 500 interactive experiments.",
  },
  {
    year: "2023",
    event: "Global Recognition",
    description: "Awarded for innovation in education technology.",
  },
];

const AboutUs: React.FC = () => {
  const [currentMilestone, setCurrentMilestone] = useState(0);

  const nextMilestone = () => {
    setCurrentMilestone((prev) => (prev + 1) % milestones.length);
  };

  const prevMilestone = () => {
    setCurrentMilestone((prev) => (prev - 1 + milestones.length) % milestones.length);
  };

  return (
    <div className="py-20 bg-white" id='about'>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About LearnLab Virtual
          </h2>
          <p className="text-xl text-gray-600">
            Empowering the next generation of scientists with cutting-edge virtual laboratory technology.
          </p>
        </div>

        {/* Mission and Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To make science education accessible, engaging, and affordable for everyone.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Reach</h3>
            <p className="text-gray-600">
              Serving 300+ institutions across 50+ countries.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Access</h3>
            <p className="text-gray-600">
              Anytime, anywhere learning for students and educators.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Award-Winning</h3>
            <p className="text-gray-600">
              Recognized for innovation in education technology.
            </p>
          </div>
        </div>

        {/* Interactive Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Our Journey
          </h3>
          <div className="relative">
            <button
              onClick={prevMilestone}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextMilestone}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
            <div className="p-6 bg-gray-50 rounded-xl text-center">
              <h4 className="text-2xl font-bold text-gray-900 mb-2">
                {milestones[currentMilestone].year}
              </h4>
              <p className="text-xl text-gray-600 mb-2">
                {milestones[currentMilestone].event}
              </p>
              <p className="text-gray-600">
                {milestones[currentMilestone].description}
              </p>
            </div>
          </div>
        </div>

        {/* Meet the Team */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Meet the Team
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h4>
                <p className="text-gray-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;