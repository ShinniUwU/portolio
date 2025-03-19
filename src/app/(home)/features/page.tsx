import Slider from "react-slick";
import { FaRocket, FaShieldAlt, FaBox, FaTerminal } from 'react-icons/fa'

const workExperience = [
  {
    title: "Software Engineer at Tech Company",
    duration: "June 2021 - Present",
    description: "Developing scalable web applications using React and Node.js."
  },
  {
    title: "Systems Administrator at IT Solutions",
    duration: "January 2019 - May 2021",
    description: "Managed server infrastructure and ensured system security."
  },
  {
    title: "Intern at Startup",
    duration: "Summer 2018",
    description: "Assisted in software development and testing."
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