import { Instagram, Linkedin } from "lucide-react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LogoWord from "../../assests/logo/logo-word-white.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Services and Branding Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 mb-8">
          {/* Services */}

          {/* Branding */}
          <div className="flex justify-around items-center w-full">
            {/* <Link to="/">
              <img src={Logo} alt="Logo" className="h-[180px]" />
            </Link> */}
            <div className="flex flex-col items-center">
              <Link to="/">
                <img src={LogoWord} alt="Brand Name" className="mt-2" />
              </Link>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://instagram.com" // Replace with your Instagram profile
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-black transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com" // Replace with your LinkedIn profile
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-black transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://wa.me/916383108327?text=Hello! I want to know more about your services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-black transition-colors"
                >
                  <WhatsAppIcon className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-sm">
            © {new Date().getFullYear()} Blink Creations. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="/terms"
              className="text-white hover:text-black transition-colors text-sm"
            >
              Terms & Conditions
            </a>
            <a
              href="/policy"
              className="text-white hover:text-black transition-colors text-sm"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
