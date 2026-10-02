import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 px-4 shadow-lg">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-1">📝 QuickNotes</h1>
        <p className="text-indigo-200 text-sm mb-4">Your personal note-taking companion</p>
        <nav className="flex gap-4">
          <Link
            to="/"
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              location.pathname === '/'
                ? 'bg-white text-indigo-700'
                : 'bg-indigo-500/50 hover:bg-indigo-500 text-white'
            }`}
          >
            Home
          </Link>
          <Link
            to="/about.html"
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              location.pathname === '/about.html' || location.pathname === '/about'
                ? 'bg-white text-indigo-700'
                : 'bg-indigo-500/50 hover:bg-indigo-500 text-white'
            }`}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
