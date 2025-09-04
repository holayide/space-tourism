import { useState } from "react";

import menu from "@/assets/shared/icon-hamburger.svg";
import close from "@/assets/shared/icon-close.svg";
import logo from "@/assets/shared/logo.svg";
import NavItem from "../navItems";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="h-[88px] md:h-24 lg:h-[136px] lg:pt-10 flex items-center justify-center text-base">
      <nav className="max-w-[1440px] w-full mx-auto px-6 md:px-10 lg:px-16 relative z-20 h-full flex items-center justify-between gap-28">
        <div className="md:w-[640px] lg:w-[732px] h-24 absolute hidden md:block -z-10 right-0 bg-white/5 backdrop-blur-3xl"></div>
        <div className="lg:max-w-[672px] w-full flex items-center gap-6 xl:gap-16">
          <div className="w-[48px]">
            <img src={logo} alt="logo" />
          </div>
          <hr className="flex-1 hidden lg:block border border-white/25" />
        </div>

        {/* desktop */}
        <div className="hidden md:block">
          <NavItem />
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="w-12 flex items-center justify-center md:hidden cursor-pointer"
        >
          <img src={menu} alt="open" className="size-6" />
        </button>

        {/* mobile */}
        <div
          className={`fixed top-0 right-0 h-dvh w-3/4 max-w-sm bg-primary/15 backdrop-blur-2xl pb-6 transform transition-transform duration-300 md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex mb-8 ml-8 mr-0.5">
            <button className="w-full" onClick={() => setIsOpen(false)}>
              <div className="flex justify-end px-6 py-8">
                <img
                  src={close}
                  alt="close menu"
                  className="size-6 cursor-pointer"
                />
              </div>

              <div className="mt-12">
                <NavItem />
              </div>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
