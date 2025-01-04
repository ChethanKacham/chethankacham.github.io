import { useState, useEffect } from 'react';
import './NavBar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link as ScrollLink, animateScroll } from 'react-scroll';
import burgermenu from '../../assets/menu.png';

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    // Handle active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['intro', 'skills', 'works', 'clients', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= -200 && rect.top <= window.innerHeight / 2) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className='navbar'>
            {/* Logo */}
            <img
                src={logo}
                alt='logo'
                className='logo'
                onClick={() => animateScroll.scrollToTop()}
                style={{ cursor: 'pointer' }}
            />

            {/* Desktop Menu */}
            <div className='desktopMenu'>
                <ScrollLink
                    to='intro'
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className={`desktopMenuListItem ${activeSection === 'intro' ? 'active' : ''}`}
                >
                    Home
                </ScrollLink>
                <ScrollLink
                    to='skills'
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className={`desktopMenuListItem ${activeSection === 'skills' ? 'active' : ''}`}
                >
                    About
                </ScrollLink>
                <ScrollLink
                    to='works'
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className={`desktopMenuListItem ${activeSection === 'works' ? 'active' : ''}`}
                >
                    Portfolio
                </ScrollLink>
                <ScrollLink
                    to='clients'
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className={`desktopMenuListItem ${activeSection === 'clients' ? 'active' : ''}`}
                >
                    Clients
                </ScrollLink>
            </div>

            {/* Contact Button */}
            <button
                className='desktopMenuBtn'
                onClick={() =>
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
            >
                <img src={contactImg} alt='Contact' className='desktopMenuImg' />
                Contact Me
            </button>

            {/* Mobile Menu Icon */}
            <img
                src={burgermenu}
                alt='Menu'
                className='mobileMenu'
                onClick={() => setShowMenu(!showMenu)}
                aria-expanded={showMenu}
                aria-label='Toggle navigation menu'
            />

            {/* Mobile Menu */}
            <div
                className={`navMenu ${showMenu ? 'show' : ''}`}
                style={{ display: showMenu ? 'flex' : 'none' }}
            >
                <ScrollLink
                    to='intro'
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className='listItem'
                    onClick={() => setShowMenu(false)}
                >
                    Home
                </ScrollLink>
                <ScrollLink
                    to='skills'
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className='listItem'
                    onClick={() => setShowMenu(false)}
                >
                    About
                </ScrollLink>
                <ScrollLink
                    to='works'
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className='listItem'
                    onClick={() => setShowMenu(false)}
                >
                    Portfolio
                </ScrollLink>
                <ScrollLink
                    to='clients'
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className='listItem'
                    onClick={() => setShowMenu(false)}
                >
                    Clients
                </ScrollLink>
                <ScrollLink
                    to='contact'
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className='listItem'
                    onClick={() => setShowMenu(false)}
                >
                    Contact
                </ScrollLink>
            </div>
        </nav>
    );
};

export default NavBar;
