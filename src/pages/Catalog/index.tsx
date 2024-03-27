import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { MovieCard } from "../../components/MovieCard";
import { Loader } from "../../components/Loader";
import { SearchBar } from "../../components/SearchBar";

import { FilmContainer, FilmGrid } from "./styles";

type FilmProps = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export function Catalog() {
  const [films, setFilms] = useState<FilmProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams({
    "search-query": "",
  });

  const query = searchParams.get("search-query");

  const fetchFilms = async () => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Timeout para que o loading possa ser visualizado
      const response = await fetch("http://localhost:3001/products", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data) setFilms(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredFilm = films.filter((item) => {
    const title = item.title.toLowerCase();
    const search = String(query).toLowerCase();

    return title.includes(search) ? item : null;
  });

  useEffect(() => {
    fetchFilms();
  }, []);

  return (
    <>
      <SearchBar />
      {loading ? (
        <Loader />
      ) : (
        <>
          {query !== "" ? (
            <FilmContainer>
              {filteredFilm.map((film) => (
                <MovieCard {...film} />
              ))}
            </FilmContainer>
          ) : (
            <FilmGrid>
              {films.map((film) => (
                <MovieCard {...film} />
              ))}
            </FilmGrid>
          )}
        </>
      )}
    </>
  );
}
