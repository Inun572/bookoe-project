import { useEffect, useState } from 'react';
import SmallCard from '../../components/SmallCard';
import CardWithTag from '../../components/CardWithTag';
import { dateFormatter } from '../../utils/formatter';

const dateTag = (dateString) => {
  return (
    <p className="text-white text-lg pl-4 pr-6 tracking-wider">
      {dateFormatter(dateString, { dateStyle: 'short' })}
    </p>
  );
};

const Index = () => {
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      'https://bookapi.cm.hmw.lol/api/books?sort=created_at&direction=desc',
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );

    const result = await response.json();
    setLatest(result.data);
  };

  if (latest.length < 1) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="text-3xl font-semibold">Loading...</div>
      </div>
    );
  }
  return (
    <div>
      <div className="w-full pl-[71px] py-[42px] bg-hero rounded-lg mb-[67px]">
        <h1 className="text-[42px] font-semibold">
          Our <span className="text-accent">Latest</span> Collection
        </h1>
      </div>
      <div className="flex flex-wrap justify-evenly gap-[67px]">
        {latest.map((book) => (
          <CardWithTag
            key={book.id}
            Card={SmallCard}
            tag={dateTag(book.created_at)}
            {...book}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
