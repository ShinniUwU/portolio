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

interface SkillTypewriterProps {
  skills: { name: string; icon: JSX.Element }[];
  typingSpeed: number;
  pauseDuration: number;
}

function SkillTypewriter({ skills, typingSpeed, pauseDuration }: SkillTypewriterProps) {
  // phase: 'typing' or 'deleting'
  const [phase, setPhase] = useState<'typing' | 'deleting'>('typing');
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const currentSkill = skills[currentSkillIndex].name;

  // Update the displayed text whenever charIndex changes.
  useEffect(() => {
    setDisplayedText(currentSkill.substring(0, charIndex));
  }, [charIndex, currentSkill]);

  useEffect(() => {
    // Clear any existing timeout.
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    let timeout: NodeJS.Timeout;
    if (phase === 'typing') {
      if (charIndex < currentSkill.length) {
        // Type one more character.
        timeout = setTimeout(() => {
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else {
        // When the full skill is displayed, pause then start deleting.
        timeout = setTimeout(() => {
          setPhase('deleting');
        }, pauseDuration);
      }
    } else {
      // Deleting phase.
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setCharIndex((prev) => prev - 1);
        }, typingSpeed);
      } else {
        // When deletion is complete, move to the next skill.
        timeout = setTimeout(() => {
          setPhase('typing');
          setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
        }, typingSpeed);
      }
    }
    timeoutRef.current = timeout;

    return () => clearTimeout(timeout);
  }, [phase, charIndex, currentSkill.length, typingSpeed, pauseDuration, skills.length]);

  return (
    <span className="font-semibold">
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function Skills() {
  const typingSpeed = 100; // milliseconds per character
  const pauseDuration = 2000; // pause duration after full skill is displayed

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
      </div>
    </section>
  );
}
