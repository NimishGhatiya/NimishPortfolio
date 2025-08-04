import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const SkillCategory = ({ icon, title, skills }) => (
  <AnimateOnScroll>
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg h-full">
      <div className="flex items-center mb-4">
        {icon}
        <h4 className="text-2xl font-semibold ml-4 text-white">{title}</h4>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="bg-gray-700 text-cyan-300 text-sm font-medium px-3 py-1 rounded-full">
            {skill}
          </span>
        ))}
      </div>
    </div>
  </AnimateOnScroll>
);

export default SkillCategory; 