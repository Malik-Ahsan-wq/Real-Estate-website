import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => setEmail(e.target.value);

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    setEmail(""); // optional: clear input after subscribe
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top section: logo, nav, and description */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Logo and Description */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="src/assets/logo.svg"
                alt="Logo"
                className="h-10 w-auto"
              />
            
            </div>
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
              quo. Praesentium sequi odio laborum fugiat perspiciatis molestiae
              facilis quaerat.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#Home"
                  className="hover:text-white transition duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#About"
                  className="hover:text-white transition duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#Projects"
                  className="hover:text-white transition duration-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#Testimonials"
                  className="hover:text-white transition duration-200"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Subscribe to our newsletter
            </h3>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col space-y-4"
            >
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md transition duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          &copy; 2025 RealEstate. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
