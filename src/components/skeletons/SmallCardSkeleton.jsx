const SmallCardSkeleton = () => {
  return (
    <div className="flex h-[551px] w-[263px] flex-col items-center justify-between rounded-lg bg-slate-100 p-4">
      <div className="mb-[10px] h-[340px] w-full rounded-lg bg-slate-200"></div>
      <h1 className="h-[40px] w-full rounded-lg bg-slate-200"></h1>
      <p className="my-2 h-[30px] w-full rounded-lg bg-slate-200"></p>
      <div className="h-[30px] w-2/3 rounded-lg bg-slate-200"></div>
      <div className="mt-4 h-[40px] w-1/2 rounded-lg bg-slate-200"></div>
    </div>
  );
};

export default SmallCardSkeleton;
