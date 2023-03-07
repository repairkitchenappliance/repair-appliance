import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Image from "next/image";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
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
                href="https://www.facebook.com"
                target="blank"
                aria-label="github"
                className="hover:text-primary mx-4"
              >
                <FacebookOutlinedIcon />
              </a>
              <a
                href="/"
                target="blank"
                aria-label="twitter"
                className="hover:text-primary mx-4"
              >
                <TwitterIcon />
              </a>
              <a
                href="/"
                target="blank"
                aria-label="medium"
                className="hover:text-primary mx-4"
              >
                <InstagramIcon />
              </a>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-6 pb-16 sm:grid-cols-3 md:grid-cols-5">
                <div>
                  <h6 className="text-lg font-bold text-gray-100 dark:text-gray-200">
                    About Us
                  </h6>

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
                        <span className="font-extrabold">6.</span> Emirates
                        Hills
                      </a>
                    </li>
                    <li>
                      <a href="/" className="transition hover:text-primary">
                        <span className="font-extrabold">7.</span> The Villa
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
                        href="tel:+971567091217"
                        className="transition hover:text-primary"
                      >
                        <ContactPhoneIcon />
                        <span className="ml-2">+971 56 709 1217</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:repairkitchenappliance@gmail.com"
                        className="transition hover:text-primary"
                      >
                        <EmailIcon />
                        <span className="ml-2">
                          repairkitchenappliance@gmail.com
                        </span>
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
                {/* <div className="col-span-2 sm:col-span-3 md:col-span-2">
                  <h6 className="text-lg font-bold text-gray-100 dark:text-gray-200">
                    Brands
                  </h6>
                  <ul className=" list-inside flex space-y-1 gap-2">
                    <li className="bg-white flex justify-center items-center">
                      <a
                        href="tel:+243996660436"
                        className="transition hover:text-primary p-2"
                      >
               
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
            
                        <Image
                          src="/BrandsAssets/Siemens.png"
                          height={100}
                          width={140}
                        />
                      </a>
                    </li>
                    <li>
                    </li>
                  </ul>
                </div> */}
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
