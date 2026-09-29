import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../services/api.js'
import authImg from '../assets/log.jpg'
import {
  MailIcon,
  LockIcon,
  EyeIcon,
  EyeOffIcon
} from '../components/Icons.jsx'

function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [rememberMe, setRememberMe] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!form.email || !form.password) {
      setError('Please enter both email and password')
      return
    }

    try {
      setLoading(true)
      await api.post('/customers/login', form)
      navigate('/home')
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid Credentials')
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
            New to ShopKart? <Link to="/register">Create account</Link>
          </div>
        </header>

        {/* Main Card */}
        <main className="auth-card-container">
          <div className="auth-card">
            {/* Left Visual Banner */}
            <div className="auth-visual">
              <img src={authImg} alt="Welcome back to ShopKart" />
            </div>

            {/* Right Form Panel */}
            <div className="auth-form-panel">
              <div className="auth-form-content">
                <h2>Login to ShopKart</h2>
                <p className="subtitle">Glad to see you again!</p>

                {error && <div className="error-banner">{error}</div>}

                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-group">
                    <label htmlFor="login-email">Email Address</label>
                    <div className="input-wrap">
                      <span className="field-icon"><MailIcon /></span>
                      <input
                        id="login-email"
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
                    <label htmlFor="login-password">Password</label>
                    <div className="input-wrap">
                      <span className="field-icon"><LockIcon /></span>
                      <input
                        id="login-password"
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        autoComplete="current-password"
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

                  <div className="login-options-row">
                    <label className="custom-checkbox">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                      />
                      <span className="checkbox-box"></span>
                      <span className="checkbox-text">Remember me</span>
                    </label>
                    <a href="#forgot" className="forgot-link">
                      Forgot password?
                    </a>
                  </div>

                  <button type="submit" className="auth-submit submit-spacing" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                  </button>
                </form>

                <p className="switch-link">
                  New to ShopKart? <Link to="/register">Create account</Link>
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

export default Login