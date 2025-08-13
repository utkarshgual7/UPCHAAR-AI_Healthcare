import React from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon, PlayIcon } from "@heroicons/react/solid";

const Working = () => {
  const features = [
    {
      icon: "🤖",
      title: "AI-Powered Virtual Vaidhya",
      description: "Get instant medical consultation from our intelligent chatbot available 24/7"
    },
    {
      icon: "👨‍⚕️",
      title: "Expert Medical Professionals",
      description: "Connect with highly experienced doctors for personalized healthcare"
    },
    {
      icon: "📊",
      title: "Free Report Analysis",
      description: "Upload your medical reports and get AI-powered insights instantly"
    },
    {
      icon: "🔬",
      title: "Advanced Diagnostics",
      description: "State-of-the-art medical imaging analysis and interpretation"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            How <span className="bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">Upchaar</span> Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience seamless healthcare with our comprehensive AI-powered platform
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Revolutionary Healthcare Features
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Discover how our platform combines cutting-edge AI technology with expert medical care to provide you with the best healthcare experience.
              </p>
            </div>
            
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-smooth"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12  rounded-full flex items-center justify-center text-2xl">
                    {feature.icon}
                  </div>
                </div>
                <div className="flex-grow">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              </motion.div>
            ))}
          </motion.div>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-orange-100 to-green-100 rounded-2xl p-8">
              <div className="relative bg-white rounded-xl shadow-large overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    className="w-full h-full rounded-xl"
                    src="https://www.youtube.com/embed/PWTHZwJvAzE?si=G1puU9gED2G_3y-m"
                    title="Upchaar Platform Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{ minHeight: '300px' }}
                  ></iframe>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-orange-200 to-green-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tr from-blue-200 to-purple-200 rounded-full opacity-50"></div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-4">
                Watch our platform demo to see how Upchaar revolutionizes healthcare
              </p>
              <div className="flex items-center justify-center space-x-2 text-orange-500">
                <PlayIcon className="w-5 h-5" />
                <span className="font-medium">Click to play video</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Working;
