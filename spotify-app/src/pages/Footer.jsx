import React from 'react';

function Footer() {
  return (
    <footer style={{ padding: '20px 0', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ flex: 1 }}>
          <h3 style={{ marginBottom: '10px' }}>Contact Us</h3>
          <p style={{ margin: '5px 0' }}>Email: contact@example.com</p>
          <p style={{ margin: '5px 0' }}>Phone: +1 (123) 456-7890</p>
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ marginBottom: '10px' }}>Follow Us</h3>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}><img src="https://image.flaticon.com/icons/png/512/733/733547.png" alt="Facebook" style={{ width: '30px', height: '30px' }} /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}><img src="https://image.flaticon.com/icons/png/512/733/733579.png" alt="Twitter" style={{ width: '30px', height: '30px' }} /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}><img src="https://image.flaticon.com/icons/png/512/174/174855.png" alt="Instagram" style={{ width: '30px', height: '30px' }} /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}><img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="LinkedIn" style={{ width: '30px', height: '30px' }} /></a>
          </div>
        </div>
      </div>
      <p style={{ marginTop: '20px', fontSize: '14px', color: '#E3DEF7' }}>&copy; 2024 Spotify Song Discovery App. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
