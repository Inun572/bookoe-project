import { useEffect, useState } from 'react';
import SmallCard from '../../components/SmallCard';
import CardWithTag from '../../components/CardWithTag';

const ratingTag = (tag) => {
  return (
    <div className="w-[30px] h-[30px] bg-white rounded-full flex justify-center items-center">
      <p className="text-accent text-xl">{tag}</p>
    </div>
  );
};

const Index = () => {
  const [recomendation, setRecomendation] = useState([]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      'https://bookapi.cm.hmw.lol/api/books?is_top_pick=true',
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );

    const result = await response.json();
    const topPicks = result?.data.sort((a, b) => b.rating - a.rating);
    setRecomendation(topPicks);
  };

  if (recomendation.length < 1) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="text-3xl font-semibold">Loading...</div>
      </div>
    );
  }
  return (
    <>
      <div className="w-full pl-[71px] py-[42px] bg-hero rounded-lg mb-[67px]">
        <h1 className="text-[42px] font-semibold">
          <span className="text-accent">Top</span> Picks Collection
        </h1>
      </div>
      <div className="flex flex-wrap justify-evenly gap-[67px]">
        {recomendation.map((book, index) => (
          // <SmallCard key={book.id} {...book} />
          <CardWithTag
            key={book.id}
            Card={SmallCard}
            tag={ratingTag(index + 1)}
            {...book}
          />
        ))}
      </div>
    </>
  );
};

export default Index;
