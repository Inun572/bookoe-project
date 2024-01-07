import { useState } from 'react';
import SmallCard from '../../components/SmallCard';
import CardWithTag from '../../components/CardWithTag';
import useGetData from '../../hooks/useGetData';

const ratingTag = (tag) => {
  return (
    <div className="w-[30px] h-[30px] bg-white rounded-full flex justify-center items-center">
      <p className="text-accent text-xl">{tag}</p>
    </div>
  );
};

const Index = () => {
  const [url, setUrl] = useState(
    'https://bookapi.cm.hmw.lol/api/books?is_top_pick=true&sort=rating&direction=desc&page=1'
  );

  const { data, error, isLoading } = useGetData(url);

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

  const recomendation = data.data;
  const totalPage = data.meta.last_page;
  const currentPage = data.meta.current_page;
  const pages = data.links;

  const onChangePage = (url) => {
    setUrl(url);
  };

  return (
    <>
      <div className="w-full pl-[71px] py-[42px] bg-hero rounded-lg mb-[67px]">
        <h1 className="text-[42px] font-semibold">
          <span className="text-accent">Top</span> Picks Collection
        </h1>
      </div>
      <div className="w-full p-2 text-right ">
        <p className="px-4 text-lg">
          {currentPage} / {totalPage}
        </p>
      </div>
      <div className="flex flex-wrap justify-evenly gap-[67px]">
        {recomendation.map((book, index) => (
          <CardWithTag
            key={book.id}
            Card={SmallCard}
            tag={ratingTag(index + 1)}
            {...book}
          />
        ))}
      </div>
      <div className="w-full mt-4 border-t-2">
        <div className="flex p-8 justify-center items-center gap-8">
          {pages?.map((page) => {
            if (page.url) {
              return (
                <button
                  onClick={() => onChangePage(page.url)}
                  key={page.label}
                  disabled={page.active}
                  className={`${page.active ? 'text-accent' : ''}
                  text-lg
                  `}
                  dangerouslySetInnerHTML={{ __html: page.label }}
                ></button>
              );
            }
            return (
              <button
                onClick={() => onChangePage(page.url)}
                key={page.label}
                disabled={!page.active}
                className={`${page.active ? 'text-accent' : ''}
                text-lg disabled:text-light-gray
                `}
                dangerouslySetInnerHTML={{ __html: page.label }}
              ></button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Index;
