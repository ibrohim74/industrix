import React from 'react'
import './Our.css'
import our1 from '../../Assisstens/img//our 1.png'
import our2 from '../../Assisstens/img//our 2.png'
import our3 from '../../Assisstens/img//our 3.png'
import our4 from '../../Assisstens/img//our 4.png'
import our5 from '../../Assisstens/img//our 5.png'
import our6 from '../../Assisstens/img//our 6.png'
import background from '../../Assisstens/img/background.png'
import {Helmet} from "react-helmet-async";

export default function Our() {
    return (
        <section className='our' id={'services'}>
            <Helmet>
                <meta
                    name='description'
                    content='30 лет опыта, высококвалифицированные решения и превосходство, проверенное временем. Мы предлагаем гибкие и эффективные решения для вашего бизнеса.'
                />
                <meta
                    name='keywords'
                    content='опыт, решения, качество, производительность, гибкие линии, улучшение качества, эффективность, надежность'
                />
            </Helmet>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="top">ПРЕИМУЩЕСТВА</h1>
                        <p className="top">ПРЕИМУЩЕСТВА КОМПАНИИ,<br/> КОТОРЫЕ ГОВОРЯТ САМИ ЗА СЕБЯ</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="box">
                            <p className="box-top">
                                30 ЛЕТ ПРАКТИКИ И ВЫСОКОКВАЛИФИЦИРОВАННЫХ РЕШЕНИЙ
                            </p>
                            <p className="box-title">
                                Наш опыт и знания позволяют нам анализировать ситуации с разных точек зрения и находить
                                максимально эффективные и выгодные решения для каждого клиента. Мы понимаем, что каждый
                                проект уникален, и готовы предложить вам только те решения, которые помогут достичь
                                наилучшего результата
                            </p>
                            <div className="box-bottom">
                                <div className="foto">
                                    <img src={our1} alt=""/>
                                </div>
                                {/*<a href="" className="bottom">LEARN MORE <i class="fa-solid fa-angle-right"></i></a>*/}
                            </div>
                            <div className="foto-background">
                                <img src={background} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="box">
                            <p className="box-top">
                                НАШИ СПЕЦИАЛИСТЫ- ЭТО ОСНОВА КАЧЕСТВА И УСПЕХА
                            </p>
                            <p className="box-title">
                                Мы не просто выполняем задачи — мы создаем ценность и гарантируем успех
                            </p>
                            <div className="box-bottom">
                                <div className="foto">
                                    <img src={our2} alt=""/>
                                </div>
                                {/*<a href="" className="bottom">LEARN MORE <i class="fa-solid fa-angle-right"></i></a>*/}
                            </div>
                        </div>
                        <div className="box">
                            <p className="box-top">
                                ПРЕВОСХОДСТВО, ПРОВЕРЕННОЕ ВРЕМЕНЕМ
                            </p>
                            <p className="box-title">
                                Гарантия качества — это не просто слова, а принцип нашей работы.
                            </p>
                            <div className="box-bottom">
                                <div className="foto">
                                    <img src={our3} alt=""/>
                                </div>
                                {/*<a href="" className="bottom">LEARN MORE <i class="fa-solid fa-angle-right"></i></a>*/}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="box">
                            <p className="box-top">
                                УВЕЛИЧИТЬ ПРОИЗВОДИТЕЛЬНОСТЬ
                            </p>
                            <p className="box-title">
                                Каждый наш проект направлен на улучшение качества, повышение безопасности и ускорение
                                производства.
                            </p>
                            <div className="box-bottom">
                                <div className="foto">
                                    <img src={our4} alt=""/>
                                </div>
                                {/*<a href="" className="bottom">LEARN MORE <i class="fa-solid fa-angle-right"></i></a>*/}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="box">
                            <p className="box-top">
                                СОЗДАТЬ ГИБКИЕ ЛИНИИ
                            </p>
                            <p className="box-title">
                                Мы разрабатываем проекты, которые легко масштабируются и трансформируются в соответствии
                                с вашим развитием.
                            </p>
                            <div className="box-bottom">
                                <div className="foto">
                                    <img src={our5} alt=""/>
                                </div>
                                {/*<a href="" className="bottom">LEARN MORE <i class="fa-solid fa-angle-right"></i></a>*/}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="box">
                            <p className="box-top">
                                УЛУЧШИТЬ КАЧЕСТВО ПРОДУКЦИИ
                            </p>
                            <p className="box-title">
                                Мы внедряем инновационные системы контроля, которые повышают точность и
                                воспроизводимость процессов, а также минимизируют вероятность возникновения дефектов.
                            </p>
                            <div className="box-bottom">
                                <div className="foto">
                                    <img src={our6} alt=""/>
                                </div>
                                {/*<a href="" className="bottom">LEARN MORE <i class="fa-solid fa-angle-right"></i></a>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
