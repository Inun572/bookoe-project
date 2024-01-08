import BigCardSkeleton from './BigCardSkeleton';
import SmallCardSkeleton from './SmallCardSkeleton';

const BooklistSkeleton = () => {
  return (
    <section className="w-full my-[33px] animate-pulse">
      <div className="w-full flex flex-wrap justify-between gap-x-[144px] gap-y-[92px] mb-[113px]">
        <BigCardSkeleton />
        <BigCardSkeleton />
        <BigCardSkeleton />
        <BigCardSkeleton />
      </div>
      <div className="w-full flex flex-wrap justify-evenly gap-x-[67px] gap-y-[33px]">
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
    </section>
  );
};

export default BooklistSkeleton;
