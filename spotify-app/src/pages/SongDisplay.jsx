import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SongDisplay({ accessToken }) {
  const { id } = useParams();
  const [songInfo, setSongInfo] = useState(null);

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

  if (!songInfo) {
    return <div>No song information available</div>;
  }

  return (
    <div>
      <h1>{songInfo.name}</h1>
      <p>Artist: {songInfo.artists.map(artist => artist.name).join(', ')}</p>
      <p>Album: {songInfo.album.name}</p>
      <p>Release Date: {songInfo.album.release_date}</p>
      <img src={songInfo.album.images[0].url} alt="Album Cover" />
      <div dangerouslySetInnerHTML={{ __html: `<iframe src="https://open.spotify.com/embed/track/${songInfo.id}" width="400" height="100" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>` }}></div>
    </div>
  );
}

export default SongDisplay;
