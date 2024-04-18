import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
    <div className= 'container' style={{}}>
    <div className='home-container-main' style={{ display: 'flex', justifyContent: 'space-between', gap: '500px'}}>
    <div className='home-left' style={{ flex: 1, paddingLeft: '100px'}}>
      <h1 style={{fontSize: '75px'}}>Discover New Music Fast and Simple Without Hassle</h1>
      <p style={{fontSize: '25px'}}>It's never been so easy to find new music.</p>
      <p style={{fontSize: '20px'}}>Click the button to get started</p>
      <Link to="/Browse">
        <button style={{backgroundColor: '#9887E1', color: '#080410', padding: '8px 16px', fontSize: '14px', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '20px'}}>Get started</button>
      </Link>
      <a href="#how-it-works">
        <button style={{backgroundColor: '#85215E', color: '#E3DEF7', padding: '8px 16px', fontSize: '14px', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '20px'}}>How it Works</button>
      </a>
    </div>
    <div className='home-right' style={{ flex: 1,}}>
      <img src="https://i.pinimg.com/736x/11/1b/ac/111bac0e608be170a71e50cc07bd7ad2.jpg" alt="#" />
    </div>
  </div>


  <div id='how-it-works' style={{ paddingTop: '150px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center', marginRight: '200px'}}>
  <h1 style={{marginLeft: '300px', fontSize: '50px' }}>How it Works</h1>
  <div className='boxes-containers' style={{ width: '30%' }}>
    <div className='1' style={{ backgroundColor: '#85215E', borderRadius: '20px', marginBottom: '30px', padding: '20px',  }}>
      <h2>Step 1</h2>
      <p>Describe what happens in step 1</p>
    </div>
    <div className='2' style={{ backgroundColor: '#D55580', borderRadius: '20px', marginBottom: '30px', padding: '20px', }}>
      <h2>Step 2</h2>
      <p>Describe what happens in step 2</p>
    </div>
    <div className='3' style={{ backgroundColor: '#9887E1', borderRadius: '20px', marginBottom: '30px', padding: '20px',  }}>
      <h2>Step 3</h2>
      <p>Describe what happens in step 3</p>
    </div>
  </div>
</div>



<div className='words-from-users' style={{ marginTop: '50px', textAlign: 'center' }}>
  <h1 style={{ marginBottom: '20px' }}>Words from Our Users</h1>
  <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
    <div style={{ flex: 1, textAlign: 'center', marginRight: '20px' }}>
      <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="John Doe" style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px' }} />
      <h2 style={{ marginBottom: '5px' }}>John Doe</h2>
      <p style={{ fontSize: '14px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div style={{ flex: 1, textAlign: 'center', marginRight: '20px' }}>
      <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="Jane Smith" style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px' }} />
      <h2 style={{ marginBottom: '5px' }}>Jane Smith</h2>
      <p style={{ fontSize: '14px' }}>Sed et elit molestie, rutrum leo vel, fermentum velit.</p>
    </div>
    <div style={{ flex: 1, textAlign: 'center' }}>
      <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="Alice Johnson" style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px' }} />
      <h2 style={{ marginBottom: '5px' }}>Alice Johnson</h2>
      <p style={{ fontSize: '14px' }}>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
    </div>
  </div>
</div>

      <div style={{textAlign: 'center', paddingTop: '75px'}}>
        <h1>Click here to get started</h1>
        <Link to="/Browse">
            <button>Get started</button>
          </Link>
      </div>

    </div>
        

    <footer>
    <div style={{ height: '2px', backgroundColor: 'black', margin: '10px 0' }}></div>
      <p>footer</p>
    </footer>
    </>
  );
}

export default Home;
