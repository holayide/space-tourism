import Header from "@/components/features/header";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="min-h-screen bg-[url(/home/background-home-mobile.jpg)] md:bg-[url(/home/background-home-tablet.jpg)] lg:bg-[url(/home/background-home-desktop.jpg)]  bg-no-repeat bg-center bg-cover">
      <Header />

      <div className="py-6 md:py-32">
        <div className="container min-h-[calc(100dvh-136px)] md:min-h-[calc(100vh-356px)] lg:min-h-[calc(100vh-392px)] flex flex-col lg:flex-row items-end lg:justify-between gap-0 md:gap-[66px] lg:gap-0">
          <div className="w-full lg:w-[540px] text-center lg:text-left">
            <div className="md:max-w-[512px] lg:max-w-[540px] w-full mx-auto lg:mx-0">
              <h3 className="text-base md:text-[28px] tracking-widest">
                SO, YOU WANT TO TRAVEL TO
              </h3>
              <h1 className="my-6 text-[80px] md:text-[144px] text-white font-bellefair leading-[100%] tracking-normal">
                SPACE
              </h1>
              <p className="text-[15px] md:text-base lg:text-lg font-barlow leading-[180%] tracking-wider md:tracking-normal">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </div>
          </div>

          <div className="w-full flex-1 h-full flex justify-center items-center lg:items-start lg:justify-end">
            <Link
              to="/destination"
              className="relative size-36 md:size-[272px] flex items-center justify-center rounded-full bg-white lg:mb-9
              hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:scale-[135%] hover:before:rounded-full hover:before:bg-white/10
              "
            >
              <span className="text-lg md:text-[32px] text-primary font-bellefair leading-[100%] tracking-normal">
                EXPLORE
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
