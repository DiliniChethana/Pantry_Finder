import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function PantrySelector(){
  const [selected, setSelected] = useState([])
  const [input, setInput] = useState('')

  const addItem = () => {
    if (!input) return
    setSelected(prev => [...prev, input])
    setInput('')
  }

  const removeItem = (idx) => {
    setSelected(prev => prev.filter((_, i) => i !== idx))
  }

  const styles = {
    page: { fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif", color: '#222', margin: 0, background: '#fff' },
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 60px', background: '#fff', borderBottom: '1px solid #f0f0f0' },
    brand: { display: 'flex', alignItems: 'center', gap: 10 },
    brandLogo: { width: 35, height: 35 },
    brandTitle: { fontWeight: 700, fontSize: 20, color: '#222' },
    nav: { display: 'flex', gap: 36, alignItems: 'center' },
    navLink: { textDecoration: 'none', color: '#222', fontWeight: 500, fontSize: 15 },

    hero: { display: 'flex', alignItems: 'center', background: '#000', color: '#fff', padding: '60px 0', minHeight: '280px' },
    heroContent: { display: 'flex', alignItems: 'center', maxWidth: '1400px', margin: '0 auto', width: '100%', padding: '0 80px' },
    heroLeft: { flex: 1, paddingRight: 80 },
    heroTitle: { fontSize: 48, fontWeight: 700, lineHeight: 1.15, margin: 0, marginBottom: 18 },
    heroDesc: { color: '#d0d0d0', fontSize: 15, lineHeight: 1.6, maxWidth: 450 },
    heroImageWrap: { flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' },
    heroImage: { maxWidth: 500, width: '100%', height: 'auto', objectFit: 'cover', borderRadius: 8 },

    content: { display: 'flex', gap: 60, padding: '60px 80px', alignItems: 'flex-start', background: '#fff' },
    leftCol: { flex: 1, maxWidth: 500 },
    rightCol: { flex: 1 },
    heading: { fontSize: 32, fontWeight: 700, marginBottom: 20, color: '#222' },
    inputWrapper: { marginBottom: 24 },
    input: { width: '100%', padding: '16px 18px', borderRadius: 4, border: '1px solid #ccc', fontSize: 15, boxSizing: 'border-box', outline: 'none' },
    generateBtn: { background: '#F7931E', color: '#fff', padding: '14px 40px', borderRadius: 4, border: 'none', fontWeight: 700, fontSize: 16, cursor: 'pointer', transition: 'all 0.2s' },
    
    selectedGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 20 },
    chip: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', border: '1px solid #ccc', borderRadius: 6, background: '#fff', fontSize: 15 },
    chipText: { color: '#222', fontWeight: 500 },
    removeBtn: { background: 'transparent', border: 'none', fontSize: 20, cursor: 'pointer', marginLeft: 8, color: '#666', padding: 0, lineHeight: 1 },
    empty: { color: '#999', gridColumn: 'span 3', textAlign: 'center', padding: '40px 20px' },

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
          <Link to="/ingredients" style={styles.navLink}>Ingredeints</Link>
          <Link to="/profile" style={styles.navLink}>Profile</Link>
        </nav>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.heroLeft}>
            <h1 style={styles.heroTitle}>Time to get<br/>Cooking!</h1>
            <p style={styles.heroDesc}>Lorem ipsum dolor sit amet, consecteturr adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
          </div>
          <div style={styles.heroImageWrap}>
            <img src="/images/cooking-ingredients.jpg" onError={(e) => e.target.src='/images/login-left.png'} alt="Cooking ingredients" style={styles.heroImage} />
          </div>
        </div>
      </section>

      <section style={styles.content}>
        <div style={styles.leftCol}>
          <h2 style={styles.heading}>What is in Your<br/>Pantry?</h2>
          <div style={styles.inputWrapper}>
            <input 
              style={styles.input} 
              placeholder="Select Item On Your Pranty" 
              value={input} 
              onChange={e => setInput(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && addItem()}
            />
          </div>
          <button style={styles.generateBtn} onClick={addItem}>Generate</button>
        </div>

        <div style={styles.rightCol}>
          <h2 style={styles.heading}>Selected Item</h2>
          <div style={styles.selectedGrid}>
            {selected.length === 0 && <div style={styles.empty}>No items selected</div>}
            {selected.map((item, idx) => (
              <div style={styles.chip} key={idx}>
                <span style={styles.chipText}>{item}</span>
                <button style={styles.removeBtn} onClick={() => removeItem(idx)}>×</button>
              </div>
            ))}
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

