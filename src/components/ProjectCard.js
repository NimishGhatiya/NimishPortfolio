import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, description, techStack, githubUrl, liveUrl }) => (
  <AnimateOnScroll>
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg h-full flex flex-col hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300 border border-gray-700 hover:border-cyan-500/30">
      <h4 className="text-2xl font-bold text-cyan-400 mb-3">{title}</h4>
      <p className="text-gray-300 mb-4 flex-grow leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {techStack.map((tech, index) => (
          <span key={index} className="bg-gray-700 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full border border-gray-600">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-auto flex space-x-4">
        {githubUrl && (
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white bg-gray-600 hover:bg-gray-500 py-2 px-4 rounded-lg transition-colors w-full text-center flex items-center justify-center space-x-2"
          >
            <Github size={16} />
            <span>View Code</span>
          </a>
        )}
        {liveUrl && (
          <a 
            href={liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white bg-cyan-500 hover:bg-cyan-600 py-2 px-4 rounded-lg transition-colors w-full text-center flex items-center justify-center space-x-2"
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </a>
        )}
        {!githubUrl && !liveUrl && (
          <>
            <button className="text-white bg-gray-600 hover:bg-gray-500 py-2 px-4 rounded-lg transition-colors w-full text-center">
              View Code
            </button>
            <button className="text-white bg-cyan-500 hover:bg-cyan-600 py-2 px-4 rounded-lg transition-colors w-full text-center">
              Live Demo
            </button>
          </>
        )}
      </div>
    </div>
  </AnimateOnScroll>
);

export default ProjectCard; 