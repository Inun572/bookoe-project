const HeroSkeleton = () => {
  return (
    <div className="w-full h-[550px] px-[76px] py-[66px] grid grid-cols-2 gap-8 bg-slate-100 rounded-lg px animate-pulse">
      <div className="w-full h-full flex flex-col gap-4">
        <div className="w-[100px] h-8 bg-slate-200 rounded-lg"></div>
        <div className="w-full h-14 bg-slate-200 rounded-lg"></div>
        <div className="w-full h-14 bg-slate-200 rounded-lg"></div>
        <div className="w-1/2 h-8 bg-slate-200 rounded-lg"></div>
        <div className="w-full h-8 mt-4 bg-slate-200 rounded-lg"></div>
        <div className="w-3/4 h-8 mb-4 bg-slate-200 rounded-lg"></div>
        <div className="w-full mt-8 flex gap-8 items-center">
          <div className="w-1/4 h-14 bg-slate-200 rounded-lg"></div>
          <div className="w-2/6 h-14 bg-slate-200 rounded-lg"></div>
        </div>
      </div>
      <div className="pl-16 w-full h-full flex justify-center items-center relative">
        <div className="w-[280px] h-[360px] bg-slate-200 rounded-lg absolute translate-x-[200px] scale-[80%]"></div>
        <div className="w-[280px] h-[360px] bg-slate-200 rounded-lg absolute translate-x-[100px] scale-[90%]"></div>
        <div className="w-[280px] h-[360px] bg-slate-200 rounded-lg absolute"></div>
      </div>
    </div>
  );
};

export default HeroSkeleton;
