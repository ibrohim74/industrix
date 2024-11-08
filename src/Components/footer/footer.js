import React from 'react';
import "./footer.css"
import logo from "../../Assisstens/img/logo.png"

const Footer = () => {
    const [tell, setTell] = React.useState("")
    return (
        <footer>
            <div className="container">
                <div className="footer_box">
                    <div className="footer_box_top">
                        <div className="footer_box_top_text">
                            <h1>Заказать звонок</h1>
                            <p>Оставьте свой номер телефона и мы свяжемся с вами</p>
                        </div>

                        <div className="footer_box_top_input">
                            <input type="text" placeholder="+998" name="input"
                                   value={tell}
                                   onChange={e => {
                                       const formattedValue = e.target.value.replace(/\D/g, '');
                                       let formattedNumber = '+998';
                                       if (formattedValue.length > 3) {
                                           formattedNumber += ' ' + formattedValue.substring(3, 5);
                                       }
                                       if (formattedValue.length > 5) {
                                           formattedNumber += ' ' + formattedValue.substring(5, 8);
                                       }
                                       if (formattedValue.length > 8) {
                                           formattedNumber += ' ' + formattedValue.substring(8, 10);
                                       }
                                       if (formattedValue.length > 10) {
                                           formattedNumber += ' ' + formattedValue.substring(10, 12);
                                       }
                                       setTell(formattedNumber);
                                   }}/>
                            <button>Отправить</button>
                        </div>
                    </div>
                    <div className="footer_box_bottom">
                        <div className="footer_box_bottom_item footer_box_bottom_item_logo">
                            <div className="footer_box_bottom_item_logo_text">
                                <img src={logo} alt=""/>
                                <p>Мы реализуем проекты, которые способствуют повышению эффективности и устойчивости
                                    производств, предоставляя нашим клиентам передовые решения.</p>
                            </div>

                            <div className="footer_box_bottom_item_social">
                                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                <a href="#"><i className="fa-brands fa-youtube"></i></a>
                                <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
                            </div>
                        </div>
                        <div className="footer_box_bottom_item">
                            <h1>Страницы</h1>
                            <ul>
                                <li><a href="#home">главный страница</a></li>
                                <li><a href="#about">о нас</a></li>
                                <li><a href="#services">наша преимущества</a></li>
                                <li><a href="#testimonial">ОТЗЫВЫ</a></li>
                                <li><a href="#how">цели</a></li>
                            </ul>
                        </div>

                        <div className="footer_box_bottom_item footer_box_bottom_item_contact">
                            <h1>Контакт</h1>
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