import React from 'react';

function App() {
  return (
    <div style={{
      backgroundColor: '#0a0f24',
      color: 'white',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial',
      textAlign: 'center'
    }}>
      <img
        src="/profile.jpeg"
        alt="Nikhil Basapurapu"
        style={{
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
          marginBottom: '20px'
        }}
      />
      <h1>Nikhil Basapurapu</h1>
      <p>Network Engineer | 9 Years of Experience</p>
      <div style={{ marginTop: '20px' }}>
        <a href="mailto:you@example.com" style={{ color: '#00aced', marginRight: '15px' }}>Email</a>
        <a href="https://linkedin.com" target="_blank" style={{ color: '#00aced', marginRight: '15px' }}>LinkedIn</a>
        <a href="https://github.com" target="_blank" style={{ color: '#00aced' }}>GitHub</a>
      </div>
    </div>
  );
}

export default App;
