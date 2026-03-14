import { useState, useEffect } from 'react'
import './App.css'
import BackgroundParticles from './BackgroundParticles';
import Home from './pages/Home';
import Products from './pages/Products';
import Forum from './pages/Forum';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Terms from './pages/Legal/Terms';
import Refund from './pages/Legal/Refund';
import Privacy from './pages/Legal/Privacy';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import ResetPassword from './pages/Login/ResetPassword';
import UpdatePassword from './pages/Login/UpdatePassword';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { supabase } from './supabaseClient';

function App() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const DiscordLink = 'https://discord.gg/7zqTJ4FGcc';
  const location = useLocation();

  useEffect(() => {
    const remembered = localStorage.getItem('rememberMe') === 'true';
    if (remembered) {
      supabase.auth.getSession().then(({ data }) => {
        if (data.session) {
          setIsLoggedIn(true);
        }
      });
    }
  }, [])

  const handleCartClick = () => {
    navigate('/cart')
    setIsMenuOpen(false);
  }

  const handleLegalClick = (path: string) => {
    navigate(path);
    setIsLegalOpen(false);
    setIsMenuOpen(false);
  }

  const HandleLoginClick = () => {
    if (!isLoggedIn) {
      console.log("Not logged in")
      navigate('/login')
      setIsMenuOpen(false);
    } else {
      console.log("Logged in")
      navigate('/profile')
      setIsMenuOpen(false);
    }
  }

  if (location.pathname === '/login' || location.pathname === '/register' || location.pathname === "/resetpassword" || location.pathname === "/updatepassword") {
    return (
      <div className="bg-black-red">
        <BackgroundParticles />
        <Routes>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/updatepassword" element={<UpdatePassword />} />
        </Routes>
      </div>
    )
  }

    return (
    <>
      <div className="bg-black-red">
        <BackgroundParticles />
        <header className="navbar">
        <div className="nav-container">

          {/* LEFT */}
          <div className="nav-left">
            <div className="BrandLogo">
              <img src="/hoosky.png"></img>
            </div>
            <div className="BrandTitles">
              <p>Hoosky Services</p>
              <p>Freelance Developer</p>
            </div>
          </div>

          <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={isMenuOpen ? "fa fa-times" : "fa fa-bars"}></i>
          </div>

          {/* Center */}

          <nav className={`nav-center ${isMenuOpen ? 'open' : ''}`}>
            <a className={location.pathname === '/' ? 'selected' : ''} onClick={() => {navigate('/'); setIsMenuOpen(false)}}>Home</a>
            <a className={location.pathname === '/products' ? 'selected' : ''} onClick={() => {navigate('/products'); setIsMenuOpen(false)}}>Products</a>
            <a className={location.pathname === '/forum' ? 'selected' : ''} onClick={() => {navigate('/forum'); setIsMenuOpen(false)}}>Forum</a>
            
            {/* <a className={activeTab === 'legal' ? 'selected': ''}>Legal</a> */}

            <div className="dropdown-wrapper" onMouseEnter={() => setIsLegalOpen(true)} onMouseLeave={() => setIsLegalOpen(false)}>
              <a className={`dropdown-trigger ${['/terms', '/privacy', '/refund'].includes(location.pathname) ? 'selected' : ''}`}>
                Legal <i className={`fa fa-chevron-down ${isLegalOpen ? 'rotate' : ''}`}></i>
              </a>

              {isLegalOpen && (
                <div className="dropdown-menu">
                  <a onClick={() => {handleLegalClick('/terms')}}>Terms & Conditions</a>
                  <a onClick={() => {handleLegalClick('/privacy')}}>Privacy Policy</a>
                  <a onClick={() => {handleLegalClick('/refund')}}>Refund Policy</a>
                </div>
              )}
            </div>
          
            <div className="mobile-menu-actions">
              <div className="nav-actions">
                <div className="cart" onClick={handleCartClick}><i className="fa fa-shopping-basket"></i></div>
                <div className="profile" onClick={HandleLoginClick}><i className="fa fa-user"></i></div>
              </div>
              <div className="Advertise">
                <text>Join Discord</text>
                <img src="/Discord_White.webp" className="discordLogo" alt="Discord" />
              </div>
            </div>

            {/* <div className="nav-right desktop-only">
              <div className="nav-actions">
                <div className="cart"><i className="fa fa-shopping-cart"></i></div>
                <div className="profile"><i className="fa fa-user"></i></div>
                <div className="Advertise">
                  <text>Join Discord</text>
                  <img src="/Discord.webp" className="discordLogo" alt="Discord" />
                </div>
              </div>
            </div> */}
          </nav>

          <div className="nav-right desktop-only">
            <div className="nav-actions">
              <div className="cart" onClick={handleCartClick}>
                <i className="fa fa-shopping-basket"></i>
              </div>
              <div className="profile" onClick={HandleLoginClick}>
                <i className="fa fa-user"></i>
              </div>
              <div className="Advertise" onClick={() => window.open(DiscordLink, '_blank', 'noopener,noreferrer')}>
                <text>Join Discord</text>
                <img src="/Discord_White.webp" className="discordLogo"></img>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile setIsLoggedIn={setIsLoggedIn}/>} />
          {/* <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn}/>} /> */}
        </Routes>
      </main>

      <footer className="footer">
        <div className="footerContainer">
            <div className="footer-left">
                <img src="/hooskyBrand.png" className="logo" alt="Logo"></img>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.</p>
                <div className="footer-advertise">
                    <img src="/Discord.webp" className="discordLogo"></img>
                    <text>Discord Server</text>
                </div>
            </div>
            <div className="footer-mid">
                  <p>test</p>
            </div>
        </div>
        <hr></hr>
        <h4 className="rights">© 2026 Hoosky. All rights reserved.</h4>
      </footer>

      </div>

    </>
  )
}

export default App