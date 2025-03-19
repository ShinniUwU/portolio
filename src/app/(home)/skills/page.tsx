'use client';

import { useEffect, useState, useRef } from 'react';
import { FaJs, FaReact, FaNodeJs, FaPython, FaLinux, FaDocker, FaGithub } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

const skills = [
  { name: "JavaScript", icon: <FaJs className="text-2xl text-yellow-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-2xl text-blue-600" /> },
  { name: "React", icon: <FaReact className="text-2xl text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-2xl text-green-600" /> },
  { name: "Python", icon: <FaPython className="text-2xl text-blue-500" /> },
  { name: "Linux Administration", icon: <FaLinux className="text-2xl text-gray-400" /> },
  { name: "Git & GitHub", icon: <FaGithub className="text-2xl text-black" /> },
  { name: "Docker", icon: <FaDocker className="text-2xl text-blue-300" /> },
];

export default function Skills() {
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  
  // Use a simple interval-based approach
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isTyping) {
      // Typing mode
      if (charIndex < skills[currentIndex].name.length) {
        timer = setTimeout(() => {
          setCurrentText(skills[currentIndex].name.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 150);
      } else {
        // Finished typing current word
        timer = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      // Deleting mode
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setCurrentText(skills[currentIndex].name.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 50);
      } else {
        // Finished deleting, move to next word
        const nextIndex = (currentIndex + 1) % skills.length;
        setCurrentIndex(nextIndex);
        setIsTyping(true);
      }
    }
    
    return () => clearTimeout(timer);
  }, [currentIndex, charIndex, isTyping]);

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex items-center p-4 bg-black/30 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="mr-4">{skill.icon}</div>
              <span className="text-gray-300 text-lg">{skill.name}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 text-gray-300 text-lg h-8">
          <span>Currently proficient in: </span>
          <span className="font-semibold">
            {currentText}
            <span className="animate-pulse">|</span>
          </span>
        </div>
      </div>
    </section>
  );
} 