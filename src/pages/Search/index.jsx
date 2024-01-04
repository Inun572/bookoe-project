import { useEffect, useState } from 'react';
import SmallCard from '../../components/SmallCard';
import { useParams } from 'react-router-dom';

const Index = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [status, setStatus] = useState('idle');
  const [total, setTotal] = useState(0);
  const keyword = useParams().keyword;

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  const fetchData = async () => {
    setStatus('loading');
    const response = await fetch(
      `https://bookapi.cm.hmw.lol/api/books?search=${keyword}`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );

    const result = await response.json();
    setStatus('success');
    setSearchResult(result.data);
    setTotal(result.meta.total);
  };

  if (status === 'loading') {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="text-3xl font-semibold">Loading...</div>
      </div>
    );
  }
  if (status === 'success' && searchResult.length < 1) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="text-3xl font-semibold">Book Not Found!</div>
      </div>
    );
  }
  return (
    <div>
      <div className="w-full pl-[71px] py-[42px] bg-hero rounded-lg mb-[67px]">
        <h1 className="text-[42px] font-semibold">
          <span className="text-accent">Search For</span> {keyword}{' '}
          {total && `(${total} results)`}
        </h1>
      </div>
      <div className="flex flex-wrap justify-evenly gap-[67px]">
        {searchResult.map((book) => (
          <SmallCard key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
};

export default Index;
