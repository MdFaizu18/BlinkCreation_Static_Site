import { Facebook, Twitter, Instagram, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#F4F3EE] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Services Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-black">Services</h3>
            <ul className="space-y-4">
              {[
                "Web Development",
                "SEO Optimization",
                "Digital Marketing",
                "Product Design",
                "Logo Design",
                "Content Writing",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="#service"
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-black">Links</h3>
            <ul className="space-y-4">
              {[
                "About Agency",
                "Latest News & Blog",
                "Meet The Team",
                "Popular Services",
                "Testimonials",
                "Need a Career?",
              ].map((link) => (
                <li key={link}>
                  <Link
                    to="#"
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-black">Follow</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-black transition-colors inline-flex items-center gap-2"
                >
                  <Instagram className="w-5 h-5" /> Instagram
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-black transition-colors inline-flex items-center gap-2"
                >
                  <Twitter className="w-5 h-5" /> Twitter
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-black transition-colors inline-flex items-center gap-2"
                >
                  <Facebook className="w-5 h-5" /> Facebook
                </Link>
              </li>
            </ul>
          </div>
          {/* Newsletter Column */}
          {/* <div>
            <h3 className="text-xl font-bold mb-6">Subscribe Our Newsletter</h3>
            <p className="text-gray-600 mb-6">
              Natus errorsit voluptatem accusa dolore mque quae abillo inventore verita achitec beatae vitae dicta sunt
              explicabo.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Sign Up
              </button>
            </form>
          </div> */}
        </div>

        {/* Bottom Bar */}

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()}. A Blink Creations Portfolio
          </p>
          <div className="flex gap-6">
            <Link
              to="/terms"
              className="text-gray-600 hover:text-black transition-colors text-sm"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/policy"
              className="text-gray-600 hover:text-black transition-colors text-sm"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
