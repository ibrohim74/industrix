import React from 'react'
import './About.css'
import foto from '../../Assisstens/etbs/about.webp'
import {Helmet} from "react-helmet-async";

export default function About({setIsModalOpen}) {
    return (
        <section className='about' id='about'>
            <Helmet>
                <meta
                    name='description'
                    content='Мы проектируем технологические линии, системы очистки и вентиляции, адаптированные под нужды каждого клиента. Надежные и экологически безопасные решения для вашего производства.'
                />
                <meta
                    name='keywords'
                    content='технологические линии, системы очистки, вентиляция, аспирация, экологическая безопасность, надежность, инновации, производство'
                />
            </Helmet>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6" style={{marginBottom: "30px"}}>
                        <h1 className="top">О НАС</h1>
                        <p className="top">ИННОВАЦИОННЫЕ РЕШЕНИЯ ДЛЯ ВАШЕГО ПРОИЗВОДСТВА: ПРОЕКТИРОВАНИЕ ТЕХНОЛОГИЧЕСКИХ
                            ЛИНИЙ</p>
                        <button onClick={() => setIsModalOpen(true)}>Свяжитесь с нами</button>
                    </div>
                    <div className="col-lg-6">
                        <p className="right-top">
                            Наша компания специализируется на проектировании технологических линий, систем пыле- и
                            газоочистки, а также вентиляции и аспирации. Мы стремимся создавать эффективные и
                            экологически безопасные решения, адаптированные под потребности каждого клиента. Наша
                            команда экспертов сочетает глубокие знания с инновационными технологиями, чтобы обеспечить
                            высокое качество и надежность производственных процессов.
                        </p>
                        <p className="right-bottom">
                            Наша цель — не только удовлетворять потребности клиентов, но и вносить вклад в устойчивое
                            развитие отрасли, предлагая надёжные и современные проекты для вашего бизнеса.
                        </p>
                        <img src={foto} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}
