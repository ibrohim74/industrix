import React, {useEffect, useState} from 'react'
import './Header.css'
import Navbar from '../Navbar/Navbar'
import foto_res
    from '../../Assisstens/img/industrial-factory-employee-working-in-metal-manufacturing-industry-e1693894114877.jpg'
import foto1 from '../../Assisstens/img/portrait_of_handsome_young_arab_man_smiling_and_looking_at_camera.jpg'
import foto2 from '../../Assisstens/img/individual_close_up_portrait_of_one_happy_business_woman_looking.jpg'
import foto3 from '../../Assisstens/img/businessman-look-at-camera-e1687404178260-300x300.jpg'

export default function Header({setIsModalOpen}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount < 5) {
                    return prevCount + 1;
                } else {
                    clearInterval(timer);
                    return prevCount;
                }
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <header>
            <span className="header_opacity"></span>
            <div className="foto-res">
                <img src={foto_res} alt=""/>
            </div>
            <Navbar setIsModalOpen={setIsModalOpen}/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className='top'>ЛИДЕР В <span>ПРОЕКТИРОВАНИИ</span> ТЕХНОЛОГИЧЕСКИХ ЛИНИЙ И СИСТЕМ
                            ЭНЕРГОЭФФЕКТИВНОСТИ </h1>
                        <p className="bottom">Мы — ведущая компания, специализирующаяся на разработке технологических
                            линий, производственных цехов и современных систем вентиляции и аспирации. Наши проекты
                            помогают оптимизировать производственные процессы и повышать энергоэффективность. Доверьте
                            нам свои проекты в создании надежных и эффективных решений, которые выведут ваш бизнес на
                            новый уровень!</p>
                        <div className="btns">
                            <button className='left' onClick={()=>setIsModalOpen(true)}>КОНТАКТЫ</button>
                            <a href={"#services"} className='right'>ИНФОРМАЦИЯ</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box-bottom">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/XHOmBV4js_E?si=6gqcOt1Aeqc8I0nY"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div className="box">
                    <div className="img">
                        <img src={foto1} alt=""/>
                        <img src={foto2} alt=""/>
                        <img src={foto3} alt=""/>
                        <p className='count'>{count}K+</p>
                    </div>
                    <p className="right">Мнение наших <br/>клиентов:   <br/>их отзывы о нас!
                    </p>
                </div>
                <div className="box-end">
                    <div class="rating">
                        <input value="5" name="rating" id="star5" type="radio"/>
                        <label for="star5"></label>
                        <input value="4" name="rating" id="star4" type="radio"/>
                        <label for="star4"></label>
                        <input value="3" name="rating" id="star3" type="radio"/>
                        <label for="star3"></label>
                        <input value="2" name="rating" id="star2" type="radio"/>
                        <label for="star2"></label>
                        <input value="1" name="rating" id="star1" type="radio"/>
                        <label for="star1"></label>
                    </div>
                    <p className="right-bottom">
                        <span>4.5</span>
                    </p>
                </div>
                {/*<p className="bottom-p">Base on <span>5,798</span> reviews*/}
                {/*</p>*/}
            </div>
        </header>
    )
}



