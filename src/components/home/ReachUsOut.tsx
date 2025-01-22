"use client"

import { motion } from "framer-motion"
import Img from '../../assests/reachus.webp'

export default function ReachUsOut() {
  return (
    <div className=" py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative  bg-[#F4F3EE]"
      >
        {/* Content Container */}
        <div className="relative z-0  p-12 md:p-16 lg:p-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium uppercase text-black leading-tight mb-8">
              Power Up Your Business With Us
            </h1>
            <p className="text-gray-800 text-lg mb-12 max-w-3xl">
              Unlock the potential of your brand with innovative solutions tailored to your needs. Whether it’s building dynamic websites, enhancing your digital presence, or creating standout visuals, we’re here to bring your ideas to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-4 bg-[#070707] hover:bg-[#814fff] text-white font-semibold rounded-lg 
                         transition-colors duration-200 text-md z-0"
            >
              Contact Now
            </motion.button>
          </motion.div>
        </div>

        {/* Image Container - Positioned absolutely */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute top-0 right-20 w-[25%] h-full z-0"
        >
          <img
            src={Img}
            alt="Business professional"
            className="w-full h-full object-cover object-center rounded-l-3xl"
          />
        </motion.div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-12 left-12 w-24 h-24 rounded-full bg-white/5"></div>
          <div className="absolute bottom-24 left-24 w-32 h-32 rounded-full bg-white/5"></div>
          <div className="absolute top-1/3 right-[45%] w-16 h-16 rounded-full bg-white/5"></div>
        </div>
      </motion.div>
    </div>
  )
}

