import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to QuickNotes</h2>
          <p className="text-gray-600 leading-relaxed">
            QuickNotes is a fast, lightweight note-taking application designed to help you capture
            your ideas on the fly. Whether you're jotting down meeting notes, brainstorming ideas,
            or keeping a daily journal, QuickNotes makes it simple and efficient.
          </p>
        </section>

        <section className="mb-8 bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Why QuickNotes?</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 mt-1">✓</span>
              <span>Lightning-fast note creation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 mt-1">✓</span>
              <span>Organize with tags and folders</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 mt-1">✓</span>
              <span>Search across all your notes instantly</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 mt-1">✓</span>
              <span>Keyboard shortcuts for power users</span>
            </li>
          </ul>
        </section>

        <section className="bg-indigo-50 rounded-lg p-6 border border-indigo-100">
          <h3 className="text-xl font-semibold text-indigo-800 mb-3">Get Started</h3>
          <p className="text-indigo-700 mb-4">
            Ready to boost your productivity? Visit our About page to learn how to use QuickNotes
            and discover all available features.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
