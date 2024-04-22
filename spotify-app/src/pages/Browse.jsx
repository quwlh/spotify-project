import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Browse({ accessToken }) {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [subgenres, setSubgenres] = useState([]);
  const [currentPageGenres, setCurrentPageGenres] = useState(0);
  const [currentPageSubgenres, setCurrentPageSubgenres] = useState(0);

  useEffect(() => {
    fetchGenres();
  }, [accessToken]);

  const fetchGenres = async () => {
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
        nextUrl = response.data.categories.next; // Next page URL
      }
      setGenres(allGenres);
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
        nextUrl = response.data.playlists.next; // Next page URL
      }
      setSubgenres(allSubgenres);
    } catch (error) {
      console.error('Error fetching subgenres:', error);
    }
  };

  const handleGenreClick = async (genreId) => {
    setSelectedGenre(genreId);
    setCurrentPageSubgenres(0); // Reset subgenres page
    await fetchSubgenres(genreId);
  };

  const handlePreviousPageGenres = () => {
    if (currentPageGenres > 0) {
      setCurrentPageGenres(currentPageGenres - 1);
    }
  };

  const handleNextPageGenres = () => {
    if ((currentPageGenres + 1) * 10 < genres.length) {
      setCurrentPageGenres(currentPageGenres + 1);
    }
  };

  return (
    <div>
      <h1>Browse</h1>
      <h2>Genres</h2>
      <div>
        <button onClick={handlePreviousPageGenres}>&#60;</button>
        {genres.slice(currentPageGenres * 10, (currentPageGenres + 1) * 10).map(genre => (
          <button key={genre.id} onClick={() => handleGenreClick(genre.id)}>{genre.name}</button>
        ))}
        <button onClick={handleNextPageGenres}>&#62;</button>
      </div>
      {selectedGenre && (
        <>
          <h2>Subgenres</h2>
          <div>
            {subgenres.slice(currentPageSubgenres * 10, (currentPageSubgenres + 1) * 10).map(subgenre => (
              <div key={subgenre.id}>
                <h3>{subgenre.name}</h3>
                <SongsList accessToken={accessToken} playlistId={subgenre.id} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

const SongsList = ({ accessToken, playlistId }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetchSongs();
  }, [accessToken, playlistId]);

  const fetchSongs = async () => {
    try {
      const response = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      setSongs(response.data.items);
    } catch (error) {
      console.error('Error fetching songs:', error);
    }
  };

  return (
    <ul>
      {songs.map(song => (
        <li key={song.track.id}>
          <Link to={`/SongDisplay/${song.track.id}`}>{song.track.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Browse;
