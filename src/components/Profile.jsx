import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Profile(){
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [avatar, setAvatar] = useState(null)

  const handleAvatarChange = (e) => {
    const file = e.target.files[0]
    if(!file) return
    const reader = new FileReader()
    reader.onload = () => setAvatar(reader.result)
    reader.readAsDataURL(file)
  }

  const handleRemoveAvatar = () => setAvatar(null)

  const handleSave = (e) => {
    e.preventDefault()
    alert('Profile saved (demo)')
  }

  const styles = {
    page: { fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif", color: '#222', margin: 0, background: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column' },
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 60px', background: '#fff', borderBottom: '1px solid #f0f0f0' },
    brand: { display: 'flex', alignItems: 'center', gap: 10 },
    brandLogo: { width: 35, height: 35 },
    brandTitle: { fontWeight: 700, fontSize: 20, color: '#222' },
    nav: { display: 'flex', gap: 36, alignItems: 'center' },
    navLink: { textDecoration: 'none', color: '#222', fontWeight: 500, fontSize: 15 },

    main: { flex: 1, padding: '60px 80px', background: '#fafafa' },
    container: { maxWidth: 900, margin: '0 auto', background: '#fff', padding: '50px 60px', borderRadius: 8 },
    title: { textAlign: 'center', fontSize: 32, fontWeight: 700, marginBottom: 40, color: '#222' },

    avatarWrap: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, marginBottom: 50 },
    avatarBox: {
      width: 120,
      height: 120,
      borderRadius: '50%',
      background: '#6B7FD7',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      border: '4px solid #5a6bc5'
    },
    avatarImg: { width: '100%', height: '100%', objectFit: 'cover' },
    defaultAvatar: { 
      width: '100%', 
      height: '100%', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center' 
    },
    
    buttonsRow: { display: 'flex', gap: 16 },
    uploadBtn: { 
      background: '#F7931E', 
      color: '#fff', 
      padding: '12px 36px', 
      borderRadius: 8, 
      border: 'none', 
      cursor: 'pointer', 
      fontWeight: 600,
      fontSize: 15
    },
    removeBtn: { 
      background: '#FFD700', 
      color: '#000', 
      padding: '12px 36px', 
      borderRadius: 8, 
      border: 'none', 
      cursor: 'pointer', 
      fontWeight: 600,
      fontSize: 15
    },

    formGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px 40px' },
    fieldLabel: { fontSize: 16, marginBottom: 8, fontWeight: 600, color: '#222' },
    inputStyle: { 
      width: '100%', 
      padding: '14px 18px', 
      borderRadius: 8, 
      border: '1px solid #e0e0e0', 
      background: '#f5f5ff', 
      boxSizing: 'border-box',
      fontSize: 15,
      outline: 'none'
    },

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

      <main style={styles.main}>
        <div style={styles.container}>
          <h2 style={styles.title}>Personal Information</h2>

          <div style={styles.avatarWrap}>
            <div style={styles.avatarBox}>
              {avatar ? (
                <img src={avatar} alt="avatar" style={styles.avatarImg} />
              ) : (
                <div style={styles.defaultAvatar}>
                  <svg width="70" height="70" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="32" cy="22" r="12" fill="white"/>
                    <path d="M16 52 C16 52 16 40 32 40 C48 40 48 52 48 52" fill="white"/>
                  </svg>
                </div>
              )}
            </div>

            <div style={styles.buttonsRow}>
              <label style={{...styles.uploadBtn, display:'inline-block', cursor: 'pointer'}}>
                Upload
                <input type="file" accept="image/*" onChange={handleAvatarChange} style={{display:'none'}} />
              </label>
              <button type="button" onClick={handleRemoveAvatar} style={styles.removeBtn}>Remove</button>
            </div>
          </div>

          <form onSubmit={handleSave}>
            <div style={styles.formGrid}>
              <div>
                <div style={styles.fieldLabel}>First Name</div>
                <input 
                  style={styles.inputStyle} 
                  placeholder="First Name" 
                  value={firstName} 
                  onChange={e => setFirstName(e.target.value)}
                />
              </div>

              <div>
                <div style={styles.fieldLabel}>Last Name</div>
                <input 
                  style={styles.inputStyle} 
                  placeholder="Last Name" 
                  value={lastName} 
                  onChange={e => setLastName(e.target.value)}
                />
              </div>

              <div>
                <div style={styles.fieldLabel}>Phone Number</div>
                <input 
                  style={styles.inputStyle} 
                  placeholder="Phone No" 
                  value={phone} 
                  onChange={e => setPhone(e.target.value)}
                />
              </div>

              <div>
                <div style={styles.fieldLabel}>Email</div>
                <input 
                  style={styles.inputStyle} 
                  placeholder="Email" 
                  type="email"
                  value={email} 
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>
          </form>
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
