import React from 'react'
import './HeaderTitle.css'
import icon1 from '../../Assisstens/img/icon 1.png'
import icon2 from '../../Assisstens/img/icon 2.png'
import icon3 from '../../Assisstens/img/icon 3.png'

export default function HeaderTitle() {
    return (
        <section className='headerTitle'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 headerTitle_item">
                        <div className="box">
                            <p className="top">
                                ЭФФЕКТИВНОСТЬ ПРОИЗВОДСТВА
                            </p>
                            <p className="title">
                                Оптимизация производственных процессов начинается с грамотного проектирования
                                технологических линий.
                            </p>
                            <div className="bottom">
                                <div className="foto"><img src={icon1} alt="ЭФФЕКТИВНОСТЬ ПРОИЗВОДСТВА"/></div>
                                {/*<a href="">LEARN MORE <i class="fa-solid fa-angle-right"></i></a>*/}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 headerTitle_item">
                        <div className="box">
                            <p className="top">
                                ЭКОЛОГИЧНОСТЬ ПРОИЗВОДСТВА
                            </p>
                            <p className="title">
                                Наши решения направлены на минимизацию воздействия на окружающую среду, использование
                                экологичных материалов и технологий.
                            </p>
                            <div className="bottom">
                                <div className="foto"><img src={icon2} alt="использование
                                экологичных материалов и технологий."/></div>
                                {/*<a href="">LEARN MORE <i class="fa-solid fa-angle-right"></i></a>*/}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 headerTitle_item">
                        <div className="box">
                            <p className="top">
                                ВЫСОКОКВАЛИФИЦИРОВАННЫЕ СПЕЦИАЛИСТЫ
                            </p>
                            <p className="title">
                                С нашими проектами вы можете быть уверены в высоком качестве и надёжности ваших
                                производственных процессов.
                            </p>
                            <div className="bottom">
                                <div className="foto"><img src={icon3} alt="надёжности ваших
                                производственных процессов"/></div>
                                {/*<a href="">LEARN MORE <i class="fa-solid fa-angle-right"></i></a>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
