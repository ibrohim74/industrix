import React from 'react';
import "./footer.css"
import logo from "../../Assisstens/img/industrix-logo-white.png"

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer_box">
                    <div className="footer_box_top">
                        <div className="footer_box_top_text">
                            <h1>Subscribe Our Newsletter</h1>
                            <p>Expect a friendly letter from us once a week. No spam.</p>
                        </div>

                        <div className="footer_box_top_input">
                            <input type="text"/>
                            <button>sign up</button>
                        </div>
                    </div>
                    <div className="footer_box_bottom">
                        <div className="footer_box_bottom_item footer_box_bottom_item_logo">
                            <div className="footer_box_bottom_item_logo_text">
                                <img src={logo} alt=""/>
                                <p>Premier organization renowned for its exceptional expertise and outstanding
                                    achievements
                                    in the field of manufacturing.</p>
                            </div>

                            <div className="footer_box_bottom_item_social">
                                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                <a href="#"><i className="fa-brands fa-youtube"></i></a>
                                <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
                            </div>
                        </div>
                        <div className="footer_box_bottom_item">
                            <h1>Quick Link</h1>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Service</a></li>
                                <li><a href="#">Price</a></li>
                                <li><a href="#">Bolog</a></li>
                            </ul>
                        </div>
                        <div className="footer_box_bottom_item">
                            <h1>Support</h1>
                            <ul>
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">Disclaimer</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Support</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="footer_box_bottom_item footer_box_bottom_item_contact">
                            <h1>Contact</h1>
                            <ul>
                                <li><a href="#"><i className="fa-solid fa-phone"></i> <p>+998 99 123 45 67</p></a></li>
                                <li><a href="#"><i className="fa-solid fa-envelope"></i> <p>test@gmail.com</p></a></li>
                                <li><a href="#"><i class="fa-solid fa-location-dot"></i> <p>Jl. Dr. Ir Soekarno No. 99x
                                    Tabanan - Bali</p></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;