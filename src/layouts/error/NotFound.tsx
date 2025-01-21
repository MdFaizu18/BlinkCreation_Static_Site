"use client";

import { useEffect, useState } from "react";

import { ArrowLeft, MousePointer2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F3EE] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-black/5 rounded-full blur-3xl -top-48 -left-48 animate-blob" />
        <div className="absolute w-96 h-96 bg-black/5 rounded-full blur-3xl -bottom-48 -right-48 animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Glitch Effect Numbers */}
        <div className="relative inline-block">
          <h1 className="text-[12rem] md:text-[16rem] font-bold leading-none tracking-tighter text-black relative">
            <span className="absolute inset-0 animate-glitch-1 text-black">
              404
            </span>
            <span className="absolute inset-0 animate-glitch-2 text-black">
              404
            </span>
            404
          </h1>
        </div>

        {/* Interactive Elements */}
        <div
          className="group relative mt-8 mb-12 inline-block"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <MousePointer2
            className="absolute text-black transition-all duration-300 w-6 h-6"
            style={{
              left: isHovering ? `${(mousePosition.x % 100) - 50}px` : "0",
              top: isHovering ? `${(mousePosition.y % 20) - 10}px` : "0",
              opacity: isHovering ? 1 : 0,
            }}
          />
          <h2 className="text-3xl text-black md:text-4xl font-bold mb-4 group-hover:tracking-widest transition-all duration-300">
            Page Not Found
          </h2>
        </div>

        <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto">
          Oops! Looks like you've ventured into the digital void. Don't worry,
          even the best explorers get lost sometimes.
        </p>

        {/* CTA Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full 
                     hover:bg-gray-800 transition-all duration-300 hover:gap-4 group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-2" />
          <span>Return Home</span>
        </Link>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-black/20 animate-pulse"
              style={{ animationDelay: `${i * 200}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
