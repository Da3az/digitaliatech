"use client";

import { ModalContext } from "@/contexts/ModalContext";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import Image from "next/image";
import { useContext, useState } from "react";
import NavItem from "./NavItem";
import SideNavDropDown from "./SideNavDropDown";
export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { setModal } = useContext(ModalContext);
  const open = () => {
    setIsOpen(true);
    setModal(true);
  };

  const close = () => {
    setIsOpen(false);
    setModal(false);
  };
  const ref = useOutsideClick(() => close());

  return (
    <div className="flex ">
      {/* Menu button , on click a side nav appear  */}
      <button onClick={open}>
        <svg
          className="h-8 w-8 text-blue-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </button>

      {/* Side nav  */}
      <div
        ref={ref}
        className={`fixed ${
          isOpen ? "left-0" : "-left-[100%]"
        } transition-[left] inset-0 z-10 flex flex-col items-center justify-start w-64 h-full bg-white transform   duration-300 ease-in-out`}
      >
        {/* Close button  */}
        <button
          onClick={close}
          className="  mb-10 hover:rotate-180 items-center justify-center mr-auto transition top-0 flex  w-12 h-12 mt-4  text-blue-700 rounded-full  focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-blue-700 fill-current"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.2929 5.29289C18.6834 4.90237 19.3166 4.90237 19.7071 5.29289C20.0976 5.68342 20.0976 6.31658 19.7071 6.70711L13.4142 13L19.7071 19.2929C20.0976 19.6834 20.0976 20.3166 19.7071 20.7071C19.3166 21.0976 18.6834 21.0976 18.2929 20.7071L12 14.4142L5.70711 20.7071C5.31658 21.0976 4.68342 21.0976 4.29289 20.7071C3.90237 20.3166 3.90237 19.6834 4.29289 19.2929L10.5858 13L4.29289 6.70711C3.90237 6.31658 3.90237 5.68342 4.29289 5.29289C4.68342 4.90237 5.31658 4.90237 5.70711 5.29289L12 11.5858L18.2929 5.29289Z"
            />
          </svg>
        </button>

        {/* Side nav content  */}
        <div className="flex flex-col items-center">
          <div className="flex  items-center mx-auto [&>*]:mx-auto ">
            <a href="/">
              <Image
                src="/static/logo.svg" // Route of the image file
                height={696} // Desired size with correct aspect ratio
                width={200} // Desired size with correct aspect ratio
                alt="Your Name"
              />
            </a>
          </div>
          <nav className="flex flex-col  w-full mt-10 text-blue-700">
            <SideNavDropDown
              title="Categories"
              items={[
                { title: "Headphones", href: "#" },
                { title: "Keyboards", href: "#" },
                { title: "Mouses", href: "#" },
              ]}
            />
            <NavItem title="All Products" href="#" />
            <NavItem title="Blog" href="#" />
          </nav>

          <p className="mt-6 text-xs text-blue-700">
            &copy; 2023 All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
