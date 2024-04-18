import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <div className= 'container' style={{marginLeft: '50px', margin: '50px'}}>
    <div className='home-container-main' style={{ display: 'flex', justifyContent: 'space-between', gap: '500px'}}>
    <div className='home-left' style={{ flex: 1, paddingLeft: '100px'}}>
      <h1 style={{fontSize: '55px'}}>Discover New Music Fast and Simple Without Hassle</h1>
      <p>It's never been so easy to find new music.</p>
      <p>Click the button to get started</p>
      <Link to="/Browse">
        <button style={{backgroundColor: '#9887E1', color: '#080410', padding: '8px 16px', fontSize: '14px', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '20px'}}>Get started</button>
      </Link>
      <a href="#how-it-works">
        <button style={{backgroundColor: '#85215E', color: '#E3DEF7', padding: '8px 16px', fontSize: '14px', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '20px'}}>How it Works</button>
      </a>
    </div>
    <div className='home-right' style={{ flex: 1,}}>
      <img src="#" alt="#" />
      <p>logo</p>
    </div>
  </div>


      <div id='how-it-works' style={{paddingTop: '200px'}}>
        <h1 style={{textAlign: 'center'}}>How it Works</h1>
        <div className='boxes-containers' style={{ display: 'flex', justifyContent: 'space-between'}}>
          <div className='1'>
            <h2>First</h2>
          </div>
          <div className='2'></div>
          <h2>Second</h2>
          <div className='3'></div>
          <h2>Third</h2>
        </div>
      </div>

      <div className='words-from-users'>
        <div>
          <h1>Words from Our users</h1>
        </div>
        <div>
          <h2>Name</h2>
          <p>blah blah blah</p>
        </div>
      </div>

      <div>
        <h1>Click here to get started</h1>
        <Link to="/Browse">
            <button>Get started</button>
          </Link>
      </div>

    </div>
        

    <footer>
    <div style={{ height: '2px', backgroundColor: 'black', margin: '10px 0' }}></div>
      <p>gay footer</p>
    </footer>
    </>
  );
}

export default Home;
