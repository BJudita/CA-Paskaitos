import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import MovieList from './components/MovieList/MovieList';
import MoviePage from './components/MoviePage/MoviePage';
import Header from './Header/Header';
import styles from "./App.module.css";
import { useEffect, useState } from 'react';
import ProfilePage from './components/Profile/ProfilePage';
import MyReviewsPage from './components/Profile/MyReviewsPage';

function AppContent() {
  const location = useLocation();
  const [searchText, setSearchText] = useState('');
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    if (location.pathname === '/') {
      setSearchText('');
      setSearchInput('');
    }
  }, [location]);

  const handleSearchChange = (value: string) => {
    setSearchText(value);
  };

  const handleSearchSubmit = () => {
    setSearchInput(searchText);
    setSearchText('');
  };

  return (
    <div className={styles.mainContent}>
      <Header 
        searchText={searchText}
        onSearchChange={handleSearchChange}
        onSearchSubmit={handleSearchSubmit}
      />
      <Routes>
        <Route path="/" element={<MovieList searchInput={searchInput} />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/my-reviews" element={<MyReviewsPage />} />
      </Routes>
    </div>
  );
}

export default AppContent;
