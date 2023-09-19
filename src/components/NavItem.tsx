"use client";

import { useMouseHoverDropDown } from "@/hooks/useMouseHoverDropDown";
import { useState } from "react";

export default function NavItem({
  title,
  href,
}: {
  title: JSX.Element | string;
  href: string;
}) {
  const [isHover, setIsHover] = useState(false);

  const dropdownRef = useMouseHoverDropDown((bool: boolean) => {
    setIsHover(bool);
  });

  return (
    <div className="flex flex-col" ref={dropdownRef}>
      <a href={href}>
        <button
          className=" text-blue-700 font-semibold
             relative  focus:outline-none focus:ring-blue-300 frounded-lg text-sm  py-2.5 text-center inline-flex items-center "
          type="button"
        >
          <div className="relative py-1">
            {title}
            <span
              className={`h-[1px] absolute bottom-0 left-0 bg-blue-700 ${
                !isHover ? " w-0" : " w-full"
              }
            transition-[width]
            `}
            />
          </div>
        </button>
      </a>
    </div>
  );
}
