import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>LOGO</div>
      <nav style={styles.nav}>
        <a style={styles.link} href="#factions">factions</a>
        <a style={styles.link} href="#quiz">QUIZ</a>
        <a style={styles.link} href="#profile">Profile</a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  logo: { fontWeight: 'bold', fontStyle: 'italic' },
  nav: { display: 'flex', gap: '20px' },
  link: {
    textDecoration: 'none',
    color: '#000',
    fontWeight: 'bold',
  },
};

export default Header;
