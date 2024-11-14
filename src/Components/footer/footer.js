import React, {useState} from 'react';
import "./footer.css"
import logo from "../../Assisstens/img/logo.png"
import axios from "axios";
import {message, notification} from "antd";

const Footer = () => {
    const [tell, setTell] = React.useState("")
    const [disabled, setDisabled] = useState(false);
    const [messageApi, contextHolder] = notification.useNotification();

    const sendData = async (e) => {
        e.preventDefault();
        setDisabled(true);

        if (!tell || tell.trim().length < 17) {
            messageApi.error({
                message: "Введите ваш номер телефона правильно",
            });
            setDisabled(false);
            return;
        }
        let msg = `<b>заказ телефонный звонок</b>\n`;
        msg += `\nтелефон: ${tell}\n`;

        const TOKEN = "7787874882:AAEHucqnmHViV_cqPiq0VpztiQzN1HusAso";
        const CHAT_ID = "1376002269";

        axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: msg
        }).then((res) => {
            if (res?.status === 200) {
                messageApi.success({
                    message: 'Сообщение успешно отправлено',
                });
                // Formni tozalash
                setTimeout(() => {
                    setTell("")
                    setDisabled(false)

                }, 3000);
            }
        }).catch((e) => {
            messageApi.error({
                message: 'Произошла ошибка на сервере',
            });
            setDisabled(false);
        });
    }
    return (
        <footer>
            {contextHolder}
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
                            <button onClick={sendData} disabled={disabled}>Отправить</button>
                        </div>
                    </div>
                    <div className="footer_box_bottom">
                        <div className="footer_box_bottom_item footer_box_bottom_item_logo">
                            <div className="footer_box_bottom_item_logo_text">
                                <img src={logo} alt=" эффективности и устойчивости
                                    производств"/>
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
                                <li><a href="/">главная</a></li>
                                <li><a href="#about">о нас</a></li>
                                <li><a href="#services">преимущества</a></li>
                                <li><a href="#how">цели</a></li>
                            </ul>
                        </div>

                        <div className="footer_box_bottom_item footer_box_bottom_item_contact">
                            <h1>Контакт</h1>
                            <ul>
                                <li><a href="tel:+998931849893"><i className="fa-solid fa-phone"></i> <p> +99893 184 98 93</p></a></li>
                                <li><a href="tel:+998931819893"><i className="fa-solid fa-phone"></i> <p> +99893 181 98 93</p></a></li>
                                <li><a href="mailto:etbs@etbs.uz"><i className="fa-solid fa-envelope"></i> <p>etbs@etbs.uz</p></a></li>
                                <li><a href="https://maps.app.goo.gl/KRaY5t66mJvGsgPVA"><i class="fa-solid fa-location-dot"></i> <p>Ташкент, 100042 Кукча Дарвоза 314, офис 305</p></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;