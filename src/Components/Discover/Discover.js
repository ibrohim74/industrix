import React from 'react';
import "./discover.css"
import discover from "../../Assisstens/etbs/discover.webp";
import {Helmet} from "react-helmet-async";
const Discover = () => {
    return (
        <div className="Discover">
            <Helmet>
                <meta name="description" content="Как выбрать правильное технологическое решение: инновации, выбор технологий, исследование доступных решений и поддержка внедрения." />
                <meta name="keywords" content="выбор технологического решения, инновации в проектировании, исследование решений, поддержка внедрения, технологии для бизнеса" />
            </Helmet>
            <div className="container">
                <div className="Discover_title">
                    <h1>КАК ВЫБРАТЬ ПРАВИЛЬНОЕ <br/> ТЕХНОЛОГИЧЕСКОЕ РЕШЕНИЕ</h1>
                </div>
                <div className="discover_box">
                    <div className="discover_left">
                        <div className="discover_left_item">
                            <img
                                src={discover}
                                alt=""/>
                            <div className="discover_left_item_text">
                                <h2>ИННОВАЦИИ В ПРОЕКТИРОВАНИИ ТЕХНОЛОГИЙ</h2>
                                <p>
                                    Инновации играют ключевую роль в проектировании технологий. Новые методы и
                                    инструменты позволяют создавать более эффективные и устойчивые решения. Например,
                                    использование 3D-моделирования и симуляций значительно ускоряет процесс
                                    проектирования. Это позволяет командам быстрее реагировать на изменения и улучшать
                                    качество конечного продукта.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="discover_right">
                        <div className="discover_right_item">
                            <h2>ВЫБОР ТЕХНОЛОГИЧЕСКОГО РЕШЕНИЯ</h2>
                            <p>
                                Выбор правильного технологического решения может стать сложной задачей для многих
                                компаний. Важно учитывать не только текущие потребности, но и будущие цели. Начните с
                                анализа ваших бизнес-процессов и выявления областей, которые нуждаются в улучшении. Это
                                поможет вам определить, какие технологии могут принести наибольшую пользу.
                            </p>
                        </div>
                        <div className="discover_right_item">
                            <h2>ИССЛЕДОВАНИЕ ДОСТУПНЫХ РЕШЕНИЙ НА РЫНКЕ</h2>

                            <p>Сравните различные продукты и услуги, обращая внимание на их функциональность и
                                стоимость. Не забудьте также учитывать отзывы других пользователей и репутацию
                                поставщиков. Это поможет вам избежать распространенных ошибок и выбрать надежного
                                партнера.</p>
                        </div>
                        <div className="discover_right_item">
                            <h2>ПОДДЕРЖКА И ОБУЧЕНИЕ</h2>
                            <p>Даже самое лучшее решение требует времени на внедрение и адаптацию. Убедитесь, что у вас
                                есть доступ к необходимым ресурсам и поддержке, чтобы максимально эффективно
                                использовать выбранные технологии. Это обеспечит успешное внедрение и долгосрочные
                                результаты.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discover;