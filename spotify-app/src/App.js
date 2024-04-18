import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Browse from './pages/Browse';
import SongDisplay from './pages/SongDisplay';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [accessToken, setAccessToken] = useState('');

  // Replace 'YOUR_CLIENT_ID' and 'YOUR_CLIENT_SECRET' with your actual Spotify API credentials
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

  return (
    <>
      <nav>
        <ul>
          <input type="text" placeholder='Search' style={{borderRadius: '4px', backgroundColor: '#E3DEF7', color: '#080410'}}/> 
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Browse">Browse</Link></li>
          <li><Link to="/SongDisplay">SongDisplay</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Browse" element={<Browse />} />
        <Route path="/SongDisplay" element={<SongDisplay accessToken={accessToken} />} />
      </Routes>
    </>
  );
}

export default App;
