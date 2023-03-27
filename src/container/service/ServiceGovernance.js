import {useState, useEffect, useRef} from "react";
import SectionTitleTwo from '../../components/SectionTitles/SectionTitleTwo';
import {Link} from "react-router-dom";
import Tilt from 'react-parallax-tilt';
import Parallax from 'parallax-js';


const ServiceGovernance = () => {
    const [scale] = useState(1.04);
    const sceneEl = useRef(null);

    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        })
        
        parallaxInstance.disable();

        return () => parallaxInstance.disable();

    }, [])
    return (
        <div className="section section-padding-top technology-section-padding-bottom-180">
            <div className="container">

                <div className="row">

                    <div className="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
                        <div className="about-image-area">
                            <div className="about-image">
                                <img src={process.env.PUBLIC_URL + "images/about/about-5.jpg"} alt="" />
                            </div>
                            <div className="about-image">
                                <img src={process.env.PUBLIC_URL + "images/about/about-6.jpg"} alt="" />
                            </div>
                            <div className="shape shape-1" id="scene" ref={sceneEl}>
                                <span data-depth="1"><img src={process.env.PUBLIC_URL + "images/shape-animation/about-shape-1.png"} alt="" /></span>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-5 col-lg-6 col-12" data-aos="fade-up" data-aos-delay="300">
                        <div className="about-content-area">
                            <SectionTitleTwo 
                                subTitle="Innovative &amp; cutting-edge technology"
                                title="We use latest technologies that are proven and practical"
                            />

                            <p>Indigenous governance landscapes are rapidly changing as traditional laws, governance structures, and values are reinvigorated, and nations move away from the Indian Act and towards self-government.</p> 
                            <br></br>
                            <p>Little Southwest helps nations strengthen their entire governance eco-system: from policies and by-laws to job descriptions and hr policies, to constitutions and elections codes.</p> 
                            <br></br>
                            <p>Ask about our governance audits that identify key parts of the governance eco-system that need to be strengthened to ensure a resilient basis for growth going forward.</p>

                            <Link className="btn btn-primary btn-hover-secondary mt-xl-12 mt-lg-8 mt-md-6 mt-4" to={process.env.PUBLIC_URL + "/"}>Get Started</Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ServiceGovernance;
