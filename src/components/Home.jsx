import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  const styles = {
    page: { fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif", color: '#222', margin: 0, background: '#fff' },
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 60px', background: '#fff', borderBottom: '1px solid #f0f0f0' },
    brand: { display: 'flex', alignItems: 'center', gap: 10 },
    brandLogo: { width:35, height:35 },
    brandTitle: { fontWeight:700, fontSize:20, color: '#222' },
    nav: { display:'flex', gap:36, alignItems: 'center' },
    navLink: { textDecoration: 'none', color: '#222', fontWeight: 500, fontSize: 15 },
    profileLink: { textDecoration: 'none', color: '#222', fontWeight: 500, fontSize: 15 },

    hero: { display:'flex', alignItems:'center', background:'#2b2b2b', color:'#fff', padding:'70px 0', minHeight: '330px' },
    heroContent: { display:'flex', alignItems:'center', maxWidth: '1400px', margin: '0 auto', width: '100%', padding: '0 80px' },
    heroLeft: { flex:1, paddingRight: 80 },
    heroTitle: { fontSize:44, fontWeight:700, lineHeight:1.15, margin:0, marginBottom: 18 },
    heroDesc: { color:'#d0d0d0', fontSize: 15, lineHeight: 1.6, maxWidth:450 },
    heroImageWrap: { flex:1, display:'flex', justifyContent:'flex-end', alignItems: 'center' },
    heroImage: { maxWidth:500, width: '100%', height: 'auto', objectFit:'cover', borderRadius: 8 },

    section: { padding:'70px 80px', background: '#fff' },
    sectionTitle: { textAlign:'center', fontSize:34, fontWeight:700, marginBottom: 10 },
    sectionDesc: { textAlign:'center', color:'#666', fontSize: 15, marginBottom: 50 },

    cardsRow: { display:'flex', gap:24, justifyContent:'center' },
    card: { width:280, borderRadius:20, border:'2px solid #e0e0e0', padding:16, textAlign:'center', background:'#fff' },
    cardImgWrap: { width:'100%', height:160, borderRadius:16, marginBottom:14, overflow: 'hidden', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' },
    cardImg: { width:'100%', height:'100%', objectFit:'cover' },
    cardTitle: { fontWeight:700, fontSize: 18, marginBottom: 10, color: '#222' },
    cardText: { fontSize:13, color:'#666', lineHeight: 1.5, marginBottom: 14 },
    cardBtn: { padding:'10px 22px', borderRadius:6, border:'1px solid #222', background:'#fff', cursor:'pointer', fontWeight: 600, fontSize: 13 },
    primaryBtn: { padding:'10px 22px', borderRadius:6, border:'none', background:'#F7931E', color:'#fff', cursor:'pointer', fontWeight: 600, fontSize: 13 },

    features: { padding:'70px 80px', background:'#2b2b2b', color: '#fff' },
    featuresTitle: { textAlign:'center', fontSize:34, fontWeight:700, marginBottom: 0, color: '#fff' },
    featureRow: { display:'flex', gap:20, justifyContent:'center', marginTop:50, maxWidth: '1200px', margin: '50px auto 0' },
    featureCard: { flex: 1, maxWidth: 350, background:'#f5f5f5', padding:36, borderRadius:6, textAlign:'center' },
    featureIconWrap: { marginBottom:14 },
    featureSvg: { width: 60, height: 60 },
    featureTitle: { fontWeight:700, fontSize: 19, marginBottom: 10, color: '#222' },
    featureDesc: { color:'#666', fontSize: 14, lineHeight: 1.5 },

    footer: { padding:'36px 80px', textAlign:'center', background: '#fff' },
    footerLinks: { display:'flex', gap:28, justifyContent:'center' },
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
          <Link to="/profile" style={styles.profileLink}>Profile</Link>
        </nav>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.heroLeft}>
            <h1 style={styles.heroTitle}>The Easiest Way To<br/>Make Your<br/>Favorite Meal</h1>
            <p style={styles.heroDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etp</p>
          </div>
          <div style={styles.heroImageWrap}>
            <img src="/images/hero-breads.jpg" onError={(e) => e.target.src='/images/login-left.png'} alt="Delicious breads" style={styles.heroImage} />
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Popular Receipeis</h2>
        <p style={styles.sectionDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etp</p>

        <div style={styles.cardsRow}>
          <div style={styles.card}>
            <div style={styles.cardImgWrap}>
              <img src="/images/bread.jpg" onError={(e) => e.target.src='/images/login-left.png'} alt="Bread" style={styles.cardImg} />
            </div>
            <div style={styles.cardTitle}>Bread</div>
            <div style={styles.cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
            <button style={styles.cardBtn}>See Full Details</button>
          </div>

          <div style={styles.card}>
            <div style={styles.cardImgWrap}>
              <img src="/images/roast-bread.jpg" onError={(e) => e.target.src='/images/login-left.png'} alt="Roast Bread" style={styles.cardImg} />
            </div>
            <div style={styles.cardTitle}>Roast Bread</div>
            <div style={styles.cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
            <button style={styles.primaryBtn}>See Full Details</button>
          </div>

          <div style={styles.card}>
            <div style={styles.cardImgWrap}>
              <img src="/images/pizza.jpg" onError={(e) => e.target.src='/images/login-left.png'} alt="Pizza" style={styles.cardImg} />
            </div>
            <div style={styles.cardTitle}>Pizza</div>
            <div style={styles.cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
            <button style={styles.cardBtn}>See Full Details</button>
          </div>
        </div>
      </section>

      <section style={styles.features}>
        <h3 style={styles.featuresTitle}>Why You'll Love It</h3>
        <div style={styles.featureRow}>
          <div style={styles.featureCard}>
            <div style={styles.featureIconWrap}>
              <svg style={styles.featureSvg} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="20" r="10" fill="#FCD34D" stroke="#222" strokeWidth="2"/>
                <path d="M32 30 L32 38" stroke="#222" strokeWidth="2" strokeLinecap="round"/>
                <path d="M28 38 L36 38" stroke="#222" strokeWidth="2" strokeLinecap="round"/>
                <path d="M28 42 L36 42" stroke="#222" strokeWidth="2" strokeLinecap="round"/>
                <path d="M30 42 L28 50 M34 42 L36 50" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round"/>
                <path d="M24 50 L26 56 M40 50 L38 56" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div style={styles.featureTitle}>AI Magic</div>
            <div style={styles.featureDesc}>Generate recipes just for you</div>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.featureIconWrap}>
              <svg style={styles.featureSvg} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 12 L38 18 L36 28 L42 28 L26 52 L28 36 L22 36 Z" fill="#4ADE80" stroke="#222" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M18 20 C18 20 16 24 20 28 C24 32 20 36 20 36" stroke="#222" strokeWidth="2" strokeLinecap="round"/>
                <path d="M46 20 C46 20 48 24 44 28 C40 32 44 36 44 36" stroke="#222" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div style={styles.featureTitle}>Waste Zero</div>
            <div style={styles.featureDesc}>Uses up expiring ingredients</div>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.featureIconWrap}>
              <svg style={styles.featureSvg} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="16" y="12" width="32" height="40" rx="2" fill="#4ADE80" stroke="#222" strokeWidth="2"/>
                <path d="M22 22 L42 22 M22 28 L42 28 M22 34 L42 34 M22 40 L36 40" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div style={styles.featureTitle}>Cook Smart</div>
            <div style={styles.featureDesc}>Interactive, Steps, Steps guides</div>
          </div>
        </div>
      </section>

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
