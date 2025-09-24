import React, { useState } from 'react'
import './register.css'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({ username: '', email: '', phoneno: '', password: '', cnfpass: '' })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [show, setShow] = useState({ password: false, cnfpass: false })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const parseResponse = async (res) => {
    const contentType = res.headers.get('content-type') || ''
    if (contentType.includes('application/json')) {
      try { return await res.json() } catch (_) { /* fallthrough */ }
    }
    const text = await res.text()
    try { return JSON.parse(text) } catch (_) { return { message: text } }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage('')
    setError('')

    if (!form.username || !form.email || !form.phoneno || !form.password || !form.cnfpass) {
      setError('All fields are required')
      return
    }
    if (form.password !== form.cnfpass) {
      setError('Passwords do not match')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      const data = await parseResponse(res)
      if (!res.ok) {
        const msg = (data && data.message && String(data.message).trim()) || 'Registration failed'
        throw new Error(msg)
      }

      setMessage('Registration successful! Redirecting to login...')
      setForm({ username: '', email: '', phoneno: '', password: '', cnfpass: '' })
      setTimeout(() => navigate('/login'), 800)
    } catch (err) {
      setError(err.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='register-container'>
      <h2 id='register-title'>Register</h2>
      <form onSubmit={handleSubmit} className='register-section'>
        <label>Username</label>
        <input type="text" name='username' value={form.username} onChange={handleChange} autoComplete='off'/>

        <label>Email</label>
        <input type="email" name='email' value={form.email} onChange={handleChange}  autoComplete='off'/>

        <label>Phone No</label>
        <input type="tel" name='phoneno' value={form.phoneno} onChange={handleChange}  autoComplete='off'/>

        <label>Password</label>
        <div style={{ position: 'relative', width: '100%' }}>
          <input
            type={show.password ? 'text' : 'password'}
            name='password'
            value={form.password}
            onChange={handleChange}
            autoComplete='off'
            style={{ paddingRight: '36px', width: '100%' }}
          />
          <button
            type='button'
            onClick={() => setShow((s) => ({ ...s, password: !s.password }))}
            aria-label={show.password ? 'Hide password' : 'Show password'}
            style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', background: 'transparent', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          >
            {show.password ? (
              // Visible: open eye
              <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
                <circle cx='12' cy='12' r='3' />
              </svg>
            ) : (
              // Hidden: crossed eye
              <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <path d='M17.94 17.94A10.94 10.94 0 0 1 12 20c-5 0-9.27-3.89-11-8 1.73-4.11 6-8 11-8 1.66 0 3.25.31 4.68.87' />
                <path d='M1 1l22 22' />
                <path d='M9.88 9.88a3 3 0 1 0 4.24 4.24' />
                <path d='M12 5a7 7 0 0 1 7 7' />
              </svg>
            )}
          </button>
        </div>

        <label>Confirm Password</label>
        <div style={{ position: 'relative', width: '100%' }}>
          <input
            type={show.cnfpass ? 'text' : 'password'}
            name='cnfpass'
            value={form.cnfpass}
            onChange={handleChange}
            autoComplete='off'
            style={{ paddingRight: '36px', width: '100%' }}
          />
          <button
            type='button'
            onClick={() => setShow((s) => ({ ...s, cnfpass: !s.cnfpass }))}
            aria-label={show.cnfpass ? 'Hide confirm password' : 'Show confirm password'}
            style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', background: 'transparent', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          >
            {show.cnfpass ? (
              // Visible: open eye
              <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
                <circle cx='12' cy='12' r='3' />
              </svg>
            ) : (
              // Hidden: crossed eye
              <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <path d='M17.94 17.94A10.94 10.94 0 0 1 12 20c-5 0-9.27-3.89-11-8 1.73-4.11 6-8 11-8 1.66 0 3.25.31 4.68.87' />
                <path d='M1 1l22 22' />
                <path d='M9.88 9.88a3 3 0 1 0 4.24 4.24' />
                <path d='M12 5a7 7 0 0 1 7 7' />
              </svg>
            )}
          </button>
        </div>

        {error && <p style={{ color: 'red', margin: '8px 0' }}>{error}</p>}
        {message && <p style={{ color: 'green', margin: '8px 0' }}>{message}</p>}

        <button type='submit' id='reg-btn' disabled={loading}>{loading ? 'Registering...' : 'Register'}</button>
      </form>
    </div>
  )
}

export default Register