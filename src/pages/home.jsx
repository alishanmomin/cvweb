import React from 'react'
import Navbar from '../components/navbar'
import facebook from '../assets/images/facebook.png'
import email from '../assets/images/email.png'
import insta from '../assets/images/instagram.png'
import linkedin from '../assets/images/linkedin.png'

import one from '../assets/images/1.png'
import two from '../assets/images/2.png'
import three from '../assets/images/3.png'
import four from '../assets/images/4.png'
import five from '../assets/images/5.png'
import six from '../assets/images/6.png'
import eight from '../assets/images/8.png'
import seven from '../assets/images/7.png'

import ngr from '../assets/images/ngr.png'
import hitachi from '../assets/images/hitachi.png'
import unilodge from '../assets/images/unilodge.png'

import p1 from '../assets/images/Linkitsoft-profile-CV-12.png'
import p2 from '../assets/images/Linkitsoft-profile-CV-13.png'
import p3 from '../assets/images/Linkitsoft-profile-CV-14.png'
import p4 from '../assets/images/Linkitsoft-profile-CV-15.png'
import p5 from '../assets/images/Linkitsoft-profile-CV-16.png'
import p6 from '../assets/images/Linkitsoft-profile-CV-17.png'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1200
});

const Home = () => {
  return (
    <div style={{display:'flex'}}>
        <Navbar item={['section-1', 'section-2', 'section-3', 'section-4', 'section-5']} />
        <div className='main'>
                <div className="container">
                    <section className='home'>
                        <div className="home_content" data-aos="fade-bottom" id="section-1">
                            <p>Hello 👋 I’m a technologist
                                that uses design, process and
                                strategy to build great products.
                            </p>
                            <div className='home_based'>
                                <p>Based in <span>Karachi, Pakistan</span></p>
                            </div>
                        </div>
                    </section>
                    <section className='expSection' id="section-2" data-aos="fade-bottom">
                            <p className='heading'>Experience</p>
                            <div className='expSection_experience' >
                                <p className='exp'>Head of Operations at <span>WorkingMouse‍</span></p>
                                <p className='date'>Jan. 2020 - Present</p>
                            </div>
                            <div className='expSection_experience' >
                                <p className='exp'>Head of Operations at <span>WorkingMouse‍</span></p>
                                <p className='date'>Jan. 2020 - Present</p>
                            </div>
                            <div className='expSection_experience' >
                                <p className='exp'>Head of Operations at <span>WorkingMouse‍</span></p>
                                <p className='date'>Jan. 2020 - Present</p>
                            </div>
                            <div className='expSection_experience' >
                                <p className='exp'>Head of Operations at <span>WorkingMouse‍</span></p>
                                <p className='date'>Jan. 2020 - Present</p>
                            </div>
                            <div className='expSection_experience' >
                                <p className='exp'>Head of Operations at <span>WorkingMouse‍</span></p>
                                <p className='date'>Jan. 2020 - Present</p>
                            </div>
                            <p className='heading'>Skills</p>
                            <div className='expSection_skills'>
                                <div className='expSection_box'  >
                                    <img src={one} alt=""/>
                                    <h3>HTML</h3>
                                </div>
                                <div className='expSection_box'>
                                    <img src={two} alt=""/>
                                    <h3>CSS</h3>
                                </div>
                                <div className='expSection_box'  >
                                    <img src={three} alt=""/>
                                    <h3>SCSS/SASS</h3>
                                </div>
                                <div className='expSection_box'>
                                    <img src={four} alt=""/>
                                    <h3>Bootstrap</h3>
                                </div>
                                <div className='expSection_box'  >
                                    <img src={five} alt=""/>
                                    <h3>Javascript</h3>
                                </div>
                                <div className='expSection_box'>
                                    <img src={eight} alt=""/>
                                    <h3>Jquery</h3>
                                </div>
                                <div className='expSection_box'  >
                                    <img src={six} alt=""/>
                                    <h3>React</h3>
                                </div>
                                <div className='expSection_box'>
                                    <img src={seven} alt=""/>
                                    <h3>Redux</h3>
                                </div>
                            </div>

                    </section>
                    <section className='projects' id="section-3" data-aos="fade-bottom">
                        <p  className='heading'>Our Projects</p>
                        <div className='projects_images' data-aos="zoom-in-left">
                            <img src={p1} alt=''/>
                            <img src={p2} alt=''/>
                            <img src={p4} alt=''/>
                            <img src={p3} alt=''/>
                            <img src={p5} alt=''/>
                            <img src={p6} alt=''/>
                        </div>
                    </section>
                    <section className='client' id="section-4" data-aos="fade-bottom">
                        <div className="client_content">
                            <p className='heading'>Client</p>
                        <div className='client_body'>
                            <div className='client_single'>
                                <img src={ngr} alt=''/>
                                <div>
                                    <h5>NGR</h5>
                                    <p>National Growers Register are enhancing business performance for growers through streamlined data management solutions.</p>
                                </div>
                            </div>
                            <div className='client_single' >
                                <img src={hitachi} alt=''/>
                                <div>
                                    <h5>Hitachi</h5>
                                    <p>Hitachi Construction Machinery delivers world-leading equipment and solutions to large scales mines to local owner-operators.</p>
                                </div>
                            </div>
                            <div className='client_single'>
                                <img src={unilodge} alt=''/>
                                <div>
                                    <h5>Unilodge</h5>
                                    <p>UniLodge is the market leader in the operation and management of student accommodation across Australia and New Zealand.</p>
                                </div>
                            </div>
                            <div className='client_single' >
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFARC1fuCzw9lIUrY4ZS69QUrSzDi11gKPczV38dtl3ezCQeqjhB6FKd1IXBGULNYzFM&usqp=CAU' alt=''/>
                                <div>
                                    <h5>FedEx</h5>
                                    <p>Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
                                sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                                recusandae alias error harum maxime adipisci amet laborum</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    <section className='contact' id="section-5" data-aos="fade-bottom">
                        <p className='heading'>Social Media Handle</p>
                        <div className="contact_content" data-aos="flip-left">
                           <img src={facebook} alt=''/>
                            <p>www.facebook.com/zohaib</p>
                        </div>
                        <div className="contact_content" data-aos="flip-left" >
                           <img src={insta} alt=''/>
                            <p>zohaib12</p>
                        </div>
                        <div className="contact_content" >
                           <img src={linkedin} alt=''/>
                            <p>www.linkedin.com/zohaib</p>
                        </div>
                        <div className="contact_content" >
                           <img src={email} alt=''/>
                            <p>zohaib@gmail.com</p>
                        </div>
                    </section>
                </div>
        </div>
    </div>
  )
}

export default Home