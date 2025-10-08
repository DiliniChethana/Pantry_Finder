import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Profile(){
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [avatar, setAvatar] = useState(null)
  const navigate = useNavigate()

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
    // For now just navigate back to home or show saved state
    alert('Profile saved (demo)')
  }

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '18px 36px',
    borderBottom: '1px solid #eee'
  }

  const logoStyle = { display: 'flex', alignItems: 'center', gap: 12 }
  const navStyle = { display: 'flex', gap: 28, alignItems: 'center', fontSize: 16 }

  const container = { maxWidth: 1000, margin: '40px auto', padding: '0 20px' }

  const title = { textAlign: 'center', fontSize: 28, fontWeight: 700, marginBottom: 18 }

  const avatarWrap = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, marginBottom: 28 }

  const avatarBox = {
    width: 112,
    height: 112,
    borderRadius: 12,
    background: '#eef6ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  }

  const avatarImg = { width: '100%', height: '100%', objectFit: 'cover' }

  const buttonsRow = { display: 'flex', gap: 20 }
  const uploadBtn = { background: '#ff8a00', color: 'white', padding: '12px 34px', borderRadius: 12, border: 'none', cursor: 'pointer' }
  const removeBtn = { background: '#ffd400', color: '#111', padding: '12px 28px', borderRadius: 12, border: 'none', cursor: 'pointer' }

  const formGrid = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px 60px', marginTop: 10 }
  const fieldLabel = { fontSize: 18, marginBottom: 10 }
  const inputStyle = { width: '100%', padding: '16px 18px', borderRadius: 12, border: 'none', background: '#f3f8ff', boxSizing: 'border-box' }

  const footer = { borderTop: '1px solid #eee', marginTop: 48, padding: '18px 0', textAlign: 'center', color: '#2b6b2b' }

  return (
    <div>
      <header style={headerStyle}>
        <div style={logoStyle}>
          <img src="/public/logo192.png" alt="logo" style={{height:42}}/>
          <div style={{fontWeight:800, fontSize:20}}>Pantry Finder</div>
        </div>
        <nav style={navStyle}>
          <a href="/home">Home</a>
          <a href="/saved">Saved Recipes</a>
          <a href="/pantry">Pranty</a>
          <a href="/ingredients">Ingredients</a>
          <a href="/profile" style={{textDecoration:'underline'}}>Profile</a>
        </nav>
      </header>

      <main style={container}>
        <h2 style={title}>Personal Information</h2>

        <div style={avatarWrap}>
          <div style={avatarBox}>
            {avatar ? (
              <img src={avatar} alt="avatar" style={avatarImg} />
            ) : (
              <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="avatar-placeholder" style={{width:80}} />
            )}
          </div>

          <div style={buttonsRow}>
            <label style={{...uploadBtn, display:'inline-block'}}>
              Upload
              <input type="file" accept="image/*" onChange={handleAvatarChange} style={{display:'none'}} />
            </label>
            <button type="button" onClick={handleRemoveAvatar} style={removeBtn}>Remove</button>
          </div>
        </div>

        <form onSubmit={handleSave}>
          <div style={formGrid}>
            <div>
              <div style={fieldLabel}>First Name</div>
              <input style={inputStyle} placeholder="First Name" value={firstName} onChange={e=>setFirstName(e.target.value)}/>
            </div>

            <div>
              <div style={fieldLabel}>Last Name</div>
              <input style={inputStyle} placeholder="Last Name" value={lastName} onChange={e=>setLastName(e.target.value)}/>
            </div>

            <div>
              <div style={fieldLabel}>Phone Number</div>
              <input style={inputStyle} placeholder="Phone No" value={phone} onChange={e=>setPhone(e.target.value)}/>
            </div>

            <div>
              <div style={fieldLabel}>Email</div>
              <input style={inputStyle} placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
            </div>
          </div>

          <div style={{display:'flex', justifyContent:'center', marginTop:30}}>
            <button type="submit" style={{background:'#2b6b2b', color:'white', padding:'12px 28px', borderRadius:10, border:'none', cursor:'pointer'}}>Save</button>
          </div>
        </form>

        <div style={footer}>
          <div style={{display:'flex', justifyContent:'center', gap:28}}>
            <a href="#">About</a>
            <a href="#">Privacy</a>
            <a href="#">Contact</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </main>
    </div>
  )
}
