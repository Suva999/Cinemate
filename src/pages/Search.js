import { useSearchParams } from "react-router-dom";
import { Card } from "../components";
import { useTitle } from "../hooks/useTitle";
import { useEffect,useState } from "react";
export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useTitle(`Search result for ${queryTerm}`);

  useEffect(() => {
      async function fetchMovies() {
      setLoading(true);
     const url=`https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&query=${queryTerm}`;
     const response= await fetch(url);
          const json= await response.json();
          setMovies(json.results);
      setLoading(false);
    }
    fetchMovies();
  }, [apiPath,queryTerm])
  return (
     <main>
      <section className="py-7">
        <p className="text-3xl text-gray-800 dark:text-white">{loading
            ? "Loading..."
            : movies.length === 0
            ? `No Result found for ${queryTerm}`
            : `Results for "${queryTerm}"`}
        </p>
      </section>
     {!loading &&(<section className="max-w-7xl mx-auto py-7">
       <div className="flex justify-start flex-wrap">
        {movies.map((movie)=>(
          <Card key={movie.id} movie={movie}/>
        ))}
       </div>
     </section>
     )}
    </main>
  )
 }
