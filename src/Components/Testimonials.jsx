import React from "react";
import { assets, testimonialsData } from "../assets/assets";

const Testimonials = () => {
  return (
    <div
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Testimonials
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Crafting Space, Building Legacies - Explore Our Portfolio
      </p>

      {/* Testimonials Cards */}
      <div className="w-full px-4 sm:px-6 lg:px-8 mt-10">
        {/* Scrollable container on mobile, grid on sm+ */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto sm:overflow-visible pb-4 -mx-4 sm:mx-0">
          {testimonialsData.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[280px] sm:min-w-0 bg-white p-5 sm:p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full mx-4 sm:mx-0"
            >
              {/* User Info */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-yellow-400"
                />
                <div className="text-sm sm:text-base">
                  <h3 className="font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600">{testimonial.title}</p>
                  <p className="text-gray-400 text-xs">{testimonial.role}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-gray-500 text-xs sm:text-sm">
                      Rating:
                    </span>
                    <img
                      src={assets.star_icon}
                      alt="star"
                      className="w-4 h-4"
                    />
                    <span className="text-yellow-500 font-semibold text-xs sm:text-sm">
                      {testimonial.rating} / 5
                    </span>
                  </div>
                </div>
              </div>

              {/* Feedback */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 flex-1">
                “{testimonial.feedback}”
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2"></div>
                <p className="text-xs sm:text-sm text-gray-400">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
