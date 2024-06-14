import React, { useState, useEffect, useRef } from 'react';
import './NavBar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import burgermenu from '../../assets/menu.png';

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const navMenuRef = useRef(null);
    const burgerMenuRef = useRef(null);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleClickOutside = (event) => {
        if (
            navMenuRef.current && !navMenuRef.current.contains(event.target) &&
            burgerMenuRef.current && !burgerMenuRef.current.contains(event.target)
        ) {
            setShowMenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className='navbar'>
            <img src={logo} alt='logo' className='logo' />
            <div className='desktopMenu'>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Portfolio</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Clients</Link>
            </div>
            <button className='desktopMenuBtn' onClick={() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}>
                <img src={contactImg} alt='Contact' className='desktopMenuImg' />
                Contact Me
            </button>

            <img ref={burgerMenuRef} src={burgermenu} alt='Menu' className='mobileMenu' onClick={toggleMenu} />
            {/* <div ref={navMenuRef} className='navMenu' style={{ display: showMenu ? 'flex' : 'none' }}> */}
            <div ref={navMenuRef} className={`navMenu ${showMenu ? 'show' : ''}`}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass='active' to ='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Clients</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    );
};

export default NavBar;


// import React, {useState} from 'react';
// import './NavBar.css';
// import logo from '../../assets/logo.png';
// import contactImg from '../../assets/contact.png';
// import { Link } from 'react-scroll';
// import burgermenu from '../../assets/menu.png';

// const NavBar = () => {
//     const [showMenu, setShowMenu] = useState(false);
//     return (
//         <nav className='navbar'>
//             <img src={logo} alt='logo' className='logo' />
//             <div className='desktopMenu'>
//                 <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
//                 <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
//                 <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Portfolio</Link>
//                 <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Clients</Link>
//             </div>
//             <button className='desktopMenuBtn' onClick={() => {
//                 document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
//             }}>
//                 <img src={contactImg} alt='Contact' className='desktopMenuImg' />
//                 Contact Me
//             </button>

//             <img src={ burgermenu } alt='Menu' className='mobileMenu' onClick={ () => setShowMenu(!showMenu) } />
//             <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
//                 <Link activeClass='active' to='intro' spy = {true} smooth={true} offset={-100} duration = {500} className='listItem' onClick={ () => setShowMenu(false) }>Home</Link>
//                 <Link activeClass='active' to='skills' spy = {true} smooth={true} offset={-50} duration = {500} className='listItem' onClick={ () => setShowMenu(false) }>About</Link>
//                 <Link activeClass='active' to='works' spy = {true} smooth={true} offset={-50} duration = {500} className='listItem' onClick={ () => setShowMenu(false) }>Portfolio</Link>
//                 <Link activeClass='active' to='clients' spy = {true} smooth={true} offset={-50} duration = {500} className='listItem' onClick={ () => setShowMenu(false) }>Clients</Link>
//                 <Link activeClass='active' to='contact' spy = {true} smooth={true} offset={-50} duration = {500} className='listItem' onClick={() => setShowMenu(false)}>Contact</Link>
//             </div>
//         </nav>
//     );
// }

// export default NavBar;