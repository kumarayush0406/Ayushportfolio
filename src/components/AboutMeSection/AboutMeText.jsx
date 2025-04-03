import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About</h2>
      <p className="text-white">
        I'm Ayush, a web developer with a strong foundation in React & Drupal ,
        complemented by modern UI/UX principles. Equipped with passion for
        crerating high performance web application , leveraging skills in
        reusable component development and responsive design.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan">
        <a href="https://github.com/kumarayush0406">My Projects</a>
      </button>
    </div>
  );
};

export default AboutMeText;
