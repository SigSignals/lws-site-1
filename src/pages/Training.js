import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import ServiceIconBoxTwo from '../container/service/ServiceIconBoxTwo';
import ServiceSkill from '../container/service/ServiceSkill';
import ServiceTraining from '../container/service/ServiceTraining';
import AboutSix from '../container/About/AboutSix';
import FunfactTwo from '../container/Funfact/FunfactTwo';
import ContactInformationThree from '../container/ContactInformation/ContactInformationThree';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';


const Training = () => {
    return (
        <React.Fragment>
            <SEO title="Exomac || Training" />
            <Header />
            <Breadcrumb 
                image="images/bg/breadcrumb-bg-three.jpg"
                title="We work with bold brands that we believe in"
                content="Home"
                contentTwo="Training"
            />
            {/* <ServiceIconBoxTwo /> */}
            <ServiceTraining />
            {/* <AboutSix />
            <FunfactTwo /> */}
            <ContactInformationThree />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default Training;



