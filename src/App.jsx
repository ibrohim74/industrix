import React, {useEffect, useState} from 'react'
import HeaderTitle from './Components/HeaderTitle/HeaderTitle'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Our from "./Components/Our/Our";
import How from "./Components/How/How";
import Number from "./Components/Number/Number"
import Talk_about from "./Components/talk_about/talk_about";
import Discover from "./Components/Discover/Discover";
import Footer from "./Components/footer/footer";

import AOS from 'aos';
import 'aos/dist/aos.css';

import {Button, Input, message, Modal, notification} from "antd";
import logo from "./Assisstens/img/logoBlack.png"
import axios from "axios";

export default function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [initialState, setInitialState] = useState({})
    const [disabled, setDisabled] = useState(false);
    const [messageApi, contextHolder] = notification.useNotification();

    notification.config({
        duration:3243
    })
    const sendData = async (e) => {
        e.preventDefault();
        setDisabled(true);

        const hasNumber = /\d/;

        if (!initialState.name || initialState.name.trim().length === 0) {
            messageApi.error({
                message: 'Введите ваше имя',
            });
            setDisabled(false);
            return;
        }

        if (initialState.name.trim().length <= 3 || hasNumber.test(initialState.name)) {
            messageApi.error({
                message: "Введите ваше имя правильно",
            });
            setDisabled(false);
            return;
        }

        if (!initialState.phone || initialState.phone.trim().length < 17) {
            messageApi.error({
                message: "Введите ваш номер телефона правильно",
            });
            setDisabled(false);
            return;
        }
        let msg = `<b>новое сообщение</b>\n`;
        msg += `\nИмя: ${initialState.name}\n`;
        msg += `\nтелефон: ${initialState.phone}\n`;

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
                    setIsModalOpen(false)
                    setDisabled(false)
                    setInitialState({})
                }, 3000);
            }
        }).catch((e) => {
            messageApi.error({
                message: 'Произошла ошибка на сервере',
            });
            setDisabled(false);
        });
    }
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div>
            {contextHolder}
            <Modal open={isModalOpen} onCancel={() => setIsModalOpen(false)} zIndex={"9999"}>
                <div className="modal_header">
                    <img src={logo} alt=""/>
                    <p>Оставьте свои данные, и наши операторы свяжутся с вами в ближайшее время</p>
                </div>
                <div className="modal_form">
                    <label>Ваше имя</label>
                    <Input placeholder={"Ваше имя"}
                           value={initialState.name}
                           onChange={e => setInitialState({...initialState, name: e.target.value})}
                    />
                    <label>Ваш номер телефона</label>
                    <Input type="text" placeholder="+998" name="input"
                           value={initialState?.phone}
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
                               setInitialState({...initialState, phone: formattedNumber});
                           }}
                    />
                    <Button type={"primary"} onClick={sendData} disabled={disabled}>Отправить</Button>
                </div>

            </Modal>
            <Header setIsModalOpen={setIsModalOpen}/>
            <HeaderTitle setIsModalOpen={setIsModalOpen}/>
            <About setIsModalOpen={setIsModalOpen}/>
            <Our setIsModalOpen={setIsModalOpen}/>
            <How setIsModalOpen={setIsModalOpen}/>
            <Number setIsModalOpen={setIsModalOpen}/>
            <Talk_about setIsModalOpen={setIsModalOpen}/>
            <Discover setIsModalOpen={setIsModalOpen}/>
            <Footer setIsModalOpen={setIsModalOpen}/>
        </div>
    )
}
