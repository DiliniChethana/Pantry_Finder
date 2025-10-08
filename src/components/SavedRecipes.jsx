import React from 'react'
import { Link } from 'react-router-dom'

const sample = [
  { title: 'Chicken Kottu', img: '/images/login-left.png', date: 'Saved oct 26,2024' },
  { title: 'Pasta', img: '/images/login-left.png', date: 'Saved oct 26,2024' },
  { title: 'Vegetable Salad', img: '/images/login-left.png', date: 'Saved oct 26,2024' },
  { title: 'Vegetable Spaghetti', img: '/images/login-left.png', date: 'Saved oct 26,2024' },
  { title: 'Chicken Soup', img: '/images/login-left.png', date: 'Saved oct 26,2024' },
  { title: 'Roast Potato', img: '/images/login-left.png', date: 'Saved oct 26,2024' }
]

export default function SavedRecipes(){
  const styles = {
    page: { fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif", color: '#222' },
    topHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 56px', background: '#fff', borderBottom: '1px solid #eee' },
    brand: { display: 'flex', alignItems: 'center', gap: 12 },
    brandLogo: { width: 56, height: 56 },
    brandTitle: { fontWeight: 800, fontSize: 20 },
    nav: { display: 'flex', gap: 20 },

    banner: { background: '#111010', color: '#fff', padding: '36px 0', textAlign: 'center' },
    bannerTitle: { fontSize: 26, fontWeight: 800, margin: 0 },

    container: { padding: '40px 64px', maxWidth: 1200, margin: '0 auto' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, alignItems: 'start' },
    card: { border: '1px solid #ddd', borderRadius: 12, padding: 16, textAlign: 'center', boxShadow: 'none', background: '#fff' },
    imgWrap: { width: '100%', height: 160, overflow: 'hidden', borderRadius: 10, border: '1px solid #eee' },
    img: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
    cardTitle: { fontSize: 20, fontWeight: 800, marginTop: 12 },
    date: { color: '#777', fontSize: 13, marginTop: 8 }
  }

  return (
    <div style={styles.page}>
      <div style={styles.topHeader}>
        <div style={styles.brand}>
          <img src="/images/logo-small.png" alt="logo" style={styles.brandLogo} />
          <div style={styles.brandTitle}>Pantry Finder</div>
        </div>
        <nav style={styles.nav}>
          <Link to="/">Home</Link>
          <Link to="/saved">Saved Recipes</Link>
          <Link to="/pantry">Pantry</Link>
          <Link to="/profile">Profile</Link>
        </nav>
      </div>

      <div style={styles.banner}>
        <h2 style={styles.bannerTitle}>Saved Recipes</h2>
      </div>

      <div style={styles.container}>
        <div style={styles.grid}>
          {sample.map((s, i) => (
            <div key={i} style={styles.card}>
              <div style={styles.imgWrap}>
                <img src={s.img} alt={s.title} style={styles.img} />
              </div>
              <div style={styles.cardTitle}>{s.title}</div>
              <div style={styles.date}>{s.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
