import { useParams } from 'react-router-dom';
import Star from '../../components/common/Star';
import { dateFormatter } from '../../utils/formatter';
import useGetData from '../../hooks/useGetData';
import BookDetailSkeleton from '../../components/skeletons/BookDetailSkeleton';

const BASE_URL_API_BOOKS = 'https://bookapi.cm.hmw.lol/api/books';
const BookDetails = () => {
  const bookId = useParams().bookId;
  const {
    data: book,
    error,
    isLoading,
  } = useGetData(`${BASE_URL_API_BOOKS}/${bookId}`);

  if (error) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="text-3xl font-semibold">{error.message}</div>
      </div>
    );
  }

  if (isLoading) {
    return <BookDetailSkeleton />;
  }

  return (
    <section className="w-full flex justify-between gap-[76px]">
      <img
        src={book.image_url}
        alt={book.title}
        className="w-[408px] h-[587px] rounded-lg"
      />
      <div className="flex flex-col justify-between">
        <h1 className="text-[62px] font-semibold">{book.title}</h1>
        <p className="text-[36px] font-light">by {book.author?.name}</p>
        <div className="my-4 flex gap-4">
          <div className="w-[55px] h-[55px] rounded-full text-white bg-rating flex justify-center items-center">
            {book.rating?.toFixed(1)}
          </div>
          <Star rating={book.rating} />
        </div>
        <p className="text-xl">{book.synopsis}</p>
        <p className="mt-8 text-dark-gray font-light">
          First published{' '}
          {dateFormatter(book.created_at, 'en-US', { dateStyle: 'long' })}
        </p>
      </div>
    </section>
  );
};

export default BookDetails;
