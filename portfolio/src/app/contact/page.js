'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function StageBedrijfForm() {
  const [formData, setFormData] = useState({
    bedrijfsnaam: '',
    email: '',
    telefoon: '',
    bericht: ''
  });
  const [message, setMessage] = useState('');

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch('/api/saveBedrijf.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setMessage('Bedrijf succesvol opgeslagen!');
      setFormData({ bedrijfsnaam: '', email: '', telefoon: '', bericht: '' });
    } else {
      setMessage('Er is iets mis gegaan.');
    }
  }

  // Stijlen met goede leesbaarheid (zwart op licht)
  const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '18px',
    borderRadius: '8px',
    border: '1.5px solid #b7a1e2',
    fontSize: '15px',
    background: '#f7f6fd',
    color: '#000'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '600',
    color: '#32a83e'
  };

  return (
    <div style={{
      maxWidth: '430px',
      margin: '60px auto',
      padding: '35px 30px',
      background: '#fff',
      borderRadius: '18px',
      boxShadow: '0 0 30px rgba(106,13,173,0.15)',
      fontFamily: "'Poppins', sans-serif"
    }}>
      <h2 style={{
        textAlign: 'center',
        marginBottom: '26px',
        color: '#32a83e',
        fontWeight: '700'
      }}>Stagebedrijf aanmelden</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="bedrijfsnaam" style={labelStyle}>Bedrijfsnaam</label>
        <input
          id="bedrijfsnaam"
          name="bedrijfsnaam"
          value={formData.bedrijfsnaam}
          onChange={handleChange}
          placeholder="Bedrijfsnaam"
          required
          style={inputStyle}
        />
        <label htmlFor="email" style={labelStyle}>E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="E-mail"
          required
          style={inputStyle}
        />
        <label htmlFor="telefoon" style={labelStyle}>Telefoonnummer</label>
        <input
          id="telefoon"
          name="telefoon"
          type="tel"
          value={formData.telefoon}
          onChange={handleChange}
          placeholder="Telefoonnummer"
          required
          style={inputStyle}
        />
        <label htmlFor="bericht" style={labelStyle}>Bericht (optioneel)</label>
        <textarea
          id="bericht"
          name="bericht"
          value={formData.bericht}
          onChange={handleChange}
          placeholder="Bericht"
          style={{
            ...inputStyle,
            minHeight: '60px',
            resize: 'vertical'
          }}
        />
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '13px',
            backgroundColor: '#32a83e',
            color: 'white',
            fontWeight: '700',
            fontSize: '16px',
            borderRadius: '10px',
            border: 'none',
            marginBottom: '10px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = '#380076'}
          onMouseOut={e => e.currentTarget.style.backgroundColor = '#6a0dad'}
        >
          Verstuur
        </button>
      </form>
      {message && <p style={{
        marginTop: '12px',
        textAlign: 'center',
        color: '#6a0dad',
        fontWeight: '600'
      }}>{message}</p>}

      <Link
        href="/"
        style={{
          display: 'inline-block',
          width: '100%',
          padding: '11px',
          backgroundColor: '#ece7fa',
          color: '#32a83e',
          fontWeight: '700',
          fontSize: '15px',
          borderRadius: '8px',
          textAlign: 'center',
          cursor: 'pointer',
          textDecoration: 'none',
        }}
      >
        Terug naar portfolio
      </Link>
    </div>
  );
}
