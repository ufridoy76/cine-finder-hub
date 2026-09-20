const MovieCard = ({ movie, onDetails }) => {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-900">
      {/* Poster */}
      <div className="overflow-hidden">
        <img
          src={
            movie.image?.medium
          }
          alt={movie.name}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="truncate text-xl text-white font-bold">{movie.name}</h2>

        <div className="mt-2 flex items-center justify-between text-sm text-gray-500">
          <span>⭐ {movie.rating?.average || "N/A"}</span>

          <span>📅 {movie.premiered?.slice(0, 4) || "N/A"}</span>
        </div>

        <button
          onClick={() => onDetails(movie)}
          className="mt-10 w-full rounded-full btn btn-primary px-4 py-2 font-semibold text-white transition hover:scale-[1.02]"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
