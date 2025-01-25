import { MonitorCog, Users, Headset } from "lucide-react";

import AboutImg from "../../assests/about.jpg";

export default function AboutArea2() {
  return (
    <section className="pt-24 px-4 md:px-8 lg:px-16" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <img
              src={AboutImg}
              alt="Web Design Solutions Illustration"
              className="w-full h-auto"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-2 mb-6 rounded-full text-sm font-medium bg-gray-100 text-gray-900">
              - ABOUT OUR COMPANY -
            </span>
            <h1
              className="text-4xl md:text-5xl font-medium mb-6 uppercase"
              style={{ lineHeight: "1.3" }}
            >
              Exceptional Solutions for Your Every Need
            </h1>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              At our core, we are committed to delivering comprehensive and
              innovative solutions tailored to your unique needs.We provide a
              one-stop destination for all your professional and personal
              requirements. Let us transform your vision into reality with
              reliable, dynamic, and impactful solutions.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8  rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center ">
                  <MonitorCog className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-normal mb-2">
                  Technology Solutions
                </h3>
              </div>

              <div className="text-center p-8  rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center ">
                  <Headset className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-normal mb-2">
                  Communication Support{" "}
                </h3>
              </div>

              <div className="text-center p-8  rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center ">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-normal mb-2">
                  Collaborative Members
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
      </div>
    </section>
  );
}
