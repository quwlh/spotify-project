import React, { useState, useEffect } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Browse from './pages/Browse';
import SongDisplay from './pages/SongDisplay';
import './App.css';

function App() {
  const [accessToken, setAccessToken] = useState('');
  const navigate = useNavigate();

  const clientId = 'ecec0dc55cbf430bbd3eb333f30573fb';
  const clientSecret = '6f702e0266b641c187aa50e2507378bd';

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const response = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(`${clientId}:${clientSecret}`)
          },
          body: 'grant_type=client_credentials'
        });
        if (!response.ok) {
          throw new Error('Failed to fetch access token');
        }
        const data = await response.json();
        setAccessToken(data.access_token);
      } catch (error) {
        console.error('Error fetching access token:', error);
      }
    };

    fetchAccessToken();
  }, []);

  const handleSubgenreClick = (subgenre) => {
    if (subgenre && subgenre.id) {
      // Navigate to SongDisplay with songId as URL parameter
      navigate(`/SongDisplay/${subgenre.id}`);
    }
  };

  return (
    <>
      <nav>
        <ul>
          <input type="text" placeholder='Search' style={{borderRadius: '4px', backgroundColor: '#E3DEF7', color: '#080410'}}/> 
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Browse">Browse</Link></li>
          {/* Remove the link to SongDisplay from the navigation */}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Browse" element={<Browse accessToken={accessToken} handleSubgenreClick={handleSubgenreClick} />} />
        <Route path="/SongDisplay/:id" element={<SongDisplay accessToken={accessToken} />} />
      </Routes>
    </>
  );
}

export default App;
