import { Instagram, Linkedin } from "lucide-react";
import LogoWord from "../../assests/logo/logo-word-black.png";
import Logo from "../../assests/logo/logo-black.png";

export default function Footer() {
  return (
    <footer className="bg-[#F4F3EE] py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Services and Branding Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 mb-8">
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-black">Services</h3>
            <ul className="space-y-2">
              {[
                "Web Development",
                "SEO Optimization",
                "Digital Marketing",
                "Product Design",
              ].map((service) => (
                <li key={service} className="text-gray-600 hover:text-black transition-colors">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Branding */}
          <div className="flex flex-col items-center">
            <img src={Logo} alt="Logo" className="h-[80px]" />
            <img src={LogoWord} alt="Brand Name" className="mt-2" />
            <div className="flex gap-4 mt-4">
              <a
                href="https://linkedin.com" // Replace with your LinkedIn profile
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com" // Replace with your Instagram profile
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Blink Creations. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="/terms"
              className="text-gray-600 hover:text-black transition-colors text-sm"
            >
              Terms & Conditions
            </a>
            <a
              href="/policy"
              className="text-gray-600 hover:text-black transition-colors text-sm"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
  