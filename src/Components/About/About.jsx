import React from 'react'
import './About.css'
import foto from '../../Assisstens/img/about us.jpg'
export default function About() {
    return (
        <section className='about' id='about'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6" style={{marginBottom:"30px"}}>
                        <h1 className="top">ABOUT US</h1>
                        <p className="top">MERGING INDUSTRY <br/>ZEAL WITH PEAK <br/>PRODUCTIVITY</p>
                        <button>READ MORE</button>
                    </div>
                    <div className="col-lg-6">
                        <p className="right-top">
                            MANUFACTURING IS MORE THAN JUST PUTTING PARTS TOGETHER. IT’S COMING UP WITH IDEAS, TESTING PRINCIPLES, AND PERFECTING THE ENGINEERING, AS WELL AS FINAL ASSEMBLY.
                        </p>
                        <p className="right-bottom">
                            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend.
                        </p>
                        <img src={foto} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
