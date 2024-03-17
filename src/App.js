import React from 'react';
import { useState } from 'react';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Travel from './pages/Travel';
import Accommodation from './pages/Accomodation';
import Gifts from './pages/Gifts';
import FAQ from './pages/FAQ';
import Attire from './pages/Attire';


const App = () => {

    const [activeSection, setActiveSection] = useState('home');
    const [isOpen, setIsOpen] = useState(false);

    const handleNavClick = (section) => {
        setIsOpen(false)
        setActiveSection(section);
        const element = document.getElementById(section);
        element.scrollIntoView({ behavior: "smooth" });
    };

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='app'>
            <nav className='navbar'>
                <div className="burger-wrapper">
                    <div className="burger-icon" onClick={toggleNavbar}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </div>
                </div>
                <ul className={isOpen ? 'navbar-elements open' : 'navbar-elements'}>
                    <li className='nav-element' onClick={() => handleNavClick('home')}>Hjem</li>
                    <li className='nav-element' onClick={() => handleNavClick('timeline')}>Bryllupsdagen</li>
                    <li className='nav-element' onClick={() => handleNavClick('travel')}>Reise</li>
                    <li className='nav-element' onClick={() => handleNavClick('accommodation')}>Overnatting</li>
                    <li className='nav-element' onClick={() => handleNavClick('gifts')}>Gaver</li>
                    <li className='nav-element' onClick={() => handleNavClick('faq')}>FAQ</li>
                </ul>
            </nav>
            <Home />
            <Timeline />
            <Travel />
            <Accommodation />
            <Attire />
            <Gifts />
            <FAQ />
        </div>
    )
}

export default App;