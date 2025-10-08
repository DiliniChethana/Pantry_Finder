import React, { useState } from 'react'

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
    page: { fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif", color: '#222' },
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 56px', borderBottom: '1px solid #eee', background: '#fff' },
    brand: { display: 'flex', alignItems: 'center', gap: 12 },
    brandLogo: { width: 56, height: 56 },
    brandTitle: { fontWeight: 800, fontSize: 20 },
    nav: { display: 'flex', gap: 20, alignItems: 'center' },
    navLink: { color: '#111', textDecoration: 'none', fontWeight: 600 },

    hero: { display: 'flex', alignItems: 'center', gap: 24, padding: '48px 40px', background: '#fff' },
    heroLeft: { flex: 1, background: '#000', color: '#fff', padding: 48, borderRadius: 8 },
    heroTitle: { fontSize: 40, fontWeight: 800, lineHeight: 1.05, margin: 0 },
    heroDesc: { color: '#ddd', marginTop: 16, maxWidth: 520 },
    heroRightImg: { width: 420, borderRadius: 12, objectFit: 'cover' },

    content: { display: 'flex', gap: 40, padding: '40px 56px', alignItems: 'flex-start' },
    leftCol: { flex: 1 },
    rightCol: { flex: 1 },
    heading: { fontSize: 28, fontWeight: 800, marginBottom: 12 },
    input: { width: '100%', padding: '14px 16px', borderRadius: 4, border: '1px solid #ddd', fontSize: 16, boxSizing: 'border-box' },
    generateBtn: { marginTop: 20, background: '#F7931E', color: '#fff', padding: '12px 28px', borderRadius: 4, border: 'none', fontWeight: 800, fontSize: 18, cursor: 'pointer' },

    selectedGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginTop: 12 },
    chip: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', border: '1px solid #ddd', borderRadius: 6 },
    removeBtn: { background: 'transparent', border: 'none', fontSize: 18, cursor: 'pointer', marginLeft: 8 },
    empty: { color: '#666' },

    footer: { padding: '24px 56px', borderTop: '1px solid #eee', textAlign: 'center', marginTop: 24 }
  }

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.brand}>
          <img src="/images/logo-small.png" alt="logo" style={styles.brandLogo} />
          <div style={styles.brandTitle}>Pantry Finder</div>
        </div>
        <nav style={styles.nav}>
          <a href="/home" style={styles.navLink}>Home</a>
          <a href="/saved" style={styles.navLink}>Saved Recipes</a>
          <a href="/pantry" style={{...styles.navLink, textDecoration: 'underline'}}>Pantry</a>
          <a href="/profile" style={styles.navLink}>Profile</a>
        </nav>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroLeft}>
          <h1 style={styles.heroTitle}>Time to get<br/>Cooking!</h1>
          <p style={styles.heroDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        </div>
        <div>
          <img src="/images/login-left.png" alt="hero" style={styles.heroRightImg} />
        </div>
      </section>

      <section style={styles.content}>
        <div style={styles.leftCol}>
          <h2 style={styles.heading}>What is in Your Pantry?</h2>
          <input style={styles.input} placeholder="Select Item On Your Pantry" value={input} onChange={e=>setInput(e.target.value)} />
          <button style={styles.generateBtn} onClick={addItem}>Generate</button>
        </div>

        <div style={styles.rightCol}>
          <h2 style={styles.heading}>Selected Item</h2>
          <div style={styles.selectedGrid}>
            {selected.length===0 && <div style={styles.empty}>No items selected</div>}
            {selected.map((it, idx)=> (
              <div style={styles.chip} key={idx}>
                <span>{it}</span>
                <button style={styles.removeBtn} onClick={()=>removeItem(idx)}>×</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        <div style={{color:'#1f7a3a', display:'flex', gap:24, justifyContent:'center'}}>
          <a href="#">About</a>
          <a href="#">Privacy</a>
          <a href="#">Contact</a>
          <a href="#">Terms</a>
        </div>
      </footer>
    </div>
  )
}

