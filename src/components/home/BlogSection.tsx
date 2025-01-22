"use client"

import { motion } from "framer-motion"
import { User } from "lucide-react"

const blogPosts = [
  {
    category: "Website",
    title: "Business Provider Of Software Development Services.",
    description: "Lorem ipsum dolor sit amet consectetur. Non tellus euismod platea cras. Risus ac mauris et facilisi.",
    author: "admin",
    date: "July 2, 2024",
  },
  {
    category: "UI/UX",
    title: "UI/UX Provider Of Software Development Services.",
    description: "Lorem ipsum dolor sit amet consectetur. Non tellus euismod platea cras. Risus ac mauris et facilisi.",
    author: "admin",
    date: "July 2, 2024",
  },
  {
    category: "IT Consultancy",
    title: "IT Consultancy Provider Of Software Development Services.",
    description: "Lorem ipsum dolor sit amet consectetur. Non tellus euismod platea cras. Risus ac mauris et facilisi.",
    author: "admin",
    date: "July 2, 2024",
  },
]

export default function BlogSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#6B46C1] font-medium mb-4 block"
          >
            Latest Blogs
          </motion.span>
          <div className="relative inline-block">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
            >
              Check Out Our Latest
              <br /> News & Article
            </motion.h2>
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              src="/placeholder.svg?height=20&width=100"
              alt="Decorative line"
              className="absolute -right-16 top-0 w-24"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="inline-block px-4 py-2 rounded-lg bg-[#FFC107] text-black font-medium text-sm mb-4">
                {post.category}
              </span>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{post.title}</h3>
              <p className="text-gray-600 mb-6">{post.description}</p>
              <div className="flex items-center text-gray-500 text-sm">
                <User className="w-4 h-4 mr-2" />
                <span className="mr-2">{post.author}</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full mx-2"></span>
                <span>{post.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <button className="px-8 py-3 bg-[#FFC107] hover:bg-[#FFD54F] text-black font-medium rounded-lg transition-colors">
            Read More
          </button>
        </motion.div>
      </div>
    </section>
  )
}

