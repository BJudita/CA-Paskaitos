import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import PokemonPage from './components/PokemonPage/PokemonPage.tsx'
import HomePage from './components/HomePage/HomePage.tsx'
import FavoritesPage from './components/FavoritesPage/FavoritesPage.tsx';
import Header from './header/header.tsx';
import BrowsePage from './components/BrowsePage/BrowsePage.tsx';

function App() {

  return (
      <Router>
        <Header />
      <Routes>
         <Route path="/" element={<HomePage />} /> 
         <Route path="/pokemon/:nameOrId" element={<PokemonPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
       <Route path="/browse" element={<BrowsePage />} />
      </Routes>
    </Router>
  )
}

export default App
