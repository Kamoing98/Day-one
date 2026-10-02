import { useState, FormEvent } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">About QuickNotes</h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          QuickNotes is a lightweight, fast note-taking application built for people who value
          simplicity and speed. It helps you capture thoughts, organize ideas, and stay productive
          without the clutter of complex software. Whether you are a student, professional, or
          creative thinker, QuickNotes adapts to your workflow.
        </p>

        <section className="mb-8 bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">How to use QuickNotes</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            <li>Open QuickNotes and click the "New Note" button or press Ctrl+N to create a note.</li>
            <li>Type your content in the editor — your notes are saved automatically as you type.</li>
            <li>Use tags to organize your notes into categories for easy retrieval later.</li>
            <li>Use the search bar or Ctrl+F to find any note by keyword or tag.</li>
            <li>Export your notes as Markdown or plain text whenever you need to share them.</li>
          </ol>
        </section>

        <section className="mb-8 bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Features</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Instant note creation with auto-save</li>
            <li>Tag-based organization and filtering</li>
            <li>Full-text search across all notes</li>
            <li>Markdown formatting support</li>
            <li>Dark mode for comfortable night editing</li>
            <li>Keyboard shortcuts for power users</li>
            <li>Export to Markdown, plain text, or PDF</li>
            <li>Offline-first architecture — works without internet</li>
          </ul>
        </section>

        <section className="mb-8 bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Keyboard shortcuts</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-2 px-3 text-gray-700 font-semibold">Shortcut</th>
                  <th className="py-2 px-3 text-gray-700 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-2 px-3">
                    <kbd className="bg-gray-100 border border-gray-300 rounded px-2 py-0.5 text-sm font-mono">Ctrl+N</kbd>
                  </td>
                  <td className="py-2 px-3 text-gray-600">Create a new note</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 px-3">
                    <kbd className="bg-gray-100 border border-gray-300 rounded px-2 py-0.5 text-sm font-mono">Ctrl+S</kbd>
                  </td>
                  <td className="py-2 px-3 text-gray-600">Save current note</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 px-3">
                    <kbd className="bg-gray-100 border border-gray-300 rounded px-2 py-0.5 text-sm font-mono">Ctrl+F</kbd>
                  </td>
                  <td className="py-2 px-3 text-gray-600">Search notes</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 px-3">
                    <kbd className="bg-gray-100 border border-gray-300 rounded px-2 py-0.5 text-sm font-mono">Ctrl+D</kbd>
                  </td>
                  <td className="py-2 px-3 text-gray-600">Delete current note</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">
                    <kbd className="bg-gray-100 border border-gray-300 rounded px-2 py-0.5 text-sm font-mono">Ctrl+Shift+E</kbd>
                  </td>
                  <td className="py-2 px-3 text-gray-600">Export note</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8 bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Send feedback</h3>
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-700">
              <p className="font-medium">Thank you for your feedback!</p>
              <p className="text-sm mt-1">We appreciate you taking the time to help us improve QuickNotes.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Tell us what you think..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </form>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
