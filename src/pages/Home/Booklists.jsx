// import { useState, useEffect } from 'react';
import BigCard from '../../components/BigCard';
import SmallCard from '../../components/SmallCard';
import useGetData from '../../hooks/useGetData';

const BASE_URL_API_BOOKS = 'https://bookapi.cm.hmw.lol/api/books';
const totalPage = 100;

const Booklists = () => {
  const page = Math.ceil(Math.random() * totalPage);

  const { data, error, isLoading } = useGetData(
    `${BASE_URL_API_BOOKS}?page=${page}`
  );

  if (error) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="text-3xl font-semibold">{error.message}</div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="text-3xl font-semibold">Loading...</div>
      </div>
    );
  }

  const heroBooks = data?.data.slice(0, 4);
  const books = data?.data.slice(4);

  return (
    <div className="w-full my-[33px]">
      <div className="w-full flex flex-wrap justify-between gap-x-[144px] gap-y-[92px] mb-[113px]">
        {heroBooks.map((book) => {
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
        {books.map((book) => {
          return <SmallCard key={book.id} {...book} />;
        })}
      </div>
    </div>
  );
};

export default Booklists;
