import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Star from '../../components/common/Star';
import { dateFormatter } from '../../utils/formatter';

const BookDetails = () => {
  const bookId = useParams().bookId;
  const [book, setBook] = useState({});

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      `https://bookapi.cm.hmw.lol/api/books/${bookId}`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );
    const result = await response.json();
    setBook(result);
  };

  if (!book) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="text-3xl font-semibold">Loading...</div>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-between gap-[76px]">
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
    </div>
  );
};

export default BookDetails;
