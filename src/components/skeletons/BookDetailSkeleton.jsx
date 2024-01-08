const BookDetailSkeleton = () => {
  return (
    <div className="w-full flex justify-between gap-[76px] p-4 bg-slate-100 animate-pulse">
      <div className="w-[408px] h-[587px] rounded-lg bg-slate-200"></div>
      <div className="w-full flex flex-col items-start">
        <h1 className="mb-4 w-full h-[62px] bg-slate-200 rounded-lg"></h1>
        <h1 className="mb-4 w-full h-[62px] bg-slate-200 rounded-lg"></h1>
        <h1 className="mb-4 w-3/4 h-[62px] bg-slate-200 rounded-lg"></h1>
        <p className="mb-4 w-1/2 h-9 bg-slate-200 rounded-lg"></p>
        <div className="mb-8 flex items-center gap-4">
          <div className="w-[55px] h-[55px] rounded-full text-white bg-slate-200 flex justify-center items-center"></div>
          <div className="w-[300px] h-8 bg-slate-200 rounded-lg"></div>
        </div>
        <p className="mb-4 w-full h-9 bg-slate-200 rounded-lg"></p>
        <p className="mb-4 w-full h-9 bg-slate-200 rounded-lg"></p>
        <p className="mb-4 w-3/4 h-9 bg-slate-200 rounded-lg"></p>
        <p className="mt-8 w-1/4 h-4 bg-slate-200 rounded-lg"></p>
      </div>
    </div>
  );
};

export default BookDetailSkeleton;
