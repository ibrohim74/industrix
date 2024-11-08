import React from 'react'
import './About.css'
import foto from '../../Assisstens/img/about us.jpg'

export default function About({setIsModalOpen}) {
    return (
        <section className='about' id='about'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6" style={{marginBottom: "30px"}}>
                        <h1 className="top">О НАС</h1>
                        <p className="top">ИННОВАЦИОННЫЕ РЕШЕНИЯ ДЛЯ ВАШЕГО ПРОИЗВОДСТВА: ПРОЕКТИРОВАНИЕ ТЕХНОЛОГИЧЕСКИХ
                            ЛИНИЙ</p>
                        <button onClick={()=>setIsModalOpen(true)}>Свяжитесь с нами</button>
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
