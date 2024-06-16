import React, { useState } from 'react';
import './NavBar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link as ScrollLink } from 'react-scroll';
import burgermenu from '../../assets/menu.png';

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className='navbar'>
            <img src={logo} alt='logo' className='logo' />
            <div className='desktopMenu'>
                <ScrollLink activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</ScrollLink>
                <ScrollLink activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</ScrollLink>
                <ScrollLink activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Portfolio</ScrollLink>
                <ScrollLink activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Clients</ScrollLink>
            </div>
            <button className='desktopMenuBtn' onClick={() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}>
                <img src={contactImg} alt='Contact' className='desktopMenuImg' />
                Contact Me
            </button>

            <img src={burgermenu} alt='Menu' className='mobileMenu' onClick={() => setShowMenu(!showMenu)} />
            <div className='navMenu' style={{ display: showMenu ? 'flex' : 'none' }}>
                <ScrollLink activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Home</ScrollLink>
                <ScrollLink activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>About</ScrollLink>
                <ScrollLink activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Portfolio</ScrollLink>
                <ScrollLink activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Clients</ScrollLink>
                <ScrollLink activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Contact</ScrollLink>
            </div>
        </nav>
    );
}

export default NavBar;
