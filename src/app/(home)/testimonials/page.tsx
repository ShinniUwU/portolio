'use client';

import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Slider from "react-slick";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  message: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    role: "CTO",
    company: "Tech Solutions Inc.",
    message: "Emily's expertise in systems administration saved us countless hours. Her implementation of automated workflows significantly improved our deployment process.",
    image: "/testimonials/john.jpg"
  },
  {
    name: "Sarah Smith",
    role: "Lead Developer",
    company: "Innovation Labs",
    message: "Working with Emily was a game-changer for our team. Her deep understanding of both development and systems administration brought a unique perspective to our projects.",
    image: "/testimonials/sarah.jpg"
  },
  // Add more testimonials...
];

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-purple-500/20 hover:bg-purple-500/40 transition-all"
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
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-purple-500/20 hover:bg-purple-500/40 transition-all"
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
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
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
          Testimonials
        </h2>
        
        <div className="relative px-10">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 hover:from-white/10 hover:to-white/15 transition-all h-full"
                >
                  <FaQuoteLeft className="text-purple-400 text-2xl mb-4" />
                  <p className="text-gray-300 mb-6 italic">
                    "{testimonial.message}"
                  </p>
                  <div className="flex items-center mt-auto">
                    {testimonial.image && (
                      <div className="mr-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-white font-semibold">{testimonial.name}</h3>
                      <p className="text-gray-400 text-sm">
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