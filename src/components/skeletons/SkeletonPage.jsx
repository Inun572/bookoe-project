import SmallCardSkeleton from './SmallCardSkeleton';

const SkeletonPage = () => {
  return (
    <div className="animate-pulse">
      <div className="w-full h-[160px] pl-[71px] py-[42px] bg-slate-100 rounded-lg mb-[67px]">
        <div className="w-[400px] h-12 bg-slate-200 mb-4 rounded-lg"></div>
      </div>
      <div className="w-full flex justify-end px-8">
        <div className="w-[60px] h-4 bg-slate-200 mb-4 rounded-lg "></div>
      </div>
      <div className="flex flex-wrap justify-evenly gap-[67px]">
        <SmallCardSkeleton />
        <SmallCardSkeleton />
        <SmallCardSkeleton />
        <SmallCardSkeleton />
        <SmallCardSkeleton />
        <SmallCardSkeleton />
        <SmallCardSkeleton />
        <SmallCardSkeleton />
        <SmallCardSkeleton />
        <SmallCardSkeleton />
        <SmallCardSkeleton />
        <SmallCardSkeleton />
      </div>
      <div className="w-full h-8 mt-8 bg-slate-200"></div>
    </div>
  );
};

export default SkeletonPage;
