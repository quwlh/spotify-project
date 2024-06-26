import React, { useState, useEffect } from 'react';

function SpotifyAPI({ clientId, clientSecret }) {
  const [accessToken, setAccessToken] = useState('');

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

   
    const refreshTokenInterval = setInterval(fetchAccessToken, 3000000);

   
    return () => clearInterval(refreshTokenInterval);
  }, [clientId, clientSecret]);

  useEffect(() => {
    console.log('Access Token:', accessToken); 
  }, [accessToken]); 

  return <>{accessToken}</>; 
}

export default SpotifyAPI;
