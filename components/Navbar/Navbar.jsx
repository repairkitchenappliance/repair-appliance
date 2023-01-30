import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Image from "next/image";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  function handleScroll() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 0) {
      navbar.classList.add("shadow-md");
    } else {
      navbar.classList.remove("shadow-md");
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className="border w-full bg-white py-4 fixed justify-center items-center shadow-md navbar">
        <div className="justify-between md:items-center md:flex mx-6 sm:mx-8 md:mx-20">
          <div>
            <div className="flex items-center justify-between md:block">
              <a href="/" className="flex items-center">
                <h2 className="text-2xl md:font-extrabold text-blue-500">
                  <span className="">Appliance </span>
                  <snap className="text-gray-800">Repair</snap>
                </h2>
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-800 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="flex ">
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center font-medium space-y-8 md:flex md:space-x-6 md:space-y-0 text-sm">
                <li>
                  <Link
                    to="home"
                    smooth={true}
                    className="text-gray-800 hover:text-blue-500 cursor-pointer focus:text-blue-500"
                  >
                    HOME{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="about-us"
                    smooth={true}
                    className="text-gray-800 hover:text-blue-500 cursor-pointer focus:text-blue-500"
                  >
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link
                    to="services"
                    smooth={true}
                    className="text-gray-800 hover:text-blue-500 cursor-pointer focus:text-blue-500"
                  >
                    SERVICES
                  </Link>
                </li>
                <li>
                  <Link
                    to="brands"
                    smooth={true}
                    className="text-gray-800 hover:text-blue-500 cursor-pointer focus:text-blue-500"
                  >
                    BRANDS
                  </Link>
                </li>
                <li>
                  <Link
                    to="contact"
                    smooth={true}
                    className="text-gray-800 hover:text-blue-500 cursor-pointer focus:text-blue-500"
                  >
                    CONTACT
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="#"
                    className="text-white bg-blue-500 hover:bg-blue-600 transition px-4 py-2 cursor-pointer md:ml-12 text-nowrap"
                  >
                    CHECK AVALABILITY
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
