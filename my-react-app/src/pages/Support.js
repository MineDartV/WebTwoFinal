import React, { useEffect, useRef, useState } from "react";
import BannerImage from '../assets/purpleBike.webp';
import bullit from '../assets/bullit.png';
import bullitGX from '../assets/bullitGX.png';
import bullit70 from '../assets/bullit70.png';
import nomadRSV from '../assets/nomadRSV.png';
import nomadAXS from '../assets/nomadAXS.png';
import nomad90 from '../assets/nomad90.png';
import FadeInScroll from '../components/FadeInScroll';
import '../styles/Shop.css';


const Shop = () => {
  useEffect(() => {
    import('bootstrap/dist/css/bootstrap.min.css').then(() => {
      // Optional: you can log or do something here
    });
  }, []);

  const [isVisible, setIsVisible] = useState(false);
  const fadeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    if (fadeRef.current) {
      observer.observe(fadeRef.current);
    }

    return () => {
      if (fadeRef.current) {
        observer.unobserve(fadeRef.current);
      }
    };
  }, []);


  return (
    <div className="Body">
        <div className="container-fluid" style={{backgroundImage: `url(${BannerImage})` , backgroundSize: 'cover', backgroundPosition: 'center', padding: '250px 0', width: '100%'}}>
          <FadeInScroll>
            <div>
              <div style={{backgroundColor: '#121619', width: '350px', margin: '0 auto', padding: '5px', paddingBottom: '10px', borderRadius: '15px'}}><h1 style={{color: 'white', textAlign: 'center', margin: '0 auto'}}>Support</h1></div>
            </div>
          </FadeInScroll>
        </div>
        <div className="container-fluid">
              <FadeInScroll>
                <div>
                  <h2 style={{color: 'white', textAlign: 'center', paddingTop: '10px'}}>FAQ's</h2>
                </div>
              </FadeInScroll>
              <FadeInScroll>
                <div className="row">
                    <div className="col-4"><p style={{color: 'white', textAlign: 'center', marginTop: '15px'}}><span style={{fontWeight: '800'}}>Q: Where are Santa Cruz bikes made?</span> 
 A: All Santa Cruz bicycles are designed, tested, and assembled by hand at our headquarters in Santa Cruz, California. Our carbon and aluminum frames are manufactured overseas under our strict quality standards, then brought to our facility for final assembly, inspection, and shipping.</p></div>
                    <div className="col-4"><p style={{color: 'white', textAlign: 'center', marginTop: '15px'}}><span style={{fontWeight: '800'}}>Q: What is the warranty on a Santa Cruz bike?</span> 
 A: We offer a lifetime frame warranty and a lifetime pivot bearing replacement program for the original owner. Our warranty reflects our commitment to durability, performance, and long-term support for riders who push their bikes to the limit.</p></div>
                    <div className="col-4"><p style={{color: 'white', textAlign: 'center', marginTop: '15px'}}><span style={{fontWeight: '800'}}>Q: Can I buy directly from Santa Cruz?</span> 
 A: Santa Cruz Bicycles are sold through a network of trusted bike shops and dealers worldwide. We believe in the value of local service and expertise, and our dealer partners are trained to help you find, fit, and support your bike.</p></div>
                </div>
              </FadeInScroll>
              <FadeInScroll>
                <div className="row">
                    <div className="col-4"><p style={{color: 'white', textAlign: 'center', marginTop: '15px'}}><span style={{fontWeight: '800'}}>Q: Does Santa Cruz offer electric bikes (e-bikes)?</span>
A: Yes! Our Heckler and Bullit models bring Santa Cruz performance to the electric world, powered by the Shimano EP8 drive system. They’re built for riders who want to go farther, faster, and still shred every descent</p></div>
                    <div className="col-4"><p style={{color: 'white', textAlign: 'center', marginTop: '15px'}}><span style={{fontWeight: '800'}}>Q: How do I maintain my Santa Cruz bike?</span>
A: Like any high-performance machine, regular maintenance is key. We recommend routine checks of your suspension, drivetrain, and bearings. Our website offers detailed service guides and our support team is always happy to help. Plus, with our lifetime bearing replacement program, you can keep your bike dialed for years.</p></div>
                    <div className="col-4"><p style={{color: 'white', textAlign: 'center', marginTop: '15px'}}><span style={{fontWeight: '800'}}>Q: Can I customize my build?</span>
A: Many of our bikes come in multiple build kits with different component levels. While we don’t offer full custom builds direct from the factory, many Santa Cruz dealers can help you create a personalized setup with the parts you love.</p></div>
                </div>
              </FadeInScroll>
        </div>
    </div>
  );
};

export default Shop;