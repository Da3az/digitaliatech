import Image from "next/image";
import DarkModeToggle from "./DarkModeToggle";
import DropDown from "./DropDown";
import NavItem from "./NavItem";
import SideNav from "./SideNav";

export default function Nav() {
  return (
    <div className="flex gap-4  w-full">
      <div className=" hidden xl:flex gap-16 mx-auto [&>*]:mx-auto ">
        <SideNav />
        <DropDown
          title="Categories"
          items={[
            { title: "Headphones", href: "#" },
            { title: "Keyboards", href: "#" },
            { title: "Mouses", href: "#" },
          ]}
        />
        <NavItem title="All Products" href="#" />
        <NavItem title="Blog" href="#" />
      </div>
      <div className="flex flex-1 xl:justify-center justify-start  items-center mx-auto ">
        <a href="/">
          <Image
            src="/static/logo.svg" // Route of the image file
            height={696} // Desired size with correct aspect ratio
            width={200} // Desired size with correct aspect ratio
            alt="Your Name"
          />
        </a>
      </div>
      <div className="flex flex-1 justify-end [&>*]:mx-4  ">
        <DarkModeToggle />
        {/* <NavItem title="My Account" href="#" /> */}
        <NavItem
          title={
            <span className="flex items-center gap-2">
              Cart
              <svg
                className="h-4 w-4 text-blue-700"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />{" "}
                <line x1="3" y1="6" x2="21" y2="6" />{" "}
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </span>
          }
          href="#"
        />
      </div>
    </div>
  );
}
