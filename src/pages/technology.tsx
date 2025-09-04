import Header from "@/components/features/header";
import { NavLink, Outlet } from "react-router-dom";
import { technologyNav } from "@/components/features/data";

import SpaceImages from "@/components/features/technology/space-img";

export default function Technology() {
  return (
    <section className="min-h-screen bg-[url(/technology-bg/background-technology-mobile.jpg)] md:bg-[url(/technology-bg/background-technology-tablet.jpg)] lg:bg-[url(/technology-bg/background-technology-desktop.jpg)] bg-no-repeat bg-center bg-cover">
      <Header />

      <div className="max-w-[1440px] m-auto py-6 md:py-10 lg:py-12">
        <div className="container-right hero-container flex flex-col gap-6 hero-wrapper">
          <h3 className="md:pl-10 lg:pl-auto text-xl lg:text-[28px] text-center md:text-start tracking-widest text-white">
            <span className="mr-6 text-white/50 font-bold">03</span> SPACE
            LAUNCH 101
          </h3>

          <div className="flex-1 flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1 ">
              <div className="max-w-[512px] lg:max-w-none w-full lg:flex items-center justify-center gap-16">
                <ul className="flex lg:flex-col gap-8 mb-10 lg:mb-0 items-center justify-center lg:justify-start">
                  {technologyNav.map((link, i) => (
                    <li className="technology-lists" key={link.path}>
                      <NavLink
                        key={link.path}
                        to={link.path}
                        className="size-10 md:size-14 lg:size-20 border border-white/25 flex items-center justify-center rounded-full"
                      >
                        <span className="text-lg md:text-2xl lg:text-[32px]">
                          {i + 1}
                        </span>
                      </NavLink>
                    </li>
                  ))}
                </ul>

                <div className="flex-1 flex items-center justify-center text-center lg:text-left">
                  <Outlet />
                </div>
              </div>
            </div>

            {/*  */}
            <div className="lg:w-1/2 h-[238px] md:h-auto mt-9 md:mt-7 lg:mt-0 flex flex-col justify-center order-1 lg:order-2">
              <SpaceImages />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
