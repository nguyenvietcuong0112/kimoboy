import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

import logoImg from './assets/logo.png';
import imgMkj from './assets/banner.png';
import googlePlayIcon from './assets/google-play.png';

import loan from './assets/app/loan.png';
import allinone from './assets/app/allinone.png';
import anti from './assets/app/anti.png';
import currency from './assets/app/currency.png';
import djmixer from './assets/app/djmixer.png';
import gps from './assets/app/gps.png';
import ledbanner from './assets/app/ledbanner.jpg';
import mod from './assets/app/mod.png';
import money from './assets/app/money.png';

import PolicyPage from './PolicyPage';

// Header component
function Header() {
  const location = useLocation();
  const isPolicyPage = location.pathname === '/policy';

  return (
      <header className="header">
          <div className="container header-container">
            <div className="header-left">
              <div className="logo-wrapper">
                <img src={logoImg} alt="Kimoboy Studio" className="logo-img" />
                <span className="studio-name">Kimoboy Studio</span>
              </div>
            </div>

            {!isPolicyPage && (
              <nav className="nav">
                <Link to="/" className="nav-link">HOME</Link>
                <Link to="/policy" className="nav-link">POLICY</Link>
                <a href="#contact" className="nav-link">CONTACT</a>
              </nav>
            )}
          </div>
        </header>
  );
}

// Trang chính
function HomePage() {
  const games = [
    {
      name: 'EMI Loan Tracker & Budget Tool',
      image: loan,
      link: 'https://play.google.com/store/apps/details?id=com.loanemicalc.loanplanner.financialtools.emicalculator'
    },
    {
      name: 'Budget Tool: Personal Plan',
      image: money,
      link: 'https://play.google.com/store/apps/details?id=com.savemoney.budgetplan.moneytracker.personalfinance.incomtracker.financial'
    },
    {
      name: 'Live Currency Converter FX',
      image: currency,
      link: 'https://play.google.com/store/apps/details?id=com.currencyconverter.converter.free'
    },
    {
      name: 'Mod for Addon',
      image: mod,
      link: 'https://play.google.com/store/apps/details?id=com.minecraftmods.mods.texturepacks.shaders.minecraftaddons'
    },
    {
      name: 'Live GPS Location Tracker',
      image: gps,
      link: 'https://play.google.com/store/apps/details?id=com.gpstracker.locationtracker.gpsfinder.realtimetracker'
    },
    {
      name: 'OnePlay: Video & Media Player',
      image: allinone,
      link: 'https://play.google.com/store/apps/details?id=com.videoplayer.music.equalizersupport.videoplayback'
    },
    {
      name: 'LED Banner – Scrolling Text',
      image: ledbanner,
      link: 'https://play.google.com/store/apps/details?id=com.ledscroller.ledbanner.ledrunningtext.display.textled'
    },
    {
      name: 'Anti Theft Alert – Phone Alarm',
      image: anti,
      link: 'https://play.google.com/store/apps/details?id=com.antitheft.smartapp.donottouch.alarm.donttouchmyphone'
    },
    {
      name: 'DJ Mixer & Music Maker',
      image: djmixer,
      link: 'https://play.google.com/store/apps/details?id=com.djmixer.music.sound.musicdj.effect.remixsong'
    }
  ];

  return (
    <>
      {/* About Section */}
      <section id="about" className="section about">
        <div className="container about-row">
          <div className="about-text-container">
            <h2 className="highlight-title">Welcome to Kimoboy Studio</h2>
            <p className="about-text">Kimoboy Studio is a mobile app development studio dedicated to creating innovative, high-quality, and user-friendly applications.
              Our official website serves as a showcase for all the apps developed by Kimoboy – from casual games and productivity tools to educational and lifestyle apps.
            </p>
          </div>
          <div className="about-img-container">
            <img src={imgMkj} alt="About MKJ Studio" className="about-img" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="games" className="section games">
        <div className="container">
          <h2 className="text-center">Our Products</h2>
          <div className="game-grid">
            {games.map((game, index) => (
              <div key={index} className="game-card">
                <img src={game.image} alt={game.name} />
                <div className="game-info">
                  <h3>{game.name}</h3>
                  <a href={game.link} target="_blank" rel="noopener noreferrer" className="btn btn-google-play">
                    <img src={googlePlayIcon} alt="Google Play" className="google-play-icon" />
                    Get on Google Play
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container text-center">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, request support, please contact us at:<br />
            <a href="mailto:kimoboyboy@gmail.com">kimoboyboy@gmail.com</a><br />
            <span style={{ display: 'inline-block', marginTop: '10px' }}>
              📍 Skander Ben Salah
                city essada skhira
                sfax - 3050
                Tunisia (TN)
            </span>
          </p>
        </div>
      </section>
    </>
  );
}

// App Component
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/policy" element={<PolicyPage />} />
        </Routes>
        <footer className="footer">
          <div className="container text-center">
            <p>&copy; {new Date().getFullYear()} Kimoboy Studio. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
