const MovieDetails = ({ movie, onClose }) => {
  if (!movie) return null;

const summary =
  movie.summary?.replace(/<[^>]*>/g, "") ||
  "No summary available.";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      {/* Modal */}
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-slate-900 text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-xl text-white hover:bg-pink-600"
        >
          ✕
        </button>

        {/* Poster */}
        <div className="grid md:grid-cols-2">

          <div className="p-4 md:p-6">
            <img
              src={
                movie.image?.original ||
                movie.image?.medium
              }
              alt={movie.name}
              className="h-88 w-full rounded-xl object-cover md:h-140"
            />
          </div>

          {/* Details */}
          <div className="p-6 md:p-8">

            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-pink-500">
              Movie Details
            </p>

            <h2 className="text-3xl font-bold">
              {movie.name}
            </h2>

            {/* Rating & Release */}
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="rounded-full bg-yellow-500/20 px-4 py-2 text-yellow-400">
                ⭐ {movie.rating?.average || "N/A"}
              </span>

              <span className="rounded-full bg-white/10 px-4 py-2">
                📅 {movie.premiered?.slice(0, 4) || "N/A"}
              </span>
            </div>

            {/* Genres */}
            <div className="mt-5 flex flex-wrap gap-2">
              {movie.genres?.map((genre) => (
                <span
                  key={genre}
                  className="rounded-full bg-lenear-to-r from-orange-500 via-pink-500 to-violet-600 px-3 py-1 text-sm"
                >
                  {genre}
                </span>
              ))}
            </div>

            {/* Summary */}
            <div className="mt-6">
              <h3 className="mb-2 text-lg font-semibold">
                Overview
              </h3>

              <p className="leading-7 text-gray-300">
                {summary}
              </p>
            </div>

            {/* Additional Info */}
            <div className="mt-6 space-y-2 text-gray-300">
              <p>
                <span className="font-semibold text-white">
                  Language:
                </span>{" "}
                {movie.language || "N/A"}
              </p>

              <p>
                <span className="font-semibold text-white">
                  Status:
                </span>{" "}
                {movie.status || "N/A"}
              </p>

              <p>
                <span className="font-semibold text-white">
                  Runtime:
                </span>{" "}
                {movie.runtime || "N/A"} min
              </p>

              <p>
                <span className="font-semibold text-white">
                  Network:
                </span>{" "}
                {movie.network?.name || "N/A"}
              </p>
            </div>

            {/* Close */}
            <button
              onClick={onClose}
              className="mt-8 rounded-full btn btn-secondary px-6 py-3 font-semibold text-white"
            >
              ✕ Close
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;