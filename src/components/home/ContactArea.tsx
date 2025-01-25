"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Linkedin,
} from "lucide-react";
import { Instagram } from "lucide-react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const services = [
  "Web Development",
  "Graphic Design",
  "Digital Marketing",
  "Video Editing",
  "Content Writing",
  "Student Consultancy",
  "Need to Consult",
];

export default function CreativeContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, selectedService, message });
    // Add your form submission logic here
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#F4F3EE] text-black flex items-center justify-center p-4"
    >
      <div className="container mx-28">
        <motion.h1
          className="text-6xl font-medium mb-12  text-black uppercase"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            className="lg:col-span-1 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center space-x-4">
              <Phone className="w-8 h-8" />
              <div>
                <h2 className="text-xl font-semibold text-black">Phone</h2>
                <p>+91 6383108327</p>
                <p>+91 9345266656</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-8 h-8" />
              <div>
                <h2 className="text-xl font-semibold text-black">Email</h2>
                <p>blinkcreationsofficial@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-8 h-8" />
              <div>
                <h2 className="text-xl font-semibold text-black">Address</h2>
                <p>Tamil Nadu - 636 001</p>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4 text-black">
                Connect with Us
              </h2>
              <div className="flex space-x-4">        
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a
                 href="https://instagram.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram className="w-6 h-6" />
                </motion.a>
                <motion.a
                 href="https://instagram.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <WhatsAppIcon className="w-6 h-6" />
                </motion.a>           
              </div>
            </div>
          </motion.div>
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 bg-white bg-opacity-10 border-spacing-0 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-200"
                    placeholder="John Doe"
                    required
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 bg-white bg-opacity-10 border-spacing-0 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-200"
                    placeholder="john@example.com"
                    required
                  />
                </motion.div>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <label
                  htmlFor="service"
                  className="block text-sm font-medium mb-2"
                >
                  Service Required
                </label>
                <select
                  id="service"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-2 bg-white bg-opacity-10 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-200 appearance-none"
                  required
                >
                  <option value="">- Select a service -</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 bg-white bg-opacity-10 border border-black border-spacing-0 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-200 resize-none"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </motion.div>
              <motion.button
                type="submit"
                className="w-full bg-white text-black font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition duration-200 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
