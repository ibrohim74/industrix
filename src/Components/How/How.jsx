import React from 'react'
import './How.css'
import foto from '../../Assisstens/img/how foto.jpg'
export default function How() {
    return (
        <section className='how'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={foto} alt="" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="top">
                            OUR PROCESS
                        </h1>
                        <p className="top">
                            HOW WE WORK
                        </p>
                        <div className="box-one">
                            <div className="one">
                                <div className="two"></div>
                            </div>
                            <p className="box-p">
                                EXPLORATION
                            </p>
                        </div>
                        <p className="title">
                            Lorem ipsum dolor sit amet consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum sociis.
                        </p>
                        <div className="box-one">
                            <div className="one">
                                <div className="two"></div>
                            </div>
                            <p className="box-p">
                                DEVELOPMENT
                            </p>
                        </div>
                        <p className="title">
                            Nullam dictum felis eu pede mollis pretium. Integer tincidunt cras dapibus. Vivamus elementum semper nisi aenean vulputate.
                        </p>
                        <div className="box-one">
                            <div className="one">
                                <div className="two"></div>
                            </div>
                            <p className="box-p">
                                PRODUCTION
                            </p>
                        </div>
                        <p className="title">
                            Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum aenean imperdiet etiam ultricies nisi vel augue ullamcorper.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
