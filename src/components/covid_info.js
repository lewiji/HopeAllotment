import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import {motion} from "framer-motion";
const CovidInfo = () => {
  const [tippyTap, setTippyTap] = useState(false);
  return (
    <>
      <div className="bg-blue-50 rounded text-blue-900 px-4 py-3 mt-2 prose mx-auto mb-8" role="alert">
        <div className="flex flex-row justify-start items-start">
          <div><svg className="fill-current h-6 w-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
          <div className={"flex flex-col items-center mr-2 sm:mr-8 text-justify"}>
            <h3 className="text-blue-900 mt-0">CORONAVIRUS/COVID-19</h3>
            <p className="text-sm text-blue-500 text-center mx-auto">The spread of COVID-19 (Coronavirus) is a concern for all of us and we are taking the
              situation seriously.</p>
            <p>We keep up to date with guidance from NHS England and the Department of Health and
              Social and Care and follow the advice provided by Sheffield City Council’s allotments team.</p>
            <p>All our gardening activities take place in the open air and therefore the risk of spreading
              Coronavirus is very low. We have an outdoor shelter that people can use when it rains.</p>
            <p>We also take the following precautions to help prevent the spread of Coronavirus:</p>
            <ul>
              <li>encourage users and volunteers to wash their hands regularly using our hands-free <a href="#" onClick={(e) => {e.preventDefault(); setTippyTap(!tippyTap); return false;}}>‘Tippy Tap’</a>
                <motion.div id={"tippytap"} initial={{opacity: 0, scale: 0, display: "none"}} animate={tippyTap ? {opacity: 1, scale: 1, display: "block", transition: {type: "spring", stiffness: 300, damping: 20}} : {opacity: 0, scale: 0, transition: {type: "tween", duration: 0.25}, transitionEnd: { display: "none"}}}>
                  <StaticImage src={"../../content/pages/images/tippytap.jpg"} alt={"Tippy Tap hand sanitiser dispenser"}/>
                </motion.div>
              </li>
              <li>have hand sanitiser available and encourage people to use it regularly</li>
              <li>observe “social distancing” with each other (2 to 3 metres)</li>
              <li>provide gardening gloves which are washed between sessions</li>
              <li>ensure that only one person at a time works in any indoor spaces such as sheds and
                polytunnels.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default CovidInfo;