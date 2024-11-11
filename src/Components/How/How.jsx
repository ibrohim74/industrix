import React from 'react'
import './How.css'
import foto from '../../Assisstens/etbs/predlogaym.webp'
import {Helmet} from "react-helmet-async";

export default function How() {
    return (
        <section className='how' id='how'>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6" data-aos="fade-right">
                        <img src={foto} alt="приоритеты и цели" loading={"lazy"}/>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="top" data-aos="fade-right">
                            приоритеты и цели
                        </h1>
                        <p className="top" data-aos="fade-right">
                            ЧТО МЫ ПРЕДЛАГАЕМ
                        </p>
                        <div className="box-one" data-aos="fade-right">
                            <div className="one">
                                <div className="two"></div>
                            </div>
                            <p className="box-p">
                                ПРОЕКТИРОВАНИЕ
                            </p>
                        </div>
                        <p className="title" data-aos="fade-right">
                            Проектирование технологических линий в горно-добывающей, металлургической отраслях, строй
                            индустрии и производства минеральных удобрений.
                        </p>
                        <div className="box-one" data-aos="fade-right">
                            <div className="one" style={{width:"30px"}}>
                                <div className="two"></div>
                            </div>
                            <p className="box-p">
                                Расчет технологических систем утилизации
                            </p>
                        </div>
                        <p className="title" data-aos="fade-right">
                            Проектирование и расчет систем очистки отходящих газов, комплексов утилизации тепла
                            отходящих промышленных газов, с их последующей генерацией в электрическую энергию, пар,
                            горячую воду, с последующей очисткой и охлаждением отходящих газов.
                        </p>
                        <div className="box-one" data-aos="fade-right">
                            <div className="one">
                                <div className="two"></div>
                            </div>
                            <p className="box-p" data-aos="fade-right">
                                систем аспирации
                            </p>
                        </div>
                        <p className="title" data-aos="fade-right">
                            Проектирование систем аспирации, вентиляции, газо-очистки промышленных предприятий
                            республики.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
