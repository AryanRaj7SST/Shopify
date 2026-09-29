import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../services/api.js'
import authImg from '../assets/reg.jpg'
import {
  UserIcon,
  MailIcon,
  PhoneIcon,
  LockIcon,
  EyeIcon,
  EyeOffIcon
} from '../components/Icons.jsx'

function Register() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!form.fullName || !form.email || !form.password) {
      setError('Please fill in all required fields')
      return
    }

    if (form.password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    try {
      setLoading(true)
      const payload = {
        fullName: form.fullName.trim(),
        email: form.email.trim(),
        password: form.password,
        phone: form.phone ? form.phone.trim() : '+91 98765 43210',
      }
      await api.post('/customers/register', payload)
      navigate('/login')
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong, try again')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        {/* Top bar */}
        <header className="auth-topbar">
          <Link to="/" className="brand">
            Shop<span>Kart</span>
          </Link>
          <div className="topbar-right">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </header>

        {/* Main Card */}
        <main className="auth-card-container">
          <div className="auth-card">
            {/* Left Visual Banner */}
            <div className="auth-visual">
              <img src={authImg} alt="Shop smarter, live better" />
            </div>

            {/* Right Form Panel */}
            <div className="auth-form-panel">
              <div className="auth-form-content">
                <h2>Create your account</h2>
                <p className="subtitle">Join ShopKart in just a few steps.</p>

                {error && <div className="error-banner">{error}</div>}

                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <div className="input-wrap">
                      <span className="field-icon"><UserIcon /></span>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        autoComplete="name"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <div className="input-wrap">
                      <span className="field-icon"><MailIcon /></span>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">
                      Phone Number <span className="label-optional">(optional)</span>
                    </label>
                    <div className="input-wrap">
                      <span className="field-icon"><PhoneIcon /></span>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <div className="input-wrap">
                      <span className="field-icon"><LockIcon /></span>
                      <input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder="Create a password"
                        autoComplete="new-password"
                      />
                      <button
                        type="button"
                        className="toggle-password-btn"
                        onClick={() => setShowPassword(!showPassword)}
                        tabIndex={-1}
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                      </button>
                    </div>
                  </div>

                  <button type="submit" className="auth-submit submit-spacing" disabled={loading}>
                    {loading ? 'Creating account...' : 'Create Account'}
                  </button>
                </form>

                <p className="switch-link">
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="auth-footer">
          <div className="footer-copyright">
            © 2026 ShopKart. All rights reserved.
          </div>
          <div className="footer-links">
            <a href="#terms">Terms</a>
            <a href="#privacy">Privacy</a>
            <a href="#help">Help</a>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Register