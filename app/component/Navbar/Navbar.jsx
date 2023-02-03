"use client";
import Image from "next/image";

import Link from "next/link";

import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { RiArrowDownSLine } from "react-icons/ri";
import logo from "../../../public/Logo.png";
import MobileMenu from "./MobileMenu";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="px-5 pt-5 flex items-center justify-between z-50 lg:px-28 left-0  fixed w-full bg-transparent">
        <div className="logo">
          <Link href="/">
            <Image src={logo} alt="dipped" />
          </Link>
        </div>
        {/* Dekstop And Big Screen Navbar */}
        <div>
          <ul className="nav_item hidden md:flex items-center gap-10">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="about">About</Link>
            </li>
            <li id="dropdownHoverButton" className="relative">
              <Link
                href="/services "
                className="text-white inline-flex items-center"
              >
                Services
                <RiArrowDownSLine />
              </Link>

              <div
                id="dropdownHover"
                className={`z-10 
                  hidden service_dropdown
                  bg-[#222222] text-lg  divide-y divide-gray-100 absolute rounded-lg shadow w-44 `}
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <Link
                      href="/services/quotes"
                      className=" block px-4 py-2 text-lg  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Quotes
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="services/window_tinting"
                      className="block text-lg px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white;"
                    >
                      Window Tinting
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/wheel_repair"
                      className="block px-4 py-2 text-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white;"
                    >
                      Wheel Repair
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <BiMenu
          onClick={() => openNavbar()}
          className=" md:hidden text-4xl cursor-pointer"
        />
        {/* Mobile Menu */}
        <MobileMenu openNavbar={openNavbar} isOpen={isOpen} />
      </nav>
    </header>
  );
};

export default Navbar;
