import React, {useState} from 'react'
import HeaderTitle from './Components/HeaderTitle/HeaderTitle'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Our from "./Components/Our/Our";
import How from "./Components/How/How";
import Number from "./Components/Number/Number"
import Talk_about from "./Components/talk_about/talk_about";
import Discover from "./Components/Discover/Discover";
import Footer from "./Components/footer/footer";

import {Button, Input, message, Modal} from "antd";
import logo from "./Assisstens/img/logoBlack.png"

export default function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [initialState, setInitialState] = useState({})
    const [disabled, setDisabled] = useState(false);
    return (
        <div>
            <Modal open={isModalOpen} onCancel={() => setIsModalOpen(false)} zIndex={"9999"}>
            <div className="modal_header">
                <img src={logo} alt=""/>
                <p>Оставьте свои данные, и наши операторы свяжутся с вами в ближайшее время</p>
            </div>
            <div className="modal_form">
                <label>Ваше имя</label>
                <Input placeholder={"Ваше имя"}
                       value={initialState.username}
                       onChange={e=>setInitialState({...initialState, username: e.target.value})}
                />
                <label>Ваш номер телефона</label>
                <Input type="text" placeholder="+998" name="input"
                       value={initialState?.tell}
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
                           setInitialState({...initialState, tell: formattedNumber});
                       }}
                />
                <Button type={"primary"} disabled={disabled} >Отправить</Button>
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
