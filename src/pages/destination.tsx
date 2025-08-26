import { NavLink, Outlet } from "react-router-dom";

import { destinationNav } from "@/components/features/destinations/data";
import moon from "@/assets/destination/image-moon.webp";
import Header from "@/components/features/header";

export default function Destination() {
  return (
    <section className="bg-[url(/destination-bg/background-destination-mobile.jpg)] md:bg-[url(/destination-bg/background-destination-tablet.jpg)] lg:bg-[url(/destination-bg/background-destination-desktop.jpg)] bg-no-repeat bg-center bg-cover">
      <div className="min-h-screen bg-[#131522]/35">
        <Header />

        <div className="py-6 md:py-10 lg:py-12">
          <div className="container hero-wrapper flex flex-col gap-6">
            <h3 className="text-[28px] tracking-widest text-white">
              <span className="mr-6 text-white/50 font-bold">01</span> PICK YOUR
              DESTINATION
            </h3>

            <div className="flex-1 flex flex-col lg:flex-row items-center gap-8">
              <div className="h-full w-1/2 flex justify-center border border-red-500">
                <div className="md:size-[300px] lg:size-[480px] flex items-center justify-center">
                  <img src={moon} alt="moon" className="size-full" />
                </div>
              </div>

              <div className="h-full w-full lg:w-1/2 border border-green-500">
                <div className="max-w-[514px] mx-auto lg:mx-[47px] lg:max-w-auto">
                  <ul className="flex gap-8 mb-10">
                    {destinationNav.map((link) => (
                      <li>
                        <NavLink
                          key={link.path}
                          to={link.path}
                          className="pb-3.5"
                        >
                          {link.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>

                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
