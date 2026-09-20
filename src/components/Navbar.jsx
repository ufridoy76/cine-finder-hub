import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="container mx-auto">
      <div className="navbar bg-base-100 shadow-sm">
        {/* Left */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content z-1 mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/movies">Movies</Link>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="btn btn-ghost text-xl">
            Cine Finder
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end">
          <Link
            to="/movies"
            className="btn btn-primary text-white border-none"
          >
            Explore Movies
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;