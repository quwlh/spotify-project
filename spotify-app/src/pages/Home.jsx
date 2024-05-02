import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';


function Home() {
  return (
    <>
    <h1 style={{textAlign: 'center', fontSize: '4rem'}}>Spotify Discovery App</h1>
    <div className='home-container-main' style={{ display: 'flex', justifyContent: 'space-between', gap: '30px', flexDirection: 'column-reverse', alignItems: 'center' }}>
    <div className='home-left' style={{ paddingBottom: '70px', textAlign: 'center', width: '100%' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Discover New Music Fast and Simple Without Hassle</h1>
      <p style={{ fontSize: '2rem', marginBottom: '20px' }}>Click the button to get started</p>
      <Link to="/Browse">
        <button style={{ backgroundColor: '#9887E1', color: '#080410', padding: '14px 20px', fontSize: '1.5rem', border: 'none', borderRadius: '11px', cursor: 'pointer',fontWeight: 'bold', marginRight: '20px', paddingRight: '20px'}}>Get started</button>
      </Link>
      <a href="#how-it-works">
        <button style={{ backgroundColor: '#85215E', color: '#E3DEF7', padding: '14px 20px', fontSize: '1.5rem', border: 'none', borderRadius: '11px', cursor: 'pointer',fontWeight: 'bold' }}>How it Works</button>
      </a>
    </div>
    <div className='home-right' style={{ width: '100%', textAlign: 'center' }}>
      <img src="spotify.png" alt="#" style={{ width: '100%', maxWidth: '300px', height: 'auto', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}/>
    </div>
  </div>


  <div id='how-it-works' style={{ paddingTop: '70px', paddingBottom: '200px', textAlign: 'center' }}>
  <h1 style={{ fontSize: '3rem', marginBottom: '150px' }}>How it Works</h1>
  <div className='boxes-containers' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px', flexDirection: 'row', flexWrap: 'wrap' }}>
    <div className='1' style={{ backgroundColor: '#85215E', borderRadius: '20px', padding: '20px', maxWidth: '400px', height: '250px', overflow: 'auto', marginBottom: '30px' }}>
      <h2 style={{fontSize: '2rem'}}>Step 1</h2>
      <p style={{fontSize: '1.5rem'}}>Click on either browse or the get started button to get taken our browse page with a list of genres provided by spotify. </p>
    </div>
    <div className='2' style={{ backgroundColor: '#D55580', borderRadius: '20px', padding: '20px', maxWidth: '400px', height: '250px', overflow: 'auto', marginBottom: '30px' }}>
      <h2 style={{fontSize: '2rem'}}>Step 2</h2>
      <p style={{fontSize: '1.5rem'}}>Once a genre is selected, a plethora of songs under different subgenres will be shown waiting for you to be clicked on and discovered.</p>
    </div>
    <div className='3' style={{ backgroundColor: '#9887E1', borderRadius: '20px', padding: '20px', maxWidth: '400px', height: '250px', overflow: 'auto', marginBottom: '30px' }}>
      <h2 style={{fontSize: '2rem'}}>Step 3</h2>
      <p style={{fontSize: '1.5rem'}}>Click on a song and listen to it through the spotify player and scroll to the bottom to find more songs of similair taste. </p>
    </div>
  </div>
</div>




<div className='words-from-users' style={{ marginTop: '50px', textAlign: 'center' }}>
  <h1 style={{ marginBottom: '100px', fontSize: '3rem' }}>Words from Our Users</h1>
  <div style={{ display: 'flex', justifyContent: 'space-evenly', gap: '30px', flexWrap: 'wrap' }}>
    <div style={{ textAlign: 'center', marginBottom: '20px', maxWidth: '300px' }}>
    <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="John Doe" style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px', border: '3px solid #85215E' }} />
    <h2 style={{ marginBottom: '5px', fontSize: '2rem' }}>John Doe</h2>
      <p style={{ fontSize: '1.5rem' }}>"The Spotify Song Discovery App is a game-changer! It's so easy to explore new music, and the curated playlists are spot-on. Highly recommend!"</p>
    </div>
    <div style={{ textAlign: 'center', marginBottom: '20px', maxWidth: '300px' }}>
      <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="Jane Smith" style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px', border: '3px solid #D55580' }} />
      <h2 style={{ marginBottom: '5px', fontSize: '2rem' }}>Jane Smith</h2>
      <p style={{ fontSize: '1.5rem' }}>"Obsessed with the Spotify Song Discovery App! It's like having a personal DJ in my pocket. 5 stars!"</p>
    </div>
    <div style={{ textAlign: 'center', marginBottom: '20px', maxWidth: '300px' }}>
      <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="Alice Johnson" style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px', border: '3px solid #9887E1' }} />
      <h2 style={{ marginBottom: '5px', fontSize: '2rem' }}>Ron Johnson</h2>
      <p style={{ fontSize: '1.5rem' }}>"The Spotify Song Discovery App is my music oasis. Seamless navigation, endless options, pure bliss. Love it!"</p>
    </div>
  </div>
</div>


      <div style={{textAlign: 'center', paddingTop: '50px', paddingBottom: '100px'}}>
        <h1 style={{ fontSize: '3rem' }}>Click here to get started</h1>
        <Link to="/Browse">
        <button style={{backgroundColor: '#9887E1', color: '#080410', padding: '14px 20px', fontSize: '1.5rem', border: 'none', borderRadius: '11px', cursor: 'pointer', fontWeight: 'bold'}}>Get started</button>
      </Link>
      </div>

  
        

   <Footer />
    </>
  );
}

export default Home;
