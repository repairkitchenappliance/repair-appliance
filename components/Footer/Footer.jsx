import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer
      className="
    "
    >
      <div className="bg-gray-800 pt-8 md:pt-20">
        <div className="container m-auto space-y-8 px-6 text-gray-400 dark:text-gray-300 md:px-12 lg:px-20">
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "40px",
                color: "white",
              }}
            >
              <a
                href="/"
                target="blank"
                aria-label="github"
                className="hover:text-primary mx-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="currentColor"
                  className="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <a
                href="/"
                target="blank"
                aria-label="twitter"
                className="hover:text-primary mx-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="currentColor"
                  className="bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
              <a
                href="/"
                target="blank"
                aria-label="medium"
                className="hover:text-primary mx-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="currentColor"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z" />
                </svg>
              </a>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-6 pb-16 sm:grid-cols-3 md:grid-cols-5">
                <div>
                  <h6 className="text-lg font-bold text-gray-100 dark:text-gray-200">
                    About Us
                  </h6>
                  {/* <ul className="mt-4 list-inside space-y-4">
                    <li>
                      <a href="/" className="transition hover:text-primary">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="/" className="transition hover:text-primary">
                        Customers
                      </a>
                    </li>
                    <li>
                      <a href="/" className="transition hover:text-primary">
                        Enterprise
                      </a>
                    </li>
                    <li>
                      <a href="/" className="transition hover:text-primary">
                        Partners
                      </a>
                    </li>
                  </ul> */}
                  <p className="leading-4">
                    Our appliance repair service is quick and reliable. We
                    understand the importance of getting your broken appliances
                    fixed as soon as possible.
                  </p>
                </div>
                <div>
                  <h6 className="text-lg font-bold text-gray-100 dark:text-gray-200">
                    Services
                  </h6>
                  <ul className="list-inside space-y-2">
                    <li className="leading-none">
                      <a href="/" className="transition hover:text-primary">
                        <span className="font-extrabold">1.</span> Washing
                        Machine Repaire service
                      </a>
                    </li>
                    <li className="leading-none">
                      <a href="/" className="transition hover:text-primary">
                        <span className="font-extrabold">2.</span> Dishwasher
                        Repaire service
                      </a>
                    </li>
                    <li className="leading-none">
                      <a href="/" className="transition hover:text-primary">
                        <span className="font-extrabold">3.</span> Dryer Machine
                        Repaire service
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h6 className="text-lg font-bold text-gray-100 dark:text-gray-200">
                    Locations
                  </h6>
                  <ul className=" list-inside space-y-1">
                    <li>
                      <a href="/" className="transition hover:text-primary ">
                        <span className="font-extrabold">1.</span> Victory
                        Hights
                      </a>
                    </li>
                    <li>
                      <a href="/" className="transition hover:text-primary">
                        <span className="font-extrabold">2.</span> Jumaira Gulf
                        Estate
                      </a>
                    </li>
                    <li>
                      <a href="/" className="transition hover:text-primary">
                        <span className="font-extrabold">3.</span> Palm Jumaira
                      </a>
                    </li>
                    <li>
                      <a href="/" className="transition hover:text-primary">
                        <span className="font-extrabold">4.</span> Arabian
                        Ranches
                      </a>
                    </li>
                    <li>
                      <a href="/" className="transition hover:text-primary">
                        <span className="font-extrabold">5.</span> Damac hill
                      </a>
                    </li>
                    <li>
                      <a href="/" className="transition hover:text-primary">
                        <span className="font-extrabold">8.</span> Emirates
                        Hills
                      </a>
                    </li>
                    <li>
                      <a href="/" className="transition hover:text-primary">
                        <span className="font-extrabold">9.</span> The Villa
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-span-2 sm:col-span-3 md:col-span-2">
                  <h6 className="text-lg font-bold text-gray-100 dark:text-gray-200">
                    Contact
                  </h6>
                  <ul className=" list-inside space-y-1">
                    <li>
                      <a
                        href="tel:+243996660436"
                        className="transition hover:text-primary"
                      >
                        <ContactPhoneIcon />
                        <span className="ml-2">+923058034549</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:meschacirung@gmail.com"
                        className="transition hover:text-primary"
                      >
                        <EmailIcon />
                        <span className="ml-2">contact@tailus.com</span>
                      </a>
                    </li>
                    <li>
                      {/* <form action>
                        <label
                          htmlFor="newsletter"
                          className="text-lg text-gray-400 dark:text-gray-200"
                        >
                          Subscribe to our newsletter
                        </label>
                        <div className="relative mt-4">
                          <input
                            type="email"
                            name="newsletter"
                            id="newsletter"
                            placeholder="Your email"
                            className="invalid:outline-none placeholder-gray-600 dark:placeholder-white rounded-3xl w-full bg-gray-100 dark:bg-gray-900 px-4 py-3 ring-1 ring-gray-200 dark:ring-gray-700 invalid:ring-red-400"
                          />
                          <button
                            type="submit"
                            title="Submit"
                            className="absolute right-0 w-max  rounded-r-3xl bg-gray-300 hover:bg-gray-400 py-3 px-6 text-center transition"
                          >
                            <span className="font-semibold text-gray-900">
                              Send
                            </span>
                          </button>
                        </div>
                      </form> */}
                    </li>
                  </ul>
                </div>
                <div className="col-span-2 sm:col-span-3 md:col-span-2">
                  <h6 className="text-lg font-bold text-gray-100 dark:text-gray-200">
                    Brands
                  </h6>
                  <ul className=" list-inside flex space-y-1 gap-2">
                    <li className="bg-white flex justify-center items-center">
                      <a
                        href="tel:+243996660436"
                        className="transition hover:text-primary p-2"
                      >
                        {/* <ContactPhoneIcon /> */}
                        <Image
                          src="/BrandsAssets/Mieli.png"
                          height={100}
                          width={120}
                        />
                      </a>
                    </li>
                    <li className="bg-white flex justify-center items-center">
                      <a
                        href="tel:+243996660436"
                        className="transition hover:text-primary p-2"
                      >
                        {/* <ContactPhoneIcon /> */}
                        <Image
                          src="/BrandsAssets/Ariston.png"
                          className="object-cover"
                          height={100}
                          width={140}
                        />
                      </a>
                    </li>
                    <li className="bg-white flex justify-center items-center">
                      <a
                        href="tel:+243996660436"
                        className="transition hover:text-primary"
                      >
                        {/* <ContactPhoneIcon /> */}
                        <Image
                          src="/BrandsAssets/LG.png"
                          height={100}
                          width={140}
                        />
                      </a>
                    </li>
                    <li className="bg-white flex justify-center items-center">
                      <a
                        href="tel:+243996660436"
                        className="transition hover:text-primary p-2"
                      >
                        {/* <ContactPhoneIcon /> */}
                        <Image
                          src="/BrandsAssets/Bosch.png"
                          height={100}
                          width={140}
                        />
                      </a>
                    </li>
                    <li className="bg-white flex justify-center items-center">
                      <a
                        href="tel:+243996660436"
                        className="transition hover:text-primary p-2"
                      >
                        {/* <ContactPhoneIcon /> */}
                        <Image
                          src="/BrandsAssets/Siemens.png"
                          height={100}
                          width={140}
                        />
                      </a>
                    </li>
                    <li>
                      {/* <form action>
                        <label
                          htmlFor="newsletter"
                          className="text-lg text-gray-400 dark:text-gray-200"
                        >
                          Subscribe to our newsletter
                        </label>
                        <div className="relative mt-4">
                          <input
                            type="email"
                            name="newsletter"
                            id="newsletter"
                            placeholder="Your email"
                            className="invalid:outline-none placeholder-gray-600 dark:placeholder-white rounded-3xl w-full bg-gray-100 dark:bg-gray-900 px-4 py-3 ring-1 ring-gray-200 dark:ring-gray-700 invalid:ring-red-400"
                          />
                          <button
                            type="submit"
                            title="Submit"
                            className="absolute right-0 w-max  rounded-r-3xl bg-gray-300 hover:bg-gray-400 py-3 px-6 text-center transition"
                          >
                            <span className="font-semibold text-gray-900">
                              Send
                            </span>
                          </button>
                        </div>
                      </form> */}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center border-t border-cyan-800 py-8 text-gray-200">
                <a href="https://hamzafaham.com">© hamzafaham 2023</a>
                <span className="ml-2"> All right reserved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
