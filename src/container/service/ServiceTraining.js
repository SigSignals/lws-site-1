import {useState, useEffect, useRef} from "react";
import SectionTitleTwo from '../../components/SectionTitles/SectionTitleTwo';
import {Link} from "react-router-dom";
import Tilt from 'react-parallax-tilt';
import Parallax from 'parallax-js';


const ServiceTraining = () => {
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
                                subTitle="Training that meets your needs"
                                title="Indigenous governments and organizations are eligible for a free virtual workshop on one of several important topics."
                            />

                            <p>Little Southwest can bring you experts for training on legal, policy, and governance issues. Our experts can provide workshops on the <i>United Nations Declaration on the Rights of Indigenous Peoples</i>, treaty rights, federal policies and laws, <i>Indian Act</i> governance, and recent supreme court cases. We have worked with First Nations, business and governments from coast to coast providing information, updates, and training on important legal and policy developments.</p> 


                            <Link className="btn btn-primary btn-hover-secondary mt-xl-12 mt-lg-8 mt-md-6 mt-4" to={process.env.PUBLIC_URL + "/"}>Get Started</Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ServiceTraining;
