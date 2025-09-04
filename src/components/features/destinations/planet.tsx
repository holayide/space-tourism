interface PlanetProps {
  name: string;
  distance: string;
  time: string;
  children: string;
}

export default function Planet({
  name,
  distance,
  time,
  children,
}: PlanetProps) {
  return (
    <div className="text-center lg:text-start">
      <h1 className="text-[80px] lg:text-8xl text-white font-bellefair uppercase">
        {name}
      </h1>
      <p className="mt-4 text-base lg:text-lg font-barlow leading-[180%]">
        {children}
      </p>
      <hr className="my-10 text-white/25" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 uppercase">
        <div className="flex flex-col gap-3">
          <p className="text-sm tracking-widest">Avg. distance</p>
          <h3 className="text-[28px] font-bellefair text-white">{distance}</h3>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-sm tracking-widest">Est. travel time</p>
          <h3 className="text-[28px] font-bellefair text-white">{time}</h3>
        </div>
      </div>
    </div>
  );
}
