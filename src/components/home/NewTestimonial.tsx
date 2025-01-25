"use client"

import { useState } from "react"

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "CEO at TechCorp",
        image: "/placeholder.svg?height=400&width=400",
        quote:
            "Working with this team has been an absolute game-changer for our business. Their innovative solutions and dedication to excellence are unmatched.",
        rating: 5,
        company: "TechCorp Solutions",
    },
    {
        id: 2,
        name: "Michael Chang",
        role: "Product Manager",
        image: "/placeholder.svg?height=400&width=400",
        quote:
            "The level of creativity and technical expertise they bring to the table is exceptional. They've helped us transform our digital presence.",
        rating: 5,
        company: "Innovation Labs",
    },
    {
        id: 3,
        name: "Emma Williams",
        role: "Marketing Director",
        image: "/placeholder.svg?height=400&width=400",
        quote:
            "Their attention to detail and commitment to delivering outstanding results has made them our go-to partner for all digital initiatives.",
        rating: 5,
        company: "Global Brands Inc",
    },
]

export default function NewTestimonial() {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto max-w-7xl relative">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-4">
                        Testimonials
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                        What Our Clients Say
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className={`group relative p-8 rounded-2xl transition-all duration-500 hover:scale-105
                ${index === activeIndex ? "bg-white shadow-2xl" : "bg-white/50 hover:bg-white hover:shadow-xl"}`}
                            onMouseEnter={() => setActiveIndex(index)}
                        >
                            {/* Quote Icon */}
                            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>

                            {/* Content */}
                            <div className="relative">
                                <div className="mb-6">
                                    <div className="flex items-center mb-4">
                                        <div className="relative">
                                            <div className="w-16 h-16 rounded-full overflow-hidden">
                                                <img
                                                    src={testimonial.image || "/placeholder.svg"}
                                                    alt={testimonial.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="font-semibold text-lg text-gray-900">{testimonial.name}</h3>
                                            <p className="text-sm text-gray-600">{testimonial.role}</p>
                                        </div>
                                    </div>
                                    <div className="flex mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>

                                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>

                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">{testimonial.company}</span>
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                                </div>
                            </div>

                            {/* Decorative Corner */}
                            <div className="absolute -bottom-px -right-px w-20 h-20 overflow-hidden">
                                <div className="absolute transform rotate-45 bg-gradient-to-r from-purple-600 to-blue-600 w-20 h-2 -bottom-1 -right-8 group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

