import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function SongDisplay({ accessToken }) {
  const { id } = useParams();
  const [songInfo, setSongInfo] = useState(null);
  const [relatedSongs, setRelatedSongs] = useState([]);

  useEffect(() => {
    if (!accessToken || !id) return;

    const fetchSongInfo = async () => {
      try {
        const response = await fetch(`https://api.spotify.com/v1/tracks/${id}`, {
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
        console.error('Error fetching song information:', error);
      }
    };

    fetchSongInfo();
  }, [accessToken, id]);

  useEffect(() => {
    if (!songInfo) return;
  
    const fetchRelatedSongs = async () => {
      try {
        const response = await axios.get(`https://api.spotify.com/v1/recommendations?seed_tracks=${id}&limit=3`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
        setRelatedSongs(response.data.tracks);
      } catch (error) {
        console.error('Error fetching related songs:', error);
      }
    };
  
    fetchRelatedSongs();
  }, [accessToken, id, songInfo]);

  if (!songInfo) {
    return <div>Loading song information...</div>; 
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>{songInfo.name}</h1>
      <p style={{ fontSize: '18px', marginBottom: '5px' }}>Artist: {songInfo.artists.map(artist => artist.name).join(', ')}</p>
      <p style={{ fontSize: '18px', marginBottom: '5px' }}>Album: {songInfo.album.name}</p>
      <p style={{ fontSize: '18px', marginBottom: '5px' }}>Release Date: {songInfo.album.release_date}</p>
      <img src={songInfo.album.images[0].url} alt="Album Cover" style={{ maxWidth: '300px', maxHeight: '300px', marginBottom: '20px' }} />
      <div style={{ maxWidth: '400px', margin: '0 auto' }} dangerouslySetInnerHTML={{ __html: `<iframe src="https://open.spotify.com/embed/track/${songInfo.id}" width="400" height="100" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>` }}></div>

      {relatedSongs.length > 0 && (
        <div style={{ marginTop: '50px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '20px' }}>Related Songs</h2>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '200px' }}>
            {relatedSongs.slice(0, 3).map(song => (
              <div key={song.id} style={{ margin: '0 10px' }}>
                <Link to={`/SongDisplay/${song.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <img src={song.album.images[0].url} alt={song.name} style={{ width: '220px', height: '220px', marginBottom: '10px' }} />
                  <p style={{ fontSize: '18px', marginBottom: '5px' }}>{song.name}</p>
                  <p style={{ fontSize: '16px' }}>{song.artists.map(artist => artist.name).join(', ')}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SongDisplay;
