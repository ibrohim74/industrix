import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../Assisstens/img/logo.png';
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";

export default function Navbar({setIsModalOpen}) {
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
                                <li><a href="#home">главный</a></li>
                                <li><a href="#about">о нас</a></li>
                                <li><a href="#services">преимущества</a></li>
                                <li><a href="#how">цели</a></li>
                                {isMobile && isMenuOpen && (
                                    <button onClick={()=>setIsModalOpen(true)}>свяжитесь с нами</button>
                                )}
                            </ul>
                            {!isMobile  && isMenuOpen && (
                                <button onClick={()=>setIsModalOpen(true)}>свяжитесь с нами</button>
                            )}
                            {/* Close button inside menu for mobile */}
                            {isMobile && isMenuOpen && (
                                <div className="navburger_inMenu" onClick={toggleMenu}>
                                    <CloseOutlined />
                                </div>
                            )}
                        </div>
                        {!isMobile  && (
                            <button onClick={()=>setIsModalOpen(true)}>свяжитесь с нами</button>
                        )}
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
