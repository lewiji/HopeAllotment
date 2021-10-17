import React, { useState } from "react";
import { Link } from "gatsby";

const VolunteersNeeded = () => {
  return(
  <div className="bg-yellow-100 rounded text-yellow-900 px-4 py-3 pt-1 no-underline prose-yellow w-11/12 mx-auto" role="alert">
    <Link to={"/contact"}>
      <div className="flex items-center no-underline">
        <div>
          <svg className="fill-current h-6 w-6 text-yellow-600 mr-4" xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 20 20">
            <path
              d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
          </svg>
        </div>
        <div>
          <p className="text-sm text-yellow-800">Volunteers are urgently needed! Please get in touch and tell your friends. There is plenty of work to do and lots of produce to collect.</p>
        </div>
      </div>
    </Link>
  </div>);
}

export default VolunteersNeeded;