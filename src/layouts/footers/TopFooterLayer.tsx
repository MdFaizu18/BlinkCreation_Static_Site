const TopFooterLayer = () => {
  return (
    <div>
      <div className="pt-24 pb-24 bg-black ">
        <h2 className="text-[150px] leading-none cursor-pointer font-medium uppercase text-center text-main-color">
          Let's Connect
        </h2>
        <br />
        <p className="text-lg text-center text-main-color">
          We turn your ideas into reality—connect with us today!
        </p>
      </div>
    </div>
  );
};

export default TopFooterLayer;

// to implement the pop up celebration future

// import React, { useState } from "react";
// import Confetti from "react-confetti"; // Install this package using npm or yarn

// export default function HeroArea() {
//   const [showConfetti, setShowConfetti] = useState(false);

//   const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
//     e.preventDefault();
//     setShowConfetti(true); // Show confetti
//     setTimeout(() => {
//       setShowConfetti(false); // Hide confetti after animation
//       const href = e.currentTarget.getAttribute("href");
//       const targetId = href ? href.substring(1) : "";
//       const targetElement = document.getElementById(targetId);

//       if (targetElement) {
//         targetElement.scrollIntoView({ behavior: "smooth" });
//       }
//     }, 3000); // Adjust time to match the duration of the confetti animation
//   };

//   return (
//     <>
//       {showConfetti && <Confetti />} {/* Add confetti effect */}
//       <section id="home" className="main-hero-area py-48">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className=" wow fadeInUp text-center delay-0-2s">
//                 <h2 className="font-medium lg:text-[105px] md:text-[80px] text-[60px] uppercase text-center text-[#070707]">
//                   You Dream It, We Craft It
//                 </h2>
//                 <h3 className="font-normal lg:text-[55px] md:text-[50px] text-[40px] uppercase text-center text-gray-400">
//                   Innovative Solutions for Your Digital and Creative Needs
//                 </h3>
//                 <a
//                   className="theme-btn mt-6"
//                   href="#contact"
//                   onClick={handleSmoothScroll}
//                 >
//                   Reach Out Us
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
