import ProfileImage from "@/components/features/crews/profile-img";
import { profileNav } from "@/components/features/data";
import Header from "@/components/features/header";
import { NavLink, Outlet } from "react-router-dom";

export default function Crew() {
  return (
    <section
      className="bg-[url(/crew-bg/background-crew-mobile.jpg)] md:bg-[url(/crew-bg/background-crew-tablet.jpg)] 
        lg:bg-[url(/crew-bg/background-crew-desktop.jpg)] bg-no-repeat bg-center bg-cover"
    >
      <Header />

      {/* hero-wrapper  */}
      <div className="py-6 md:mt- md:pb-0 lg:py-12">
        <div className="container hero-container flex flex-col gap-6 hero-wrapper">
          <h3 className="text-xl lg:text-[28px] text-center md:text-start tracking-widest text-white">
            <span className="mr-6 text-white/50 font-bold">02</span> MEET YOUR
            CREW
          </h3>

          <div className="flex-1 flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="w-full flex flex-col gap-6 lg:gap-10">
                <div className="flex-1 flex items-center justify-center">
                  <Outlet />
                </div>

                <ul className="h-16 flex gap-4 lg:gap-10 pb-12 justify-center lg:justify-start">
                  {profileNav.map((link) => (
                    <li className="crew-list" key={link.path}>
                      <NavLink
                        key={link.path}
                        to={link.path}
                        className="pb-3.5"
                      >
                        <span className="size-2.5 lg:size-[15px] block bg-white/50 rounded-full"></span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full relative lg:py-[29px] lg:w-1/2 flex flex-col justify-center">
              <ProfileImage />

              <div
                className="absolute block md:hidden lg:block bottom-0 left-0 w-full h-6 lg:h-40
             bg-gradient-to-b from-transparent via-[#0b0e17]/93 to-[#0b0e17]"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
