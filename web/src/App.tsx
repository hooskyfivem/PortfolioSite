import { useState, type SetStateAction } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
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
// import Login from './pages/Login/Login';
// import Register from './pages/Login/Register';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const DiscordLink = 'https://discord.gg/Djmndes9';

  const handleCartClick = () => {
    setActiveTab('cart')
    setIsMenuOpen(false);
  }

  const handleProfileClick = () => {
    setActiveTab('profile')
    setIsMenuOpen(false);
  }

  const handleLegalClick = (tab: SetStateAction<string>) => {
    setActiveTab(tab);
    setIsLegalOpen(false);
    setIsMenuOpen(false);
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
            <a className={activeTab === 'home' ? 'selected': ''} onClick={() => {setActiveTab('home'); setIsMenuOpen(false);} }>Home</a>
            <a className={activeTab === 'products' ? 'selected': ''} onClick={() => {setActiveTab('products'); setIsMenuOpen(false);}}>Products</a>
            <a className={activeTab === 'forum' ? 'selected': ''} onClick={() => {setActiveTab('forum'); setIsMenuOpen(false);}}>Forum</a>
            {/* <a className={activeTab === 'legal' ? 'selected': ''}>Legal</a> */}

            <div className="dropdown-wrapper" onMouseEnter={() => setIsLegalOpen(true)} onMouseLeave={() => setIsLegalOpen(false)}>
              <a className={`dropdown-trigger ${['terms', 'privacy', 'refund'].includes(activeTab) ? 'selected' : ''}`}>
                Legal <i className={`fa fa-chevron-down ${isLegalOpen ? 'rotate' : ''}`}></i>
              </a>

              {isLegalOpen && (
                <div className="dropdown-menu">
                  <a onClick={() => {handleLegalClick('terms')}}>Terms & Conditions</a>
                  <a onClick={() => {handleLegalClick('privacy')}}>Privacy Policy</a>
                  <a onClick={() => {handleLegalClick('refund')}}>Refund Policy</a>
                </div>
              )}
            </div>
          
            <div className="mobile-menu-actions">
              <div className="nav-actions">
                <div className="cart" onClick={handleCartClick}><i className="fa fa-shopping-basket"></i></div>
                <div className="profile" onClick={handleProfileClick}><i className="fa fa-user"></i></div>
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
              <div className="profile" onClick={handleProfileClick}>
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
          {activeTab === 'home' && <Home />}
          {activeTab === 'products' && <Products />}
          {activeTab === 'forum' && <Forum />}
          {activeTab === 'terms' && <Terms setActiveTab={setActiveTab} />}
          {activeTab === 'privacy' && <Privacy setActiveTab={setActiveTab} />}
          {activeTab === 'refund' && <Refund setActiveTab={setActiveTab} />}
          {activeTab === 'cart' && <Cart />}
          {activeTab === 'profile' && <Profile />}
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