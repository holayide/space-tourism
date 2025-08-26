export default function DestinationMoon() {
  return (
    <div className="text-center lg:text-start">
      <h1 className="text-[80px] lg:text-8xl text-white font-bellefair uppercase">
        Moon
      </h1>
      <p className="mt-4 text-base lg:text-lg font-barlow leading-[180%]">
        See our planet as you’ve never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you’re
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites.
      </p>
      <hr className="my-10 text-white/25" />

      <div className="grid grid-cols-2 gap-6 uppercase">
        <div className="flex flex-col gap-3">
          <p className="text-sm tracking-widest">Avg. distance</p>
          <h3 className="text-[28px] font-bellefair text-white">384,400 km</h3>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-sm tracking-widest">Est. travel time</p>
          <h3 className="text-[28px] font-bellefair text-white">3 days</h3>
        </div>
      </div>
    </div>
  );
}
