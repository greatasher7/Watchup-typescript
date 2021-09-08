import { useState, useEffect } from "react";
import { moviesApi, tvApi } from "../../Api";
import { IData } from "../../Global/Types";

const useGetHome = (): [IData[], IData[], IData[], string, boolean] => {
  const [popularMovies, setPopularMovies] = useState<IData[]>([]);
  const [popularShow, setPopularShow] = useState<IData[]>([]);
  const [randomMovie, setRandomMovie] = useState<IData[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const {
        data: { results: popularMovies },
      } = await moviesApi.popular();
      const {
        data: { results: popularShow },
      } = await tvApi.popular();

      setPopularMovies(popularMovies);
      setPopularShow(popularShow);

      const randomNumber = Math.round(Math.random() * 19);
      const randomId =
        popularMovies &&
        popularMovies.length > 0 &&
        popularMovies.map((movie: any) => movie.id)[randomNumber];
      const { data: randomMovie } = await moviesApi.movieDetail(randomId);
      setRandomMovie(randomMovie);
    } catch {
      setError("Can not get movies");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return [popularMovies, popularShow, randomMovie, error, loading];
};

export default useGetHome;
