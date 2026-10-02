import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about.html" element={<About />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}
