import React, { useEffect, useState } from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';
import foto_res from '../../Assisstens/etbs/headerBG.webp';
import foto_res2 from '../../Assisstens/etbs/headerBG2.webp';

export default function Header({ setIsModalOpen }) {
    const [isFirstImageVisible, setIsFirstImageVisible] = useState(true);

    useEffect(() => {
        const imageSwitchTimer = setInterval(() => {
            setIsFirstImageVisible((prev) => !prev);
        }, 8000);

        return () => clearInterval(imageSwitchTimer);
    }, []);

    return (
        <header>
            <span className="header_opacity"></span>
            <div className="foto-res">
                <img
                    className={`background-image ${isFirstImageVisible ? 'fade-in' : 'fade-out'}`}
                    src={foto_res}
                    alt="First background"
                />
                <img
                    className={`background-image ${!isFirstImageVisible ? 'fade-in' : 'fade-out'}`}
                    src={foto_res2}
                    alt="Second background"
                />
            </div>
            <Navbar setIsModalOpen={setIsModalOpen}/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8" data-aos="fade-right">
                        <h1 className='top'>ЛИДЕР В <span>ПРОЕКТИРОВАНИИ</span> ТЕХНОЛОГИЧЕСКИХ ЛИНИЙ, ПЫЛЕ-ГАЗООЧИСТКИ,
                            СИСТЕМ ВЕНТИЛЯЦИИ, АСПИРАЦИИ И ЭНЕРГОЭФФЕКТИВНОСТИ</h1>
                        <p className="bottom">Мы — ведущая компания, специализирующаяся на разработке технологических
                            линий, производственных цехов и современных систем вентиляции и аспирации. Наши проекты
                            помогают оптимизировать и повышать энергоэффективность, путём использования энергии тепла
                            отходящих промышленных газов. Доверьте нам свои проекты по созданию надежных и эффективных
                            решений, которые выведут ваш бизнес на новый уровень!</p>
                        <div className="btns">
                            <button className='left' onClick={() => setIsModalOpen(true)}>КОНТАКТЫ</button>
                            <a href={"#services"} className='right'>ИНФОРМАЦИЯ</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
