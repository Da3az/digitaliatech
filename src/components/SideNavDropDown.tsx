"use client";

import { useMouseHoverDropDown } from "@/hooks/useMouseHoverDropDown";
import { useOutsideDropDown } from "@/hooks/useOutsideDropDown";
import { useState } from "react";
import Collapsible from "./Collapsible";

const SideNavDropDownItem = ({
  title,
  href,
}: {
  title: string;
  href: string;
}) => (
  <li>
    <a
      href={href}
      className="block text-left px-4 py-2 hover:opacity-60 transition-opacity text-blue-700 "
    >
      {title}
    </a>
  </li>
);

export default function SideNavDropDown({
  title,
  items,
}: {
  title: string;
  items: { title: string; href: string }[];
}) {
  return (
    <div className="flex flex-col ">
      <Collapsible
        TopComponent={({isOpen}) => (
          <button
            className=" text-blue-700 font-semibold
         relative focus:outline-none focus:ring-blue-300 frounded-lg text-sm  py-2.5 text-center inline-flex items-center "
            type="button"
          >
            <div className="relative py-1">{title} </div>
            <svg
              className={`w-2.5 h-2.5 ml-2.5 ${isOpen ? 'rotate-180' : 'rotate-0'} transition `}
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
          </button>
        )}
        BottomComponent={() => (
          <ul className=" w-full text-sm flex flex-col ">
            {items.map((el, index) => (
              <SideNavDropDownItem {...el} key={index} />
            ))}
          </ul>
        )}
      />
    </div>
  );
}
