import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header/Header';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/sign-in" element={<LoginPage />} />
        {/* сторінка Not found завжди остання!!! */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <footer>2024</footer>
    </BrowserRouter>
  );
}

export default App;
