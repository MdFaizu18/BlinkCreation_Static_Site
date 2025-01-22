"use client";

import {
  Code,
  Palette,
  Video,
  Megaphone,
  Globe,
  ArrowUpRight,
} from "lucide-react";

import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Web Development",
    icon: <Globe className="w-8 h-8 text-black" />,
    description:
      "Creating stunning websites tailored to your needs, including static, dynamic, and e-commerce solutions.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Landing Page Re-creation",
    icon: <Code className="w-8 h-8 text-black" />,
    description:
      "Revamp your landing pages with a fresh, engaging design that converts visitors into loyal customers.",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Digital Marketing",
    icon: <Megaphone className="w-8 h-8 text-black" />,
    description:
      "From social media management to SEO, SEM, influencer marketing, and personal branding.",
    color: "from-green-500 to-teal-500",
  },
  {
    id: 4,
    title: "Video Creation",
    icon: <Video className="w-8 h-8 text-black" />,
    description:
      "Enhance your brand with high-quality video edits, from reels and YouTube videos to promotional content.",
    color: "from-red-500 to-orange-500",
  },
  {
    id: 5,
    title: "Graphic Design",
    icon: <Palette className="w-8 h-8 text-black" />,
    description:
      "We create impactful designs, including illustrations, brochures, posters, logos, and catalogs.",
    color: "from-yellow-500 to-amber-500",
  },
];

export default function ServiceArea() {
  return (
    <section className="py-20 px-4 md:px-8 bg-black" id="service">
      <div className="max-w-7xl mx-auto">
        {/* Title and First Box Row */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-900">
              - WHAT DO WE OFFER? -
            </span>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-medium uppercase text-white"
              style={{ lineHeight: "1.2" }}
            >
              Services Designed to Elevate Your Brand
            </h2>
            <p className="text-gray-300 max-w-2xl">
              From stunning web designs to impactful video edits, we bring your
              ideas to life with innovation and expertise.
            </p>
          </motion.div>

          {/* First Service Box */}
          <motion.div
            className={`relative group rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] bg-gradient-to-r ${services[0].color}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
              {services[0].icon}
            </div>
            <h3 className="text-xl font-medium uppercase text-white mb-4">
              {services[0].title}
            </h3>
            <p className="text-white">{services[0].description}</p>
            {/* Hover Arrow */}
            <a
              href="/service"
              className="absolute top-4 right-4 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 ease-in-out"
            >
              <ArrowUpRight className="w-6 h-6" />
            </a>
          </motion.div>
        </div>

        {/* Remaining Service Boxes Row */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {services.slice(1).map((service) => (
            <motion.div
              key={service.id}
              className={`relative group rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] bg-gradient-to-r ${service.color}`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium uppercase text-white mb-4">
                {service.title}
              </h3>
              <p className="text-white">{service.description}</p>
              {/* Hover Arrow */}
              <a
                href="/service"
                className="absolute top-4 right-4 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 ease-in-out"
              >
                <ArrowUpRight className="w-6 h-6" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
