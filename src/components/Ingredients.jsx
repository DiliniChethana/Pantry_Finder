import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Ingredients(){
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [units, setUnits] = useState('')
  const [usedBy, setUsedBy] = useState('')
  const navigate = useNavigate()

  const handleAdd = (e) => {
    e.preventDefault()
    // TODO: wire to backend API
    console.log('Add ingredient', { name, quantity, units, usedBy })
    // simple visual confirmation then reset
    alert('Ingredient added to pantry (local only)')
    setName('')
    setQuantity('')
    setUnits('')
    setUsedBy('')
  }

  const handleCancel = () => {
    navigate('/pantry')
  }

  const styles = {
    page: {
      fontFamily: "'Poppins', sans-serif",
      color: '#0b0b0b',
      paddingTop: 0,
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 40px',
      borderBottom: '1px solid #e6e6e6'
    },
    logo: { display: 'flex', alignItems: 'center' },
    nav: { display: 'flex', gap: 28, alignItems: 'center' },
    navLink: { textDecoration: 'none', color: '#111', fontSize: 16 },
    container: { display: 'flex', minHeight: '78vh' },
    left: { flex: 1, backgroundColor: '#fff', padding: 0 },
    heroImg: { width: '100%', height: '100%', objectFit: 'cover' },
    right: { flex: 1, padding: '40px 80px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' },
    title: { fontSize: 28, fontWeight: 700, marginBottom: 30 },
    formGrid: { width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'start' },
    fieldLabel: { fontSize: 18, marginBottom: 10 },
    input: { width: '100%', padding: '18px 22px', borderRadius: 12, border: 'none', background: '#f3f7fb', fontSize: 15, color: '#666' },
    actions: { marginTop: 28, display: 'flex', gap: 20, alignItems: 'center' },
    addBtn: { background: '#ff8a3d', color: 'white', border: 'none', padding: '12px 28px', borderRadius: 18, fontWeight: 600, cursor: 'pointer' },
    cancelBtn: { background: '#dcdcdc', color: '#111', border: 'none', padding: '12px 28px', borderRadius: 18, fontWeight: 600, cursor: 'pointer' },
    footer: { borderTop: '1px solid #e6e6e6', padding: '20px 0', textAlign: 'center', color: '#2f6f2f' },
  }

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.logo}>
          <img src="/public/logo192.png" alt="logo" style={{ height: 42, marginRight: 12 }} />
          <h2 style={{ margin: 0 }}>Pantry Finder</h2>
        </div>
        <nav style={styles.nav}>
          <a href="/home" style={styles.navLink}>Home</a>
          <a href="/saved" style={styles.navLink}>Saved Recipes</a>
          <a href="/pantry" style={styles.navLink}>Pranty</a>
          <a href="/ingredients" style={{ ...styles.navLink, textDecoration: 'underline' }}>Ingredeints</a>
          <a href="/profile" style={styles.navLink}>Profile</a>
        </nav>
      </header>

      <div style={styles.container}>
        <div style={styles.left}>
          <img src="/images/login-left.png" alt="food" style={styles.heroImg} />
        </div>

        <div style={styles.right}>
          <h3 style={styles.title}>Add New Ingredients</h3>

          <form style={styles.formGrid} onSubmit={handleAdd}>
            <div>
              <label style={styles.fieldLabel}>Ingredient Name</label>
              <input value={name} onChange={e=>setName(e.target.value)} placeholder="Ingredients" style={styles.input} />
            </div>

            <div>
              <label style={styles.fieldLabel}>Quantity</label>
              <input value={quantity} onChange={e=>setQuantity(e.target.value)} placeholder="Quantity" style={styles.input} />
            </div>

            <div>
              <label style={styles.fieldLabel}>Units</label>
              <input value={units} onChange={e=>setUnits(e.target.value)} placeholder="Units" style={styles.input} />
            </div>

            <div>
              <label style={styles.fieldLabel}>Used by Date</label>
              <input value={usedBy} onChange={e=>setUsedBy(e.target.value)} placeholder="Exoired Date" style={styles.input} />
            </div>

            <div style={{ gridColumn: '1 / span 1', marginTop: 18 }}>
              <button type="submit" style={styles.addBtn}>Add to Pantry</button>
            </div>

            <div style={{ gridColumn: '2 / span 1', marginTop: 18 }}>
              <button type="button" onClick={handleCancel} style={styles.cancelBtn}>Cancel</button>
            </div>
          </form>
        </div>
      </div>

      <footer style={styles.footer}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 28 }}>
          <a href="#">About</a>
          <a href="#">Privacy</a>
          <a href="#">Contact</a>
          <a href="#">Terms</a>
        </div>
      </footer>
    </div>
  )
}
