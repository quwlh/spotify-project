import React, { useState, useEffect } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Browse from './pages/Browse';
import Faq from './pages/Faq';
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
      <nav style={{ display: 'flex', alignItems: 'center', paddingBottom: '10px', paddingTop: '20px', justifyContent: 'center' }}>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', gap: '200px', fontSize: '26px',}}>
          <li style={{}}>
            <Link to="/" style={{ textDecoration: 'none' }}>Home </Link>
          </li>
          <li style={{}}>
            <Link to="/Browse" style={{ textDecoration: 'none' }}>Browse</Link>
          </li>
          
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