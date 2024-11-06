import React from 'react';
import "./talk_about.css"

const TalkAbout = ({setIsModalOpen}) => {
    return (
        <div className="talk_about" id={"contact"}>
            <span className={"talk_about_opacity"}></span>
            <div className="talk_about_text">
                <h1>ПОЧЕМУ ВЫБИРАЮТ НАШИ <br/>ПРОЕКТЫ</h1>
                <p>Мы предлагаем индивидуальные решения, которые отвечают конкретным потребностям наших клиентов,
                    обеспечивая эффективность и инновации в каждом проекте.</p>
                <button onClick={()=>setIsModalOpen(true)}>Свяжитесь с нами</button>
            </div>
        </div>
    );
};

export default TalkAbout;