import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import ServiceIconBoxTwo from '../container/service/ServiceIconBoxTwo';
import ServiceSkill from '../container/service/ServiceSkill';
import AboutSix from '../container/About/AboutSix';
import FunfactTwo from '../container/Funfact/FunfactTwo';
import ServiceGovernance from '../container/service/ServiceGovernance';
import ContactInformationThree from '../container/ContactInformation/ContactInformationThree';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';


const Governance = () => {
    return (
        <React.Fragment>
            <SEO title="Exomac || Governance" />
            <Header />
            <Breadcrumb 
                image="images/bg/breadcrumb-bg-three.jpg"
                title="We work with bold brands that we believe in"
                content="Home"
                contentTwo="Governance"
            />
            {/* <ServiceIconBoxTwo /> */}
            <ServiceGovernance />
            {/* <AboutSix />
            <FunfactTwo /> */}
            <ContactInformationThree />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default Governance;



