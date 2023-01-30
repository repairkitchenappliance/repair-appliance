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
      {/* <div className="my-3 flex justify-between mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div className="flex items-center">
          <Image src="/NavbarAssets/iphone.png" width={22} height={22} />
          <span className="font-bold text-orange-500 ml-2">03169650686</span>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 30 30"
            style={{ fill: "#f97316" }}
          >
            <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 50 50"
            style={{ fill: "#f97316", margin: "0 10px" }}
          >
            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
          </svg>

          <span className="bg-orange-500 px-5 py-1 text-white font-bold ml-5">
            WhatsaApp
          </span>
        </div>
      </div> */}
      <nav className="border w-full bg-white py-4 fixed justify-center items-center shadow-md navbar">
        <div className="justify-between md:items-center md:flex mx-6 sm:mx-8 md:mx-20">
          <div>
            <div className="flex items-center justify-between md:block">
              <a href="/" className="flex items-center">
                <h2 className="text-2xl md:font-extrabold text-blue-500">
                  <span className="">Quick </span>
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
