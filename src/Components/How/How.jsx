import React from 'react'
import './How.css'
import foto from '../../Assisstens/etbs/predlogaym.webp'
import {Helmet} from "react-helmet-async";

export default function How() {
    return (
        <section className='how' id='how'>
            <Helmet>
                <meta name="description" content="Проектирование и расчет технологических линий и систем для горнодобывающих отраслей, очистки отходящих газов и систем аспирации." />
                <meta name="keywords" content="проектирование, технологические линии, горнодобывающие отрасли, расчет систем, очистка отходящих газов, системы аспирации" />
            </Helmet>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={foto} alt="приоритеты и цели"/>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="top">
                            приоритеты и цели
                        </h1>
                        <p className="top">
                            ЧТО МЫ ПРЕДЛАГАЕМ
                        </p>
                        <div className="box-one">
                            <div className="one">
                                <div className="two"></div>
                            </div>
                            <p className="box-p">
                                Проектирование
                            </p>
                        </div>
                        <p className="title">
                            Проектирование технологических линий вгорно-перерабатывающих отраслях, производствах
                            минеральных удобрений, литейных комплексов, производственных корпусов </p>
                        <div className="box-one">
                            <div className="one">
                                <div className="two"></div>
                            </div>
                            <p className="box-p">
                                расчет систем
                            </p>
                        </div>
                        <p className="title">
                            Проектирование и расчет систем очистки отходящих газов
                        </p>
                        <div className="box-one">
                            <div className="one">
                                <div className="two"></div>
                            </div>
                            <p className="box-p">
                                систем аспирации
                            </p>
                        </div>
                        <p className="title">
                            Проектирование систем аспирации вентиляции горнодобывающих, горноперерабатывающих
                            комплексов,химической отрасли,машиностроительных и отраслей производства строительных
                            материалов
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
