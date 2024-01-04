import { useState, useEffect } from 'react';
import BigCard from '../../components/BigCard';
import SmallCard from '../../components/SmallCard';

const Booklists = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const page = Math.floor(Math.random() * 100);
    const response = await fetch(
      `https://bookapi.cm.hmw.lol/api/books?page=${page}`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );
    const results = await response.json();
    setBooks(results.data);
  };

  if (books.length < 1) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="text-3xl font-semibold">Loading...</div>
      </div>
    );
  }

  return (
    <div className="w-full my-[33px]">
      <div className="w-full flex flex-wrap justify-between gap-x-[144px] gap-y-[92px] mb-[113px]">
        {books.slice(0, 4).map((book) => {
          return (
            <BigCard
              key={book.id}
              title={book.title}
              author={book.author.name}
              description={book.synopsis}
              rating={book.rating}
              cover={book.image_url}
              id={book.id}
            />
          );
        })}
      </div>
      <div className="w-full flex flex-wrap justify-evenly gap-x-[67px] gap-y-[33px]">
        {books.slice(5).map((book) => {
          return <SmallCard key={book.id} {...book} />;
        })}
      </div>
    </div>
  );
};

export default Booklists;
