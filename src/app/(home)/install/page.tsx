import { useEffect, useState } from 'react';
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
  const [displayedText, setDisplayedText] = useState("");
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const typingSpeed = 100; // Speed of typing in milliseconds
  const pauseDuration = 2000; // Pause duration after each skill

  useEffect(() => {
    const currentSkill = skills[currentSkillIndex].name;
    let charIndex = 0;

    const typeSkill = () => {
      if (charIndex < currentSkill.length) {
        setDisplayedText((prev) => prev + currentSkill.charAt(charIndex));
        charIndex++;
        setTimeout(typeSkill, typingSpeed);
      } else {
        setTimeout(() => {
          setDisplayedText(""); // Clear the text
          setCurrentSkillIndex((prev) => (prev + 1) % skills.length); // Move to the next skill
        }, pauseDuration);
      }
    };

    typeSkill();
  }, [currentSkillIndex]);

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center p-4 bg-black/30 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <div className="mr-4">{skill.icon}</div>
              <span className="text-gray-300 text-lg">{skill.name}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 text-gray-300 text-lg">
          <span>Currently proficient in: </span>
          <span className="font-semibold">{displayedText}</span>
        </div>
      </div>
    </section>
  );
} 