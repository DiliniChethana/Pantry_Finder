import React from 'react'
import { Link } from 'react-router-dom'

const sample = [
  { title: 'Chicken Kottu', img: '/images/chicken-kottu.jpg', date: 'Saved oct 26,2024' },
  { title: 'Pasta', img: '/images/pasta.jpg', date: 'Saved oct 26,2024' },
  { title: 'Vegetable Salad', img: '/images/vegetable-salad.jpg', date: 'Saved oct 26,2024' },
  { title: 'Vegetable Spaghetti', img: '/images/vegetable-spaghetti.jpg', date: 'Saved oct 26,2024' },
  { title: 'Chicken Soup', img: '/images/chicken-soup.jpg', date: 'Saved oct 26,2024' },
  { title: 'Roast Potato', img: '/images/roast-potato.jpg', date: 'Saved oct 26,2024' }
]

export default function SavedRecipes(){
  const styles = {
    page: { fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif", color: '#222', margin: 0, background: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column' },
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 60px', background: '#fff', borderBottom: '1px solid #f0f0f0' },
    brand: { display: 'flex', alignItems: 'center', gap: 10 },
    brandLogo: { width: 35, height: 35 },
    brandTitle: { fontWeight: 700, fontSize: 20, color: '#222' },
    nav: { display: 'flex', gap: 36, alignItems: 'center' },
    navLink: { textDecoration: 'none', color: '#222', fontWeight: 500, fontSize: 15 },

    banner: { background: '#1a1a1a', color: '#fff', padding: '50px 0', textAlign: 'center' },
    bannerTitle: { fontSize: 36, fontWeight: 700, margin: 0 },

    main: { flex: 1, padding: '60px 80px', background: '#fff' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30, maxWidth: 1200, margin: '0 auto' },
    card: { 
      border: '2px solid #e0e0e0', 
      borderRadius: 20, 
      padding: 20, 
      textAlign: 'center', 
      background: '#fff',
      transition: 'transform 0.2s',
      cursor: 'pointer'
    },
    imgWrap: { 
      width: '100%', 
      height: 180, 
      overflow: 'hidden', 
      borderRadius: 16, 
      marginBottom: 16,
      background: '#f5f5f5'
    },
    img: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
    cardTitle: { fontSize: 20, fontWeight: 700, marginBottom: 8, color: '#222' },
    date: { color: '#666', fontSize: 13, fontWeight: 400 },

    footer: { padding: '36px 80px', textAlign: 'center', background: '#fff', borderTop: '1px solid #f0f0f0' },
    footerLinks: { display: 'flex', gap: 28, justifyContent: 'center' },
    footerLink: { textDecoration: 'none', color: '#666', fontSize: 14, fontWeight: 500 }
  }

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.brand}>
          <img src="/images/logo-small.png" alt="logo" style={styles.brandLogo} />
          <div style={styles.brandTitle}>Pantry Finder</div>
        </div>
        <nav style={styles.nav}>
          <Link to="/" style={styles.navLink}>Home</Link>
          <Link to="/saved" style={styles.navLink}>Saved Recipes</Link>
          <Link to="/pantry" style={styles.navLink}>Pranty</Link>
          <Link to="/ingredients" style={styles.navLink}>Ingredients</Link>
          <Link to="/profile" style={styles.navLink}>Profile</Link>
        </nav>
      </header>

      <div style={styles.banner}>
        <h2 style={styles.bannerTitle}>Saved Recipes</h2>
      </div>

      <main style={styles.main}>
        <div style={styles.grid}>
          {sample.map((recipe, i) => (
            <div key={i} style={styles.card}>
              <div style={styles.imgWrap}>
                <img 
                  src={recipe.img} 
                  onError={(e) => e.target.src='/images/login-left.png'}
                  alt={recipe.title} 
                  style={styles.img} 
                />
              </div>
              <div style={styles.cardTitle}>{recipe.title}</div>
              <div style={styles.date}>{recipe.date}</div>
            </div>
          ))}
        </div>
      </main>

      <footer style={styles.footer}>
        <div style={styles.footerLinks}>
          <Link to="#" style={styles.footerLink}>About</Link>
          <Link to="#" style={styles.footerLink}>Privacy</Link>
          <Link to="#" style={styles.footerLink}>Contact</Link>
          <Link to="#" style={styles.footerLink}>Terms</Link>
        </div>
      </footer>
    </div>
  )
}
