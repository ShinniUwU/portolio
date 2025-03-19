import Slider from "react-slick";
import { FaRocket, FaShieldAlt, FaBox, FaTerminal } from 'react-icons/fa'

const workExperience = [
  {
    title: "Vice President and Co Director at Scala Studios",
    duration: "2023 - Present",
    description: "In charge of the company's operations, including financial management, team coordination, and strategic planning."
  },
  {
    title: "Systems Administrator at JasmeowsSystem",
    duration: "2023 - 2025",
    description: "Managed server infrastructure and ensured system security for clients."
  },
  {
    title: "Co Director at Darkless LTD",
    duration: "2024 - Present",
    description: "Co-directed a hosting company providing bare-metal and VPS solutions, Developed and managed scalable web applications for client services, Worked on backend optimization and server-side security enhancements, Assisted in infrastructure automation and DevOps tasks, Assisted in making a clean website for the Hosting"
  },
  {
    title: "Founder at LunarLabs LLC",
    duration: "2023 - Present",
    description: "In charge of the company's operations, including financial management, team coordination, and strategic planning. Also lead of the Game Development Team and Legal Team"
  }
]

export default function WorkExperience() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="work" className="py-20 px-6 bg-black/20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
          Work Experience
        </h2>
        <Slider {...settings}>
          {workExperience.map((job, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:from-white/10 hover:to-white/15 transition"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
              <p className="text-gray-300">{job.duration}</p>
              <p className="text-gray-400">{job.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
} 