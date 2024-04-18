import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Browse() {
  const genres = ['Pop', 'Rock', 'Hip Hop', 'Electronic']; 
  const subgenres = {
    Pop: ['Sub Genre 1', 'Sub Genre 2', 'Sub Genre 3', 'Sub Genre 4', 'Sub Genre 5', 'Sub Genre 6'],
    Rock: ['Sub Genre 7', 'Sub Genre 8', 'Sub Genre 9', 'Sub Genre 10', 'Sub Genre 11', 'Sub Genre 12'],
    'Hip Hop': ['Sub Genre 13', 'Sub Genre 14', 'Sub Genre 15', 'Sub Genre 16', 'Sub Genre 17', 'Sub Genre 18'],
    Electronic: ['Sub Genre 19', 'Sub Genre 20', 'Sub Genre 21', 'Sub Genre 22', 'Sub Genre 23', 'Sub Genre 24']
  }; 

  const [selectedGenreIndex, setSelectedGenreIndex] = useState(0);
  const selectedGenre = genres[selectedGenreIndex]; 

  const [selectedSubgenres, setSelectedSubgenres] = useState([]); 

  const handleLeftGenreClick = () => {
    setSelectedGenreIndex(prevIndex => (prevIndex === 0 ? genres.length - 1 : prevIndex - 1));
    setSelectedSubgenres([]); 
  };

  const handleRightGenreClick = () => {
    setSelectedGenreIndex(prevIndex => (prevIndex === genres.length - 1 ? 0 : prevIndex + 1));
    setSelectedSubgenres([]); 
  };

  const handleSubgenreChange = (subgenre) => {
    if (selectedSubgenres.includes(subgenre)) {
      setSelectedSubgenres(selectedSubgenres.filter(sg => sg !== subgenre));
    } else {
      setSelectedSubgenres([...selectedSubgenres, subgenre]);
    }
  };

  return (
    <>  
      <div style={{textAlign: 'center'}}>
      <h1>Browse</h1>
      <input type="text" placeholder='Search'/> 
      </div>
    
      <div className='filter-section'  style={{textAlign: 'center'}}>
  <div>
    <button onClick={handleLeftGenreClick}>left</button>
    <span>{selectedGenre}</span>
    <button onClick={handleRightGenreClick}>right</button>
  </div>

  <div>

    {subgenres[selectedGenre].map((subgenre, index) => (
          <label key={index}>
            <input
              type="checkbox"
              name={subgenre}
              value={subgenre}
              checked={selectedSubgenres.includes(subgenre)}
              onChange={() => handleSubgenreChange(subgenre)}
            />
            {subgenre}
          </label>
    ))}
   
  </div>
</div>

    <div style={{ display: 'flex', flexWrap: 'wrap', textAlign: 'center'}}>
    
      <div style={{ display: 'flex', flexBasis: '100%', }}>
       
        <div style={{ width: '33.33%', padding: '10px', boxSizing: 'border-box' }}>
          <h3>Name</h3>
          <Link to="/SongDisplay">
            <a>Song</a>
          </Link>
          <p>Description</p>
        </div>

     
        <div style={{ width: '33.33%', padding: '10px', boxSizing: 'border-box' }}>
          <h3>Name</h3>
          <Link to="/SongDisplay">
            <a>Song</a>
          </Link>
          <p>Description</p>
          <p>Description</p>
        </div>

        
        <div style={{ width: '33.33%', padding: '10px', boxSizing: 'border-box' }}>
          <h3>Name</h3>
          <Link to="/SongDisplay">
            <a>Song</a>
          </Link>
          <p>Description</p>
          <p>Description</p>
        </div>
      </div>

      <div style={{ display: 'flex', flexBasis: '100%' }}>
       
        <div style={{ width: '33.33%', padding: '10px', boxSizing: 'border-box' }}>
          <h3>Name</h3>
          <Link to="/SongDisplay">
            <a>Song</a>
          </Link>
          <p>Description</p>
          <p>Description</p>
        </div>

        
        <div style={{ width: '33.33%', padding: '10px', boxSizing: 'border-box' }}>
          <h3>Name</h3>
          <Link to="/SongDisplay">
            <a>Song</a>
          </Link>
          <p>Description</p>
          <p>Description</p>
        </div>

       
        <div style={{ width: '33.33%', padding: '10px', boxSizing: 'border-box' }}>
          <h3>Name</h3>
          <Link to="/SongDisplay">
            <a>Song</a>
          </Link>
          <p>Description</p>
          <p>Description</p>
        </div>
      </div>

    </div>
    
    
    <footer>
    <div style={{ height: '2px', backgroundColor: 'black', margin: '10px 0' }}></div>
      <p>footer</p>
    </footer>
    </>
    
    
  )
}

export default Browse