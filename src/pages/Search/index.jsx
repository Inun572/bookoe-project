import SmallCard from '../../components/SmallCard';
import { useParams } from 'react-router-dom';
import useGetData from '../../hooks/useGetData';
import SkeletonPage from '../../components/skeletons/SkeletonPage';

const BASE_URL_API_BOOKS = 'https://bookapi.cm.hmw.lol/api/books';

const Index = () => {
  const keyword = useParams().keyword;

  const {
    data: books,
    error,
    isLoading,
  } = useGetData(`${BASE_URL_API_BOOKS}?search=${keyword}`);

  if (error) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="text-3xl font-semibold">{error.message}</div>
      </div>
    );
  }

  if (isLoading) {
    return <SkeletonPage />;
  }

  const searchResult = books.data;
  const total = books.meta.total;

  if (searchResult?.length < 1) {
    return (
      <div className="w-full min-h-[600px] flex justify-center items-center border border-accent rounded-lg">
        <div className="text-5xl text-accent font-semibold">
          Book Not Found!
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="w-full pl-[71px] py-[42px] bg-hero rounded-lg mb-[67px]">
        <h1 className="text-[42px] font-semibold">
          <span className="text-accent">Search For</span> {keyword}
          {total && `(${total} results)`}
        </h1>
      </div>
      <div className="flex flex-wrap justify-evenly gap-[67px]">
        {searchResult?.map((book) => (
          <SmallCard key={book.id} {...book} />
        ))}
      </div>
    </>
  );
};

export default Index;
