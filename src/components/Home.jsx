import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  const styles = {
    page: { fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif", color: '#222' },
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 56px', borderBottom: '1px solid #eee', background: '#fff' },
    brand: { display: 'flex', alignItems: 'center', gap: 12 },
    brandLogo: { width:56, height:56 },
    brandTitle: { fontWeight:800, fontSize:20 },
    nav: { display:'flex', gap:28 },

    hero: { display:'flex', alignItems:'center', gap:40, padding:'56px 80px', background:'#fff' },
    heroLeft: { flex:1, background:'#111010', color:'#fff', padding:48, borderRadius:8, minHeight:260 },
    heroTitle: { fontSize:44, fontWeight:800, lineHeight:1.05, margin:0 },
    heroDesc: { color:'#ddd', marginTop:12, maxWidth:520 },
    heroImageWrap: { flex:1, display:'flex', justifyContent:'flex-end' },
    heroImage: { width:480, borderRadius:'40px 0 0 40px', objectFit:'cover' },

    section: { padding:'48px 80px' },
    sectionTitle: { textAlign:'center', fontSize:28, fontWeight:800 },
    sectionDesc: { textAlign:'center', color:'#666', marginTop:8 },

    cardsRow: { display:'flex', gap:24, justifyContent:'center', marginTop:24 },
    card: { width:280, borderRadius:12, border:'1px solid #e6e6e6', padding:18, textAlign:'center', background:'#fff', boxShadow:'0 6px 18px rgba(0,0,0,0.04)' },
    cardImg: { width:'100%', height:160, objectFit:'cover', borderRadius:8, marginBottom:12 },
    cardTitle: { fontWeight:700, marginTop:6 },
    cardText: { fontSize:13, color:'#777' },
    cardBtn: { marginTop:12, padding:'10px 16px', borderRadius:8, border:'1px solid #ddd', background:'#fff', cursor:'pointer' },
    primaryBtn: { marginTop:12, padding:'10px 16px', borderRadius:8, border:'none', background:'#F7931E', color:'#fff', cursor:'pointer' },

    features: { padding:'48px 80px', background:'#FEFCE8' },
    featureRow: { display:'flex', gap:20, justifyContent:'center', marginTop:24 },
    featureCard: { width:260, background:'#fff', padding:18, borderRadius:6, boxShadow:'0 12px 30px rgba(0,0,0,0.06)', textAlign:'center' },
    featureIcon: { fontSize:36, marginBottom:12 },
    featureTitle: { fontWeight:700 },
    featureDesc: { color:'#777', marginTop:8 },

    footer: { padding:'48px 80px', textAlign:'center' }
  }

  return (
    <div style={styles.page}>
      <header style={styles.header}>
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
      </header>

      <section style={styles.hero}>
        <div style={styles.heroLeft}>
          <h1 style={styles.heroTitle}>The Easiest Way To<br/>Make Your<br/>Favorite Meal</h1>
          <p style={styles.heroDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etp</p>
        </div>
        <div style={styles.heroImageWrap}>
          <img src="/images/login-left.png" alt="hero" style={styles.heroImage} />
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Popular Receipeis</h2>
        <p style={styles.sectionDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etp</p>

        <div style={styles.cardsRow}>
          <div style={styles.card}>
            <img src="/images/login-left.png" alt="Bread" style={styles.cardImg} />
            <div style={styles.cardTitle}>Bread</div>
            <div style={styles.cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
            <button style={styles.cardBtn}>See Full Details</button>
          </div>

          <div style={{...styles.card, border: '2px solid #eee'}}>
            <img src="/images/login-left.png" alt="Roast Bread" style={styles.cardImg} />
            <div style={styles.cardTitle}>Roast Bread</div>
            <div style={styles.cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
            <button style={styles.primaryBtn}>See Full Details</button>
          </div>

          <div style={styles.card}>
            <img src="/images/login-left.png" alt="Pizza" style={styles.cardImg} />
            <div style={styles.cardTitle}>Pizza</div>
            <div style={styles.cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
            <button style={styles.cardBtn}>See Full Details</button>
          </div>
        </div>
      </section>

      <section style={styles.features}>
        <h3 style={{textAlign:'center', fontSize:22, fontWeight:800}}>Why You’ll Love It</h3>
        <div style={styles.featureRow}>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🔮</div>
            <div style={styles.featureTitle}>AI Magic</div>
            <div style={styles.featureDesc}>Generate recipes just for you</div>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>♻️</div>
            <div style={styles.featureTitle}>Waste Zero</div>
            <div style={styles.featureDesc}>Uses up expiring ingredients</div>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>📋</div>
            <div style={styles.featureTitle}>Cook Smart</div>
            <div style={styles.featureDesc}>Interactive, Steps, Steps guides</div>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        <div style={{display:'flex', gap:24, justifyContent:'center', color:'#1f7a3a'}}>
          <Link to="#">About</Link>
          <Link to="#">Privacy</Link>
          <Link to="#">Contact</Link>
          <Link to="#">Terms</Link>
        </div>
      </footer>
    </div>
  )
}
