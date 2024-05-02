import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SongList from './SongList'; 

function Browse({ accessToken }) {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [subgenres, setSubgenres] = useState([]);
  const [totalSongs, setTotalSongs] = useState(0); 
  const [currentPageGenres, setCurrentPageGenres] = useState(0);
  const [currentPageSubgenres, setCurrentPageSubgenres] = useState(0);

  const startGenreIndex = 2;

  useEffect(() => {
    fetchGenres(startGenreIndex);
  }, [accessToken]);

  const fetchGenres = async (startIndex) => {
    try {
      let allGenres = [];
      let nextUrl = 'https://api.spotify.com/v1/browse/categories';
      while (nextUrl) {
        const response = await axios.get(nextUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
        allGenres = [...allGenres, ...response.data.categories.items];
        nextUrl = response.data.categories.next;
      }
      setGenres(allGenres.slice(startIndex));
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  };

  const fetchSubgenres = async (genreId) => {
    try {
      let allSubgenres = [];
      let nextUrl = `https://api.spotify.com/v1/browse/categories/${genreId}/playlists`;
      while (nextUrl) {
        const response = await axios.get(nextUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
        allSubgenres = [...allSubgenres, ...response.data.playlists.items];
        nextUrl = response.data.playlists.next; 
      }
      setSubgenres(allSubgenres);
      const total = allSubgenres.reduce((acc, subgenre) => acc + subgenre.tracks.total, 0);
      setTotalSongs(total);
    } catch (error) {
      console.error('Error fetching subgenres:', error);
    }
  };

  const handleGenreClick = async (genreId) => {
    setSelectedGenre(genreId);
    setCurrentPageSubgenres(0);
    await fetchSubgenres(genreId);
  };

  const handlePreviousPageGenres = () => {
    if (currentPageGenres > startGenreIndex) {
      setCurrentPageGenres(currentPageGenres - 1);
    }
  };

  const handleNextPageGenres = () => {
    if ((currentPageGenres + 1) * 5 < genres.length) {
      setCurrentPageGenres(currentPageGenres + 1);
    }
  };

  return (
    <>
      <div>
        <h1 style={{ textAlign: 'center' }}>Browse</h1>
        <h2 style={{ textAlign: 'center' }}>Genres</h2>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <button
            style={{
              backgroundColor: '#9887E1',
              border: 'none',
              color: 'white',
              padding: '20px 40px',
              textAlign: 'center',
              textDecoration: 'none',
              display: 'inline-block',
              fontSize: '24px',
              margin: '0 10px',
              cursor: 'pointer',
              borderRadius: '12px'
            }}
            onClick={handlePreviousPageGenres}
          >
            &#60; Prev
          </button>
          {genres.slice(currentPageGenres * 5, (currentPageGenres + 1) * 5).map(genre => (
            <button
              key={genre.id}
              onClick={() => handleGenreClick(genre.id)}
              style={{
                backgroundColor: '#85215E',
                border: 'none',
                color: 'white',
                padding: '20px 40px',
                textAlign: 'center',
                textDecoration: 'none',
                display: 'inline-block',
                fontSize: '24px',
                margin: '0 10px',
                cursor: 'pointer',
                borderRadius: '12px'
              }}
            >
              {genre.name}
            </button>
          ))}
          <button
            style={{
              backgroundColor: '#9887E1',
              border: 'none',
              color: 'white',
              padding: '20px 40px',
              textAlign: 'center',
              textDecoration: 'none',
              display: 'inline-block',
              fontSize: '24px',
              margin: '0 10px',
              cursor: 'pointer',
              borderRadius: '12px'
            }}
            onClick={handleNextPageGenres}
          >
            Next &#62;
          </button>
        </div>
        {selectedGenre && (
          <>
            <h1 style={{ textAlign: 'center' }}>Subgenres</h1>
            <div>
              {subgenres && subgenres.slice(currentPageSubgenres * 10, (currentPageSubgenres + 1) * 10).map(subgenre => (
                <div key={subgenre.id}>
                  {subgenre && subgenre.id && (
                    <>
                      <h3 style={{ paddingLeft: '40px', textTransform: 'uppercase' }}>{subgenre.name}</h3>
                      <SongList accessToken={accessToken} playlistId={subgenre.id} totalSongs={totalSongs} />
                    </>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Browse;
