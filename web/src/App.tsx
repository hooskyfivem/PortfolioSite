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
import config from '../src/config';

function App() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notification, setNotification] = useState<any>(null);
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

  useEffect(() => {
    supabase
    .from('announcements')
    .select('*')
    .eq('enabled', true)
    .order('created_at', { ascending: false })
    .limit(1)
    .single()
    .then(({ data, error }) => {
      console.log('announcement data:', data);
      console.log('announcement error:', error);
      if (data) {
        setNotification(data);
        setShowNotification(true);
      }
    });
  }, []);

  const handleCartClick = () => {
    triggerLocalNotification('Cart is coming soon', 'This feature is currently in development. Stay tuned for updates!', 'Explore Products', '/products')
    // navigate('/cart')
    setIsMenuOpen(false);
  }

  const handleLegalClick = (path: string) => {
    NavigateTo(path);
    setIsLegalOpen(false);
  }

  const HandleLoginClick = () => {
    if (!isLoggedIn) {
      console.log("Not logged in")
      NavigateTo('/login')
    } else {
      console.log("Logged in")
      NavigateTo('/profile')
    }
  }

  const triggerLocalNotification = (title: string, description: string, secondayText: string | undefined, secondaryLink: string | undefined) => {
    setNotification({
      title: title,
      description: description,
      type: 'notice',
      primary_button_text: 'Got it',
      secondary_button_text: secondayText,
      secondary_button_link: secondaryLink,
    });
    setShowNotification(true);
  }

  // const ScrollToTop = () => {
  //     const start = document.documentElement.scrollTop || document.body.scrollTop;
  //     const duration = 500;
  //     const startTime = performance.now();

  //     const scroll = (currentTime: number) => {
  //         const elapsed = currentTime - startTime;
  //         const progress = Math.min(elapsed / duration, 1);
  //         const ease = 1 - Math.pow(1 - progress, 3);
  //         const scrollTop = start * (1 - ease);
  //         document.documentElement.scrollTop = scrollTop;
  //         document.body.scrollTop = scrollTop;
  //         if (progress < 1) requestAnimationFrame(scroll);
  //     };

  //     requestAnimationFrame(scroll);
  // }

  const NavigateTo = (path: string) => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    navigate(path);
    if (setIsMenuOpen) {
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
      {showNotification && notification && (
        <div className="notification-overlay">
          <div className="notification-modal">
            <div className="notification-top">
              <div className="notification-top-left">
                <div className="pulsingCircle"></div>
                <p>{notification.type === 'coming_soon' ? 'Coming Soon' : notification.type == 'update' ? 'Update' : 'Notice'}</p>
              </div>
              {/* <button className="notification-close" onClick={() => setShowNotification(false)}>✕</button> */}
            </div>
            <div className="notification-message-container">
              <h3>{notification.title}</h3>
              <p>{notification.description}</p>
            </div>
            <div className="notification-divider"></div>
            <div className="notification-buttons">
              <button className="btn-p" onClick={() => setShowNotification(false)}>{notification.primary_button_text}</button>
              {notification.secondary_button_text && (
                <button className="btn-s" onClick={() => { setShowNotification(false); NavigateTo(notification.secondary_button_link); }}>{notification.secondary_button_text}</button>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="bg-black-red">
        <BackgroundParticles />
        <header className={`navbar ${showNotification ? 'nav-disabled' : ''}`}>
          <div className="nav-container">
            {/* LEFT */}
            <div className="nav-left">
              <div className="BrandLogo">
                <img src={config.logo}></img>
              </div>
              <div className="BrandTitles">
                <p>Telvion Systems</p>
                {/* <p>Systems that work. Solutions that scale</p> */}
              </div>
            </div>

            <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <i className={isMenuOpen ? "fa fa-times" : "fa fa-bars"}></i>
            </div>

            {/* Center */}

            <nav className={`nav-center ${isMenuOpen ? 'open' : ''}`}>
              <a className={location.pathname === '/' ? 'selected' : ''} onClick={() => { NavigateTo('/'); }}>Home</a>
              <a className={location.pathname === '/products' ? 'selected' : ''} onClick={() => { NavigateTo('/products'); }}>Products</a>
              <a className={location.pathname === '/forum' ? 'selected' : ''} onClick={() => {{/* navigate('/hosting'); */} triggerLocalNotification('Hosting is coming soon', 'This feature is currently in development. Stay tuned for updates!', undefined, undefined); setIsMenuOpen(false)}}>Hosting</a>
              <a className={location.pathname === '/forum' ? 'selected' : ''} onClick={() => {{/* navigate('/forum'); */} triggerLocalNotification('Forum is coming soon', 'This feature is currently in development. Stay tuned for updates!', undefined, undefined); setIsMenuOpen(false)}}>Forum</a>
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
                <div className="Support">
                  <text onClick={() => { triggerLocalNotification('Support is coming soon', 'This feature is currently in development. Stay tuned for updates!', 'Explore Products', '/products'); setIsMenuOpen(false); }}>Need Support?</text>
                  {/* <img src="/Discord_White.webp" className="discordLogo" alt="Discord" /> */}
                  {/* <i className="fas fa-layer-group"></i> */}
                </div>
              </div>
            </nav>
            <div className="nav-right desktop-only">
              <div className="nav-actions">
                <div className="cart" onClick={handleCartClick}>
                  <i className="fa fa-shopping-basket"></i>
                </div>
                <div className="profile" onClick={HandleLoginClick}>
                  <i className="fa fa-user"></i>
                </div>
                <div className="Support" onClick={() => {triggerLocalNotification('Support is coming soon', 'This feature is currently in development. Stay tuned for updates!', 'Explore Products', '/products')}}>
                  <text>Need Support?</text>
                  <img src={config.SupportImage} className="questionMark" />
                  {/* <img src="/Discord_White.webp" className="discordLogo"></img> */}
                  {/* <i className="fas fa-layer-group"></i> */}
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className={`main-content ${showNotification ? 'content-blurred' : ''}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile setIsLoggedIn={setIsLoggedIn}/>} />
          </Routes>
        </main>

        <footer className={`footer ${showNotification ? 'content-blurred' : ''}`}>
          <div className="footerContainer">
              <div className="footer-left">
                  {/* <img src="/hooskyBrand.png" className="logo" alt="Logo"></img> */}
                  <div className="topFooterContainer">
                    <div className="BrandLogo">
                      <img src={config.logo}></img>
                    </div>
                    <div className="BrandTitles">
                      <p>Telvion Systems</p>
                      <p>Systems that work. Solutions that scale</p>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.</p>
                  <div className="footer-advertise" onClick={() => window.open(DiscordLink, '_blank', 'noopener,noreferrer')}>
                      <img src={config.footerDiscordLogo} className="discordLogo"></img>
                      <text>Discord Server</text>
                  </div>
              </div>
              <div className="footer-mid">
                    <p>test</p>
              </div>
          </div>
          <hr></hr>
          <h4 className="rights">© 2026 Telvion. All rights reserved.</h4>
        </footer>
      </div>
    </>
  )
}

export default App