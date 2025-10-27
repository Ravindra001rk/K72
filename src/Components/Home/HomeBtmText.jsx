import React from "react";
import { Link } from "react-router-dom";

const HomeBtmText = () => {
  return (
    <div className="flex uppercase items-center justify-center  lg:text-[4vw] text-[6vw] gap-16 text-white">
      <Link
        to="/projects"
        className="border-2 rounded-[3vw] py-1 px-5 hover:text-amber-600"
      >
        projects
      </Link>
      <Link
        to="/agence"
        className="border-2 rounded-[3vw] py-1 px-5  hover:text-amber-600"
      >
        Agence
      </Link>
    </div>
  );
};

export default HomeBtmText;
