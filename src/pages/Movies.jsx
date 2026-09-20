import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import MovieDetails from "../components/MovieDetails";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Fetch all shows
  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching shows:", error);
        setLoading(false);
      });
  }, []);

  // Search
  const handleSearch = async (e) => {
    e.preventDefault();

    const query = search.trim();
    if (!query) {
      setLoading(true);

      const res = await fetch("https://api.tvmaze.com/shows");
      const data = await res.json();

      setMovies(data);
      setLoading(false);

      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);

      const data = await res.json();


      const results = data.map((item) => item.show);

      setMovies(results);
    } catch (error) {
      console.error("Search error:", error);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDetails = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 py-10">
      {/* Page Header */}
      <div className="mb-8 text-center">
        <p className="mb-2 font-semibold uppercase tracking-[0.3em] text-pink-500">
          Movie Explorer
        </p>

        <h1 className="text-4xl font-extrabold md:text-5xl">Explore Movies</h1>

        <p className="mx-auto mt-3 max-w-2xl text-gray-500">
          Discover amazing movies and TV shows from around the world.
        </p>
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="mx-auto mb-12 max-w-3xl">
        <div className="flex items-center overflow-hidden rounded-full border border-gray-200 bg-white shadow-lg">
          <span className="pl-5 text-xl">🔍</span>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a movie..."
            className="w-full px-4 py-4 outline-none"
          />

          <button
            type="submit"
            className="mr-1 rounded-full bg-lenear-to-r from-orange-500 via-pink-500 to-violet-600 px-6 py-3 font-semibold text-white"
          >
            Search
          </button>
        </div>
      </form>

      {/* Loading */}
      {loading && (
        <div className="flex justify-center py-20">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}

      {/* No Results */}
      {!loading && movies.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-xl font-semibold">😕 No movies found</p>

          <p className="mt-2 text-gray-500">
            Try searching with another title.
          </p>
        </div>
      )}

      {/* Movie Grid */}
      {!loading && movies.length > 0 && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onDetails={handleDetails} />
          ))}
        </div>
      )}
      {selectedMovie && (
        <MovieDetails
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </main>
  );
};

export default Movies;
