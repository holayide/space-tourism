export default function Space({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="font-bellefair mx-6 md:mx-10 lg:mx-0">
      <h3 className="mb-4 text-lg md:text-2xl xl:text-[32px] text-white/50 uppercase leading-[100%">
        The terminology...
      </h3>
      <h2 className="text-2xl md:text-[40px] xl:text-[56px] text-white uppercase font-normal">
        {name}
      </h2>
      <p className="mt-4 text-[15px] md:text-base xl:text-lg font-barlow  leading-[180%]">
        {description}
      </p>
    </div>
  );
}
