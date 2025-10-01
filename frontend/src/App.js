import React from 'react';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#282c34',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      <header style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          Welcome to React
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          This is a starter React application
        </p>
        <p style={{ fontSize: '1rem', color: '#61dafb' }}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
