import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // Default styling
import { assets, projectsData } from "../assets/assets.js";

const Projects = () => {
  return (
    <section
      id="Projects"
      className="w-full px-4 py-16 md:px-12 lg:px-24 xl:px-32 bg-white"
    >
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Projects{" "}
          <span className="font-light underline underline-offset-4 decoration-1">
            Completed
          </span>
        </h2>
        <p className="text-gray-500 mt-2 max-w-md mx-auto">
          Crafting Space, Building Legacies – Explore Our Portfolio
        </p>
      </div>

      {/* Splide Slider */}
      <Splide
        options={{
          perPage: 3,
          gap: "1rem",
          type: "loop",
          breakpoints: {
            768: {
              perPage: 1,
              
            },
            1024: {
              perPage: 2,
            },
            1280: {
              perPage: 3,
            },
          },
          pagination: false,
          arrows: true,
        }}
        aria-label="Projects Carousel"
      >
        {projectsData.map((project, index) => (
          <SplideSlide key={index}>
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-md group transition-all duration-300 hover:shadow-xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-4 py-3 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {project.price} <span className="mx-1">|</span>{" "}
                  {project.location}
                </p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default Projects;
