import React, { useEffect, useRef, useState } from "react";
import backgroundI from '../assets/whip.jpg';
import LogoText from '../assets/santacruztext.png';
import rocky from '../assets/rocky.jpg';
import niceWhip from '../assets/niceWhip.jpg';
import massiveWhip from '../assets/massiveWhip.jpeg';
import shralp from '../assets/shralp.webp';
import speed from '../assets/speed.webp';
import nomad90 from '../assets/nomad90.png';
import FadeInScroll from '../components/FadeInScroll';
import '../styles/Shop.css';
import { blue } from "@mui/material/colors";


const Shop = () => {
  useEffect(() => {
    import('bootstrap/dist/css/bootstrap.min.css');
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
        <div className="container-fluid" style={{backgroundImage: `url(${backgroundI})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '250px 0', width: '100%'}}>
          <FadeInScroll>
            <div>
              <div style={{backgroundColor: '#121619', width: '350px', margin: '0 auto', padding: '5px', paddingBottom: '10px', borderRadius: '15px'}}><h1 style={{color: 'white', textAlign: 'center', margin: '0 auto'}}>Bikes Made Right.</h1></div>
            </div>
          </FadeInScroll>
        </div>
        <div className="container-fluid">
              <FadeInScroll>
                <div>
                  <h2 style={{color: 'white', textAlign: 'center', paddingTop: '10px'}}>Gallery</h2>
                </div>
              </FadeInScroll>
              <FadeInScroll>
                <div className="row">
                  <div className="col-6">
                    <img src={rocky} alt="Mountain Bike on rocks" className="image-hover-effect" style={{width: '100%', height: 'auto', borderRadius: '15px'}}/>
                  </div>
                  <div className="col-6">
                    <img src={niceWhip} alt="Decent Whip On Mountain Bike" className="image-hover-effect" style={{width: '100%', height: 'auto', borderRadius: '15px'}}/>
                  </div>
                </div>
              </FadeInScroll>
              <br></br>
              <FadeInScroll>
                <div className="row">
                  <div className="col-12 d-flex justify-content-center">
                    <img src={massiveWhip} alt="Massive Whip" className="image-hover-effect" style={{width: '90%', height: 'auto', borderRadius: '15px', backgroundPosition: 'center', margin: 'auto 0', objectFit: 'cover'}}/>
                  </div>
                </div>
              </FadeInScroll>
              <FadeInScroll>
                <div className="row">
                  <div className="col-6">
                    <img src={shralp} alt="shralp" className="image-hover-effect" style={{width: '100%', height: 'auto', borderRadius: '15px'}}/>
                  </div>
                  <div className="col-6">
                    <img src={speed} alt="Fast on Mountain Bike" className="image-hover-effect" style={{width: '100%', height: 'auto', borderRadius: '15px'}}/>
                  </div>
                </div>
              </FadeInScroll>
        </div>
    </div>
  );
};

export default Shop;