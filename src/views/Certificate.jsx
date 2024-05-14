import React, { useContext } from "react";

import Certi from "../components/certi";
import Certi1 from "../components/certi1";
import Certi2 from "../components/certi2";
import Certi3 from "../components/certi3";

import { ThemeContext } from "../themeProvider";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="Certificate"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h1 className="text-6xl font-pacifico px-4 md:px-0 text-center">
        Certificate
        </h1>
        <h4 className="mt-16 text-3xl font-semibold text-orange-500">
         
        </h4>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
          <Certi />
          <Certi1 />
          <Certi2 />
          <Certi3 />
        
         

          
        </div>
        <a
          href="https://github.com/nibinpsreenivas?tab=repositories"
          class=" w-32 flex items-center py-4 px-4 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto mt-4"
        >
          Show More
          <svg
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Projects;
