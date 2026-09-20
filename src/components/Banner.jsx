import { Link } from "react-router";
import hero from "./../assets/hero.jpg"
const Banner = () => {
  return (
    <section className="relative min-h-150 overflow-hidden  rounded-2xl">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center rounded-2xl"
        style={{
          backgroundImage: "url('https://i.ibb.co.com/sJPVcngj/v-CX-PBr-Hsv1-Gs-Gr-TCZJIwz3u4kt-V8oef-KHf-Za6-MVNRkn-FAt-Ag-Dqb-GVkz8-Mg-JIo-OVk0s-Xz-WOry-OPFTFp-g-TE.jpg')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto lg:flex min-h-150 max-w-7xl space-y-8 items-center px-10 my-10">
        <div className="max-w-2xl text-white">
          <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-blue-600">
            Welcome to MovieExplorer
          </p>

          <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
            Discover Your
            <span className="block">
              Next Favorite Movie
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-300 md:text-xl">
            Explore amazing movies and TV shows, discover new stories, and find
            something worth watching.
          </p>

          <div className="mt-8">
            <Link
              href="/movies"
              className="inline-flex btn btn-primary items-center rounded-full bg-lenear-to-r from-orange-500 via-pink-500 to-violet-600 px-7 py-3 font-semibold text-white shadow-lg transition hover:scale-105"
            >
              Explore Movies
            </Link>
          </div>
        </div>
        <div className="w-90 ">
           <img className="w-full rounded-2xl" src={hero} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
