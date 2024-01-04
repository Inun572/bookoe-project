import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Star from '../../components/common/Star';

const Hero = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const page = Math.floor(Math.random() * 50);
    const response = await fetch(
      `https://bookapi.cm.hmw.lol/api/books?is_top_pick=true&page=${page}&sort=rating&direction=desc`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );
    const results = await response.json();
    const top3 = results.data.slice(0, 3);
    setBooks(top3);
  };

  if (books.length < 1) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="text-3xl font-semibold">Loading...</div>
      </div>
    );
  }
  return (
    <div className="w-full px-[76px] py-[66px] bg-hero rounded-lg flex justify-center items-center">
      <div className="w-1/2 h-full flex flex-col items-start justify-start">
        <p className="text-xl font-semibold text-accent">MUST READ</p>
        <h1 className="text-[62px] leading-[72px] mb-4 font-semibold line-clamp-2">
          {books[0].title}
        </h1>
        <div className="flex justify-center items-center mb-8">
          <p className="font-medium max-w-[200px] truncate">
            {books[0].author.name}
          </p>
          <Star rating={books[0].rating} style={'scale-[80%]'} />
        </div>
        <p className="mb-4 line-clamp-3">{books[0].synopsis}</p>
        <div className="flex justify-center items-center gap-4">
          <Link to={`/books/${books[0].id}`}>
            <button className="flex justify-center items-center gap-4 text-white font-medium text-xl bg-accent py-[10px] px-6 rounded-lg">
              Read Book
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="15"
                  viewBox="0 0 27 15"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.8195 0.423278L26.2888 6.83375C26.7593 7.36305 26.7593 7.83355 26.23 8.30404L19.8195 14.7145C18.8197 15.2438 18.1728 15.1262 18.0552 13.5971L18.114 8.77453H1.23504C0.529305 8.77453 0 8.24523 0 7.53949C0 6.89256 0.529305 6.30444 1.23504 6.30444H18.1728V1.36426C18.2904 0.0115961 18.8197 -0.400086 19.8195 0.423278Z"
                    fill="white"
                  />
                </svg>
              </span>
            </button>
          </Link>
          <Link to="/top-picks">
            <button className="text-accent font-medium text-xl border border-accent rounded-lg py-[10px] px-9 hover:text-white hover:bg-accent">
              See Recommendation
            </button>
          </Link>
        </div>
      </div>
      <div className="w-1/2 relative flex justify-center items-center">
        <img
          src={books[2].image_url}
          alt={books[2].title}
          className="w-[280px] h-[390px] absolute rounded-lg translate-x-[200px] scale-[80%] transition-transform duration-300  hover:z-10 hover:scale-[100%] hover:translate-x-0"
        />
        <img
          src={books[1].image_url}
          alt={books[1].title}
          className="w-[280px] h-[390px] absolute rounded-lg translate-x-[100px] scale-[90%] transition-transform duration-300  hover:z-10 hover:scale-[100%] hover:translate-x-0"
        />
        <img
          src={books[0].image_url}
          alt={books[0].title}
          className="w-[280px] h-[390px] absolute rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
