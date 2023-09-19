"use client";

import { useMouseHoverDropDown } from "@/hooks/useMouseHoverDropDown";
import { useOutsideDropDown } from "@/hooks/useOutsideDropDown";
import { useState } from "react";

const DropDownItem = ({ title, href }: { title: string; href: string }) => (
  <li>
    <a
      href={href}
      className="block text-left px-4 py-2 border-b hover:opacity-60 transition-opacity text-blue-700 "
    >
      {title}
    </a>
  </li>
);

export default function DropDown({
  title,
  items,
}: {
  title: string;
  items: { title: string; href: string }[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  const [isHover, setIsHover] = useState(false);

  const dropdownRef = useMouseHoverDropDown((bool: boolean) => {
    setIsOpen(bool);
    setIsHover(bool);
  });

  const dropDownContainerRef = useOutsideDropDown((bool: boolean) => {
    setIsOpen(bool);
    setIsHover(bool);
  });

  return (
    <div ref={dropDownContainerRef} className="flex flex-col">
      <button
        ref={dropdownRef as any}
        className=" text-blue-700 font-semibold
         relative focus:outline-none focus:ring-blue-300 frounded-lg text-sm  py-2.5 text-center inline-flex items-center "
        type="button"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <div className="relative py-1">
          {title}{" "}
          <span
            className={`h-[1px] absolute bottom-0 left-0 bg-blue-700 ${
              !isHover ? " w-0" : " w-full"
            }
             transition-[width]
             `}
          />
        </div>
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
        <div
          id="dropdown"
          className={` z-10  ${
            !isOpen ? "-top-[100vh] opacity-0 " : "top-full opacity-100"
          } absolute  left-0 bg-white divide-y divide-gray-100 transition-opacity duration-300 rounded-lg shadow w-44 `}
        >
          <ul className="text-sm text-gray-700 border rounded-lg ">
            {items.map((el, index) => (
              <DropDownItem {...el} key={index} />
            ))}
          </ul>
        </div>
      </button>
    </div>
  );
}
