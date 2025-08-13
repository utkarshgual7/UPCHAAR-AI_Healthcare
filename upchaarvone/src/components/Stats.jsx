import React from "react";
import { motion } from "framer-motion";
import { FaUserMd, FaUserFriends, FaChartLine, FaHeartbeat } from "react-icons/fa";

const Stats = () => {
  const stats = [
    {
      icon: FaUserMd,
      number: "50+",
      label: "Expert Doctors",
      description: "Certified medical professionals",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FaUserFriends,
      number: "1000+",
      label: "Active Users",
      description: "Trusted by patients worldwide",
      color: "from-green-500 to-green-600"
    },
    {
      icon: FaChartLine,
      number: "5000+",
      label: "Reports Analyzed",
      description: "AI-powered medical insights",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: FaHeartbeat,
      number: "99.9%",
      label: "Accuracy Rate",
      description: "Precision in diagnostics",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-orange-200 to-green-200 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-pink-200 to-yellow-200 rounded-full opacity-15 blur-lg"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">Impact</span> in Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transforming healthcare through technology and delivering measurable results
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-large hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden">
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="text-2xl text-white" />
                    </div>
                    
                    {/* Number */}
                    <motion.h3
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="text-4xl font-bold text-gray-800 mb-2 text-center"
                    >
                      {stat.number}
                    </motion.h3>
                    
                    {/* Label */}
                    <h4 className="text-xl font-semibold text-gray-700 mb-2 text-center">
                      {stat.label}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-gray-500 text-center leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                  
                  {/* Decorative corner element */}
                  <div className={`absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br ${stat.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Join thousands of satisfied users who trust Upchaar for their healthcare needs
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Get Started Today</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Stats;
