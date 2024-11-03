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
                                RENEWABLE ENERGY
                            </p>
                            <p className="title">
                                Donec pede justo fringilla vel aliquet nec vulputate eget arcu. In enim justo ligula rhoncus ut imperdiet venenatis.
                            </p>
                            <div className="bottom">
                                <div className="foto">                                <img src={icon1} alt="" /></div>                                <a href="">LEARN MORE <i class="fa-solid fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 headerTitle_item">
                        <div className="box">
                            <p className="top">
                                LATEST TECHNOLOGY
                            </p>
                            <p className="title">
                                Donec pede justo fringilla vel aliquet nec vulputate eget arcu. In enim justo ligula rhoncus ut imperdiet venenatis.
                            </p>
                            <div className="bottom">
                                <div className="foto">                                <img src={icon2} alt="" /></div>
                                <a href="">LEARN MORE <i class="fa-solid fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 headerTitle_item">
                        <div className="box">
                            <p className="top">
                                INDUSTRY SOLUTION
                            </p>
                            <p className="title">
                                Donec pede justo fringilla vel aliquet nec vulputate eget arcu. In enim justo ligula rhoncus ut imperdiet venenatis.
                            </p>
                            <div className="bottom">
                                <div className="foto">                                <img src={icon3} alt="" /></div>                                <a href="">LEARN MORE <i class="fa-solid fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
