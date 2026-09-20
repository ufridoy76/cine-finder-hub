
const Footer = () => {
  return (
    <footer className="mt-16 bg-slate-950 px-6 py-8 text-white">
      <div className="mx-auto max-w-7xl text-center">
        {/* Application Name */}
        <h2 className="text-2xl font-bold">
          Cine Finder
        </h2>

        {/* Copyright */}
        <p className="mt-2 text-sm text-gray-400">
          © 2026 Cine Finder. All rights reserved.
        </p>

        {/* GitHub Link */}
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-gray-400 transition hover:text-pink-500"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;

