import React from 'react'
import './Our.css'
import our1 from '../../Assisstens/img//our 1.png'
import our2 from '../../Assisstens/img//our 2.png'
import our3 from '../../Assisstens/img//our 3.png'
import our4 from '../../Assisstens/img//our 4.png'
import our5 from '../../Assisstens/img//our 5.png'
import our6 from '../../Assisstens/img//our 6.png'
import background from '../../Assisstens/img/background.png'
export default function Our() {
    return (
        <section className='our' id={'services'}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="top">OUR SERVICES</h1>
                        <p className="top">INTEGRATING TECH FOR <br /> MANUFACTURING SUCCESS</p>
                    </div>
                </div>
                <div className="row">
                <div className="col-lg-6">
                        <div className="box">
                            <p className="box-top">
                                MANUFACTURING CONSULTING
                            </p>
                            <p className="box-title">
                                Lorem ipsum dolor sit consectetur elit, sed do eiusmod tempor aliqua incididunt labore. Adipiscing consequat vitae eleifend ac enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
                            </p>
                            <div className="box-bottom">
                                <div className="foto">
                                    <img src={our1} alt="" />
                                </div>
                                <a href="" className="bottom">LEARN MORE  <i class="fa-solid fa-angle-right"></i></a>
                            </div>
                            <div className="foto-background">
                                <img src={background} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="box">
                            <p className="box-top">
                                MECHANICAL ENGINEERING
                            </p>
                            <p className="box-title">
                                Lorem ipsum dolor sit elit sed consectetur do eiusmod.
                            </p>
                            <div className="box-bottom">
                                <div className="foto">
                                    <img src={our2} alt="" />
                                </div>
                                <a href="" className="bottom">LEARN MORE  <i class="fa-solid fa-angle-right"></i></a>
                            </div>
                        </div>
                        <div className="box">
                            <p className="box-top">
                                PETROLEUM & GAS ENERGY
                            </p>
                            <p className="box-title">
                                Lorem ipsum dolor sit elit sed consectetur do eiusmod.
                            </p>
                            <div className="box-bottom">
                                <div className="foto">
                                    <img src={our3} alt="" />
                                </div>
                                <a href="" className="bottom">LEARN MORE  <i class="fa-solid fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="box">
                            <p className="box-top">
                                MATERIAL SOURCING
                            </p>
                            <p className="box-title">
                                Lorem ipsum dolor sit elit sed consectetur do eiusmod.
                            </p>
                            <div className="box-bottom">
                                <div className="foto">
                                    <img src={our4} alt="" />
                                </div>
                                <a href="" className="bottom">LEARN MORE  <i class="fa-solid fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="box">
                            <p className="box-top">
                                POWER SYSTEMS
                            </p>
                            <p className="box-title">
                                Lorem ipsum dolor sit elit sed consectetur do eiusmod.
                            </p>
                            <div className="box-bottom">
                                <div className="foto">
                                    <img src={our5} alt="" />
                                </div>
                                <a href="" className="bottom">LEARN MORE  <i class="fa-solid fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="box">
                            <p className="box-top">
                                CONSTRUCTION
                            </p>
                            <p className="box-title">
                                Lorem ipsum dolor sit elit sed consectetur do eiusmod.
                            </p>
                            <div className="box-bottom">
                                <div className="foto">
                                    <img src={our6} alt="" />
                                </div>
                                <a href="" className="bottom">LEARN MORE  <i class="fa-solid fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
