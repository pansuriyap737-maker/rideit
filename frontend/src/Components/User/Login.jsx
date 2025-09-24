import React, { useEffect, useState } from 'react'
import './Login.css'
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        // No auto-redirect based on token anymore
    }, [])

    const parseResponse = async (res) => {
        const contentType = res.headers.get('content-type') || ''
        if (contentType.includes('application/json')) {
            try { return await res.json() } catch (_) {}
        }
        const text = await res.text()
        try { return JSON.parse(text) } catch (_) { return { message: text } }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        if (!email || !password) {
            setError('Please enter email and password')
            return
        }

        setLoading(true)
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            })
            const data = await parseResponse(res)
            if (!res.ok) {
                const msg = (data && data.message && String(data.message).trim()) || 'Login failed'
                throw new Error(msg)
            }

            navigate('/dashboard')
        } catch (err) {
            setError(err.message || 'Login failed')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='login-container'>
            <h2 id='login-title'>Log In</h2>
            <form onSubmit={handleSubmit} className='login-section' autoComplete='off' noValidate>
                <div style={{ height: 0, overflow: 'hidden' }} aria-hidden='true'>
                    <input type='text' name='username' autoComplete='username' tabIndex={-1} />
                    <input type='password' name='password' autoComplete='new-password' tabIndex={-1} />
                </div>
                <label>Email</label>
                <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} autoComplete='off' />

                <label>Password</label>
                <div style={{ position: 'relative', width: '100%' }}>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ paddingRight: '36px', width: '100%' }}
                        autoComplete='new-password'
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword((v) => !v)}
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                        style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', background: 'transparent', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                    >
                        {showPassword ? (
                            // Visible: show open eye (action already visible)
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                        ) : (
                            // Hidden: show crossed eye (action = hide already applied)
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-5 0-9.27-3.89-11-8 1.73-4.11 6-8 11-8 1.66 0 3.25.31 4.68.87" />
                                <path d="M1 1l22 22" />
                                <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                                <path d="M12 5a7 7 0 0 1 7 7" />
                            </svg>
                        )}
                    </button>
                </div>

                {error && <p style={{ color: 'red', margin: '8px 0' }}>{error}</p>}

                <button type='submit' id='log-btn' disabled={loading}>{loading ? 'Logging in...' : 'Log In'}</button>

                <p>Don't have an account? <NavLink to='/register'>Register here</NavLink>  </p>
            </form>
        </div>
    )
}

export default Login