import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SongList = ({ accessToken, playlistId, totalSongs }) => {
  const [songs, setSongs] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetchSongs();
  }, [accessToken, playlistId, currentPage]);

  const fetchSongs = async () => {
    try {
      const response = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
        params: {
          offset: currentPage * 3,
          limit: 3 
        }
      });
      setSongs(response.data.items);
    } catch (error) {
      console.error('Error fetching songs:', error);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const maxPage = Math.ceil(totalSongs / 3);
    if (currentPage < maxPage - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="song-list-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '200px' }}>
        {songs.map((song) => (
          <div key={song.track.id} className="song-item" style={{ width: '300px', textAlign: 'center' }}> 
            <Link to={`/SongDisplay/${song.track.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={song.track.album.images[0].url} alt={song.track.name} style={{ width: '100%' }} />
              <p style={{ margin: '10px 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontSize: '18px' }}> 
                {song.track.name}
              </p>
              <p style={{ margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontSize: '16px' }}> 
                {song.track.artists.map(artist => artist.name).join(', ')}
              </p>
            </Link>
          </div>
        ))}
      </div>
      <div className="pagination-buttons" style={{ marginTop: '20px' }}> 
        <button onClick={handlePreviousPage} style={{ 
          backgroundColor: '#9887E1',
          border: 'none',
          color: 'white',
          padding: '12px 30px',  
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '18px', 
          margin: '0 10px', 
          cursor: 'pointer',
          borderRadius: '12px'
        }}>
          &#60; Prev
        </button>
        <button onClick={handleNextPage} style={{ 
          backgroundColor: '#9887E1',
          border: 'none',
          color: 'white',
          padding: '12px 30px', 
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '18px',
          margin: '0 10px', 
          cursor: 'pointer',
          borderRadius: '12px'
        }}>
          Next &#62;
        </button>
      </div>
    </div>
  );
};

export default SongList;
