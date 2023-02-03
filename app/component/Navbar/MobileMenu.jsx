import Image from "next/image";

import Link from "next/link";
import { ImCross } from "react-icons/im";
import { RiArrowDownSLine } from "react-icons/ri";
import logo from "../../../public/Logo.png";
const MobileMenu = ({ openNavbar, isOpen }) => {
  return (
    <div
      className={`fixed mobile_navbar w-full h-full  bg-[#222]  ${
        isOpen ? "right-0" : "right-full"
      }  z-50 top-0 `}
    >
      <div className="logo flex  justify-between">
        <Link href="/">
          <Image alt="logo" src={logo} />
        </Link>
        <ImCross
          onClick={() => openNavbar()}
          className="text-2xl m-2 cursor-pointer"
        />
      </div>
      <ul className="nav_item right-full flex flex-col gap-10  h-full  pl-10 py-9   text-left">
        <li onClick={() => openNavbar()}>
          <Link href="/">Home</Link>
        </li>
        <li onClick={() => openNavbar()}>
          <Link href="/about">About</Link>
        </li>
        <li id="dropdownHoverButton" className="relative">
          <button
            data-dropdown-trigger="hover"
            className="text-white inline-flex items-center"
            type="button"
          >
            Services
            <RiArrowDownSLine className="text-xl" />
          </button>

          <div
            id="dropdownHover"
            className={`z-10 
                hidden service_dropdown
                bg-[#222222] divide-y divide-gray-100 absolute rounded-lg shadow w-44 `}
          >
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
              <li className="text-lg" onClick={() => openNavbar()}>
                <Link
                  href="/services"
                  className="block text-lg px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white "
                >
                  Services
                </Link>
              </li>
              <li className="text-lg" onClick={() => openNavbar()}>
                <Link
                  href="services/quotes"
                  className="block text-lg px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Quotes
                </Link>
              </li>
              <li className="text-lg" onClick={() => openNavbar()}>
                <Link
                  href="services/window_tinting"
                  className="block text-lg px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Window Tinting
                </Link>
              </li>
              <li className="text-lg" onClick={() => openNavbar()}>
                <Link
                  href="/services/wheel_repair"
                  className="block text-lg px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Wheel Repair
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li onClick={() => openNavbar()}>
          <Link href="/blog">Blog</Link>
        </li>
        <li onClick={() => openNavbar()}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
