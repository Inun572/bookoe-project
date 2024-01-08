const BigCardSkeleton = () => {
  return (
    <div className="w-[564px] h-[346px] grid grid-cols-2 gap-4 bg-slate-100 p-4 rounded-lg">
      <div className="h-full w-full rounded-lg bg-slate-200"></div>
      <div className="flex flex-col justify-start">
        <h1 className="h-[30px] w-full mb-2 rounded-lg bg-slate-200"></h1>
        <h1 className="h-[30px] w-full mb-2 rounded-lg bg-slate-200"></h1>
        <p className="mb-4 h-[20px] w-1/2 rounded-lg bg-slate-200"></p>
        <div className="h-[40px] mb-4 w-full rounded-lg bg-slate-200"></div>
        <p className="mb-4 h-[20px] w-full rounded-lg bg-slate-200"></p>
        <p className="mb-4 h-[20px] w-3/4 rounded-lg bg-slate-200"></p>
        <p className="mb-4 h-[20px] w-3/4 rounded-lg bg-slate-200"></p>
        <div className="h-[40px] w-full rounded-lg bg-slate-200"></div>
      </div>
    </div>
  );
};

export default BigCardSkeleton;
