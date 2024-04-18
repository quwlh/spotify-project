import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SongDisplay({ accessToken }) {
  const [songInfo, setSongInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!accessToken) return; // Exit early if accessToken is not available

    const fetchSongInfo = async () => {
      try {
        const response = await fetch('https://api.spotify.com/v1/tracks/0FE9t6xYkqWXU2ahLh6D8X', {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch song information');
        }
        const data = await response.json();
        setSongInfo(data);
      } catch (error) {
        setError(error.message); // Set error state if fetching fails
      } finally {
        setLoading(false); // Set loading to false whether request succeeds or fails
      }
    };

    fetchSongInfo();
  }, [accessToken]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message if there's an error
  }

  if (!songInfo) {
    return <div>No song information available</div>;
  }

  return (
    <>
      <div>
        <h1>{songInfo.name}</h1>
        <p>Artist: {songInfo.artists.map(artist => artist.name).join(', ')}</p>
        <p>Album: {songInfo.album.name}</p>
        <p>Release Date: {songInfo.album.release_date}</p>
        <img src={songInfo.album.images[0].url} alt="Album Cover" />
        <div dangerouslySetInnerHTML={{ __html: `<iframe src="https://open.spotify.com/embed/track/${songInfo.id}" width="400" height="100" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>` }}></div>
      </div>

      <div>
        <h1 style={{ textAlign: 'center' }}>More Like This</h1>
        <div className='boxes-containers' style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className='1'>
            <h3>Name</h3>
            <Link to="/SongDisplay">
              <a>Get started</a>
            </Link>
            <p>Description</p>
          </div>
          <div className='2'></div>
          <h2>Second</h2>
          <div className='3'></div>
          <h2>Third</h2>
        </div>
      </div>
    </>
  );
}

export default SongDisplay;
