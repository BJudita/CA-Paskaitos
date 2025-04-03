import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './HomePage.css'

export default function HomePage() {
    const [ searchInput, setSearchInput] = useState<string>("");
    const navigate = useNavigate();

const handleSearch = () => {
if (searchInput) {
    navigate(`/pokemon/${searchInput}`);
}
}

  return (
    <div className="home-page">
      <h1>Find Your Pokemon</h1>      
      <div className="search-container">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Enter Pokémon name or ID"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  )
}
