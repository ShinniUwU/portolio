'use client';

import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  message: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Elaina Lynn",
    role: "COO",
    company: "PinkCloud Studios",
    message: "I’ve watched Luna go from just starting out as a dev. to being genuinely great at what they do. They’re super dedicated and focused into getting better, whether it’s sysadmin, legal stuff, or web dev. It’s been really cool seeing her progress, and she is just solid to work with reliable, sharp, and always willing to figure things out. Definitely someone I respect a lot! As a co-worker, they've also been very understanding and attentive of me, whenever I had personal problems or health issues that got in the way. Not only that, but they've always had their ears open for feedback, generally improving after.",
    image: "https://avatars.githubusercontent.com/u/48662592?v=4"
  },
  {
    name: "Amaan",
    role: "Owner",
    company: "Refine Development",
    message: "I've had the pleasure of working alongside Luna on several projects, and her blend of technical skill and creative insight is truly remarkable. Not only is she an expert in cybersecurity, system administration, and server management, but her passion for web development and UI/UX design also shines through. I was especially impressed by the beautiful, user-friendly website she designed for our team at Refine—it really stands out. Luna's genuine personality and collaborative spirit make her easy to work with",
    image: "https://avatars.githubusercontent.com/u/67246989?v=4"
  },
  {
    name: "Subham",
    role: "Founder and Lead Developer",
    company: "Scala Studios",
    message: "Vouch for Emily- has done a great job in assisting me when it comes to maintaining backend services at Scala & our operated networks. (PvPBar, Verio)",
    image: "https://avatars.githubusercontent.com/u/62861393?v=4"
  },
  {
    name: "Nopox",
    role: "Founder and Lead Developer",
    company: "Akrylic Entertainment",
    message: "Vouch for Emily - She worked on the system administration and frontend for a large scale distributed CI/CD system. She has also managed 8+ machines for me over the years I have known her. She is easy to work with and takes initiate herself to keep our system secure and running efficiently.",
    image: "https://avatars.githubusercontent.com/u/151496498?v=4"
  }

  // Add more testimonials...
];

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -right-4 lg:right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-purple-500/20 hover:bg-purple-500/40 transition-all hidden md:block"
    >
      <FaArrowRight className="text-white" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -left-4 lg:left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-purple-500/20 hover:bg-purple-500/40 transition-all hidden md:block"
    >
      <FaArrowLeft className="text-white" />
    </button>
  );
}

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }
    ],
    appendDots: (dots: any) => (
      <div style={{ bottom: "-40px" }}>
        <ul className="flex justify-center gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2 h-2 bg-purple-500/50 rounded-full hover:bg-purple-500 transition-all" />
    )
  };

  return (
    <section className="py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
          Testimonials
        </h2>
        <p className="text-center text-gray-400 text-sm md:text-base mb-16">
          See what my clients and colleagues have to say about me
        </p>
        
        <div className="relative md:px-10">
          <Slider {...settings} className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-2 md:px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 hover:from-white/10 hover:to-white/15 transition-all h-full"
                >
                  <FaQuoteLeft className="text-purple-400 text-xl md:text-2xl mb-4" />
                  <p className="text-gray-300 text-sm md:text-base mb-6 italic">
                    "{testimonial.message}"
                  </p>
                  <div className="flex items-center mt-auto">
                    {testimonial.image && (
                      <div className="mr-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-white font-semibold text-sm md:text-base">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-400 text-xs md:text-sm">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
} 