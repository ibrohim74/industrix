import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../Assisstens/img/industrix-logo-white.png';
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 1000px)').matches);

    useEffect(() => {
        const handleResize = (e) => {
            setIsMobile(e.matches);
        };

        const windowMatch = window.matchMedia('(max-width: 1000px)');
        windowMatch.addEventListener('change', handleResize);


        return () => windowMatch.removeEventListener('change', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <a className="logo" href="#!"><img src={logo} alt="Logo" /></a>

                        {/* Menu */}
                        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                            <ul>
                                {isMobile && isMenuOpen && (
                                    <a className="logo" href="#!"><img src={logo} alt="Logo" /></a>
                                )}
                                <li><a href="#home">HOME</a></li>
                                <li><a href="#about">ABOUT US</a></li>
                                <li><a href="#services">SERVICES</a></li>
                                <li><a href="#contact">CONTACT</a></li>
                                <li><a href="#support">SUPPORT</a></li>
                                {isMobile && isMenuOpen && (
                                    <button>GET STARTED</button>
                                )}
                            </ul>
                            {!isMobile  && (
                                <button>GET STARTED</button>
                            )}
                            {/* Close button inside menu for mobile */}
                            {isMobile && isMenuOpen && (
                                <div className="navburger_inMenu" onClick={toggleMenu}>
                                    <CloseOutlined />
                                </div>
                            )}
                        </div>

                        {/* Hamburger Menu Icon */}
                        <div className="navburger" onClick={toggleMenu}>
                            {isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
