import React from 'react';
import Header from './Header';

const Home: React.FC = () => {
  return (
    <div style={styles.container}>
      {/* Header */}
      <Header />

      {/* Fond d'écran et texte */}
      <div style={styles.content}>
        <p style={styles.description}>
          Fond d’écran + texte explicatif du site avec image fixe, effet de parallaxe,
          et texte qui disparaît au fur et à mesure du scroll
        </p>

        {/* Zone de bienvenue */}
        <div style={styles.welcomeBox}>
          <h1 style={styles.welcomeText}>WELCOME TO</h1>
          <h2 style={styles.sagaText}>SAGA QUEST</h2>
        </div>
      </div>
    </div>
  );
};

// Définition des styles correctement typés
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: "'Arial', sans-serif",
  },
  content: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url("/home_wallpaper.jpg")',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  },
  description: {
    fontSize: '18px',
    textAlign: 'center',
    marginBottom: '50px',
  },
  welcomeBox: {
    backgroundColor: '#f4e9e4',
    padding: '20px 40px',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  welcomeText: {
    margin: 0,
    fontSize: '32px',
    color: '#333',
  },
  sagaText: {
    margin: 0,
    fontSize: '32px',
    color: '#333',
  },
};

export default Home;
