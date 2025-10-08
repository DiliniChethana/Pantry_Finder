import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const styles = {
    header: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 48px', borderBottom: '1px solid #eee' },
    brand: { display: 'flex', alignItems: 'center', gap: 12 },
    hero: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '56px 80px' },
    heroLeft: { flex: 1, background: '#111010', color: '#fff', padding: '48px', borderRadius: 8, minHeight: 260 },
    heroTitle: { fontSize: 36, fontWeight: 800, lineHeight: 1.05, marginBottom: 12 },
    heroDesc: { color: '#ddd', maxWidth: 520 },
    heroImageWrap: { flex: 1, display: 'flex', justifyContent: 'flex-end' },
    heroImage: { width: 420, borderRadius: '40px 0 0 40px', objectFit: 'cover' },
    section: { padding: '48px 80px' },
    sectionTitle: { textAlign: 'center', fontSize: 28, fontWeight: 800 },
    sectionDesc: { textAlign: 'center', color: '#666', marginTop: 8 },
    cardsRow: { display: 'flex', gap: 24, justifyContent: 'center', marginTop: 24 },
    card: { width: 260, borderRadius: 12, border: '1px solid #e6e6e6', padding: 18, textAlign: 'center', background: '#fff' },
    cardImg: { width: '100%', height: 140, objectFit: 'cover', borderRadius: 8, marginBottom: 12 },
    cardTitle: { fontWeight: 700, marginTop: 6 },
    cardText: { fontSize: 13, color: '#777' },
    cardBtn: { marginTop: 12, padding: '8px 12px', borderRadius: 8, border: '1px solid #ddd', background: '#fff', cursor: 'pointer' },
    primaryBtn: { marginTop: 12, padding: '8px 12px', borderRadius: 8, border: 'none', background: '#F7931E', color: '#fff', cursor: 'pointer' },
    features: { padding: '48px 80px', background: '#FEFCE8' },
    featureRow: { display: 'flex', gap: 20, justifyContent: 'center', marginTop: 24 },
    featureCard: { width: 260, background: '#fff', padding: 18, borderRadius: 6, boxShadow: '0 6px 18px rgba(0,0,0,0.06)', textAlign: 'center' },
    footer: { padding: '48px 80px', textAlign: 'center' }
  };

  return (
    <div>
      <header style={styles.header}>
        <div style={styles.brand}>
          <img src="/images/logo-small.png" alt="logo" style={{ width: 44, height: 44 }} />
          <div style={{ fontWeight: 800, fontSize: 20 }}>Pantry Finder</div>
        </div>
        <nav style={{ display: 'flex', gap: 28 }}>
          <Link to="#">Home</Link>
          <Link to="#">Saved Recipes</Link>
          <Link to="#">Pantry</Link>
          <Link to="#">Profile</Link>
        </nav>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroLeft}>
          <div style={styles.heroTitle}>The Easiest Way To<br/>Make Your<br/>Favorite Meal</div>
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

          <div style={{ ...styles.card, border: '2px solid #eee' }}>
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
        <h3 style={{ textAlign: 'center', fontSize: 22, fontWeight: 800 }}>Why You’ll Love It</h3>
        <div style={styles.featureRow}>
          <div style={styles.featureCard}>
            <div style={{ fontWeight: 700 }}>AI Magic</div>
            <div style={{ color: '#777', marginTop: 8 }}>Generate recipes just for you</div>
          </div>
          <div style={styles.featureCard}>
            <div style={{ fontWeight: 700 }}>Waste Zero</div>
            <div style={{ color: '#777', marginTop: 8 }}>Uses up expiring ingredients</div>
          </div>
          <div style={styles.featureCard}>
            <div style={{ fontWeight: 700 }}>Cook Smart</div>
            <div style={{ color: '#777', marginTop: 8 }}>Interactive, Steps, Steps guides</div>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', marginBottom: 24 }}>
          <Link to="#">About</Link>
          <Link to="#">Privacy</Link>
          <Link to="#">Contact</Link>
          <Link to="#">Terms</Link>
        </div>
      </footer>
    </div>
  );
}
