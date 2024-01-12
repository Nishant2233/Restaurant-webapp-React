import React, { useState } from 'react';
import images from '../../constants/images';
import './Navbar.css';
import { MdOutlineClose, MdOutlineMenu } from 'react-icons/md';
import Login from './Login';
import BookTable from './BookTable';

const Navbar = ({ onLoginClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showBookTable, setShowBookTable] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInitial, setUserInitial] = useState('');
  const [displayLogout, setDisplayLogout] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLoginClick = () => {
    setShowLogin(!showLogin);
  };

  const handleBookTableClick = () => {
    setShowBookTable(true);
    setIsMenuOpen(false);
    setDisplayLogout(false);
  };

  const handleLoginClose = () => {
    setShowLogin(false);
  };

  const handleBookTableClose = () => {
    setShowBookTable(false);
  };

  const handleNavbarClick = () => {
    setIsMenuOpen(false);
    setDisplayLogout(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserInitial('');
  };

  const handleLoginSubmit = (username, password) => {
    if (username.trim() === '' || password.trim() === '') {
      console.log('Please enter both username and password.');
      return;
    }

    setUserInitial(username.charAt(0).toUpperCase());
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  const toggleLogoutDisplay = () => {
    setDisplayLogout(!displayLogout);
  };

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className={`app__navbar-links ${isMenuOpen ? 'open' : ''}`} onClick={handleNavbarClick}>
        <li className='p__opensans'><a href='#home'>Home</a></li>
        <li className='p__opensans'><a href='#about'>About</a></li>
        <li className='p__opensans'><a href='#menu'>Menu</a></li>
        <li className='p__opensans'><a href='#awards'>Awards</a></li>
        <li className='p__opensans'><a href='#contact'>Contact</a></li>
        {isLoggedIn && (
          <li className='p__opensans app__navbar-booktable'>
            <a href='#booktable' onClick={handleBookTableClick}>Book Table</a>
          </li>
        )}
       
      </ul>
      <div className='app__navbar-login'>
        {!isLoggedIn && (
          <>
            <a href="#login" className='p__opensans' onClick={handleLoginClick}>
              Log In / Register
            </a>
            {' | '}
            <a href="#booktable" className='p__opensans' onClick={handleBookTableClick}>
              Book Table
            </a>
          </>
        )}
        {isLoggedIn && (
          <div className='app__navbar-user' onClick={toggleLogoutDisplay}>
            <span className='user-icon'>{userInitial}</span>
            {displayLogout && (
              <div className={`logout-button ${isMenuOpen ? 'open' : ''}`}>
                <button onClick={handleLogout} className='p__opensans'>
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="app__navbar-smallscreen" onClick={toggleMenu}>
        {isMenuOpen ? (
          <MdOutlineClose size={35} color='#fff' fontSize={27} onClick={toggleMenu} />
        ) : (
          <MdOutlineMenu size={35} color='#fff' fontSize={27} onClick={toggleMenu} />
        )}
      </div>

      {showLogin && <Login onClose={handleLoginClose} onSubmit={handleLoginSubmit} />}
      {showBookTable && <BookTable onClose={handleBookTableClose} />}
    </nav>
  );
};

export default Navbar;
