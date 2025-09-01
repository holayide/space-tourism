interface ProfileProps {
  title: string;
  name: string;
  children: string;
}

export default function Profile({ title, name, children }: ProfileProps) {
  return (
    <div className="max-w-[512px] lg:max-w-none mt-6 lg:mt-0 font-bellefair text-center lg:text-left">
      <h3 className="text-lg md:text-2xl xl:text-[32px] text-white/50 uppercase tracking-normal leading-[100%]">
        {title}
      </h3>
      <h1 className="pt-4 pb-6 text-2xl md:text-[40px] xl:text-[56px] text-white uppercase tracking-normal leading-[100%]">
        {name}
      </h1>
      <p className="h-[164px] md:h-[117px] lg:h-auto text-base text-[15px] xl:text-lg text-foreground font-barlow tracking-normal leading-[180%]">
        {children}
      </p>
    </div>
  );
}
