import PropTypes from "prop-types";
import React from "react";
import {motion} from "framer-motion";
import {Helmet} from "react-helmet";
import Header from "../components/header";
import Transition from "../components/transition";

function Layout({ children, location }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <Helmet title="HOPE Community Allotment, Sheffield" defer={false} />
      <Header />

      <main id={"main"} className="flex-1 w-full max-w-4xl px-4 py-4 mx-auto md:px-4 md:py-8">
        <Transition location={location}>{children}</Transition>
      </main>

      <footer className="footer-pattern">
        <nav className="flex justify-center items-center text-center max-w-4xl p-1 mx-auto text-xs tracking-tight leading-tight md:leading-normal md:text-sm md:tracking-normal md:p-3 text-green-200 bg-blue-700  rounded-lg my-1 md:my-2 bg-opacity-80">
          <p className="w-7 h-7 mr-1 ml-1 justify-center items-center font-green-500 hover:cursor-pointer filter brightness-50">
            <a target={"blank"} href={"https://github.com/lewiji/HopeAllotment"}>
              <span role="img" aria-label="Check out the code on Github">
               <svg xmlns="http://www.w3.org/2000/svg"
                    aria-label="GitHub" role="img"
                    viewBox="0 0 512 512"><rect
                   className={"fill-current"}
                   width="512" height="512"
                   rx="15%"
                   fill="#1B1817"/><path fill="#fff" d="M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-50c-71 16-86-28-86-28-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z"/></svg>
              </span>
            </a>
          </p>
          <p className="flex-1 text-center">
            <a
              href="https://www.sagesheffield.org.uk/"
              rel="noreferrer"
              target="_blank"
              className="flex justify-center items-center"
            >
              <svg
                className="h-5 w-5 pt-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
              <span className="leading-tight text-xs md:leading-relaxed">Support Arts Gardening<br/> Education (SAGE)</span>
            </a>
          </p>
          <p className="flex-1 text-center">
            <a
              href="https://www.gca.burngreave.net/"
              rel="noreferrer"
              target="_blank"
              className="flex  justify-center items-center"
            >
              <svg
                className="h-5 w-5 pt-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
              <span className="leading-tight  md:leading-relaxed text-xs">Green City<br/> Action</span>
            </a>
          </p>
          <p className="flex-1 text-center">
            <a
              href="https://growsheffield.com/"
              rel="noreferrer"
              target="_blank"
              className="flex  justify-center items-center"
            >
              <svg
                className="h-5 w-5 pt-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
              <span className="leading-tight  md:leading-relaxed  text-xs">Grow <br/> Sheffield</span>
            </a>
          </p>
          <p className="text-lg leading-relaxed text-right justify-center items-end font-green-500 hover:cursor-pointer">
            <span role="img" aria-label="Green Heart (scroll to top)">
              <motion.svg initial={{scale: 0.8, opacity: 0, pathLength: 0}} animate={{scale: 1, opacity: 1, pathLength: 1}}
                          whileHover={{scale: 1.2}} onClick={() => {document?.getElementById('logo').scrollIntoView({behavior: "smooth", inline: "start", block: "start"})}}
                          transition={{type: "spring", duration: 4, bounce: 3}} className={"stroke fill-current float-right mr-2"} height={32} width={32} >
<path id="heart-icon" d="M16,28.261c0,0-14-7.926-14-17.046c0-9.356,13.159-10.399,14-0.454c1.011-9.938,14-8.903,14,0.454
  C30,20.335,16,28.261,16,28.261z"/>
    </motion.svg>
            </span>
        </p>

        </nav>

      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
