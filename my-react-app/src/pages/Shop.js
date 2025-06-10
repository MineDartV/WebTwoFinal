import React, { useEffect, useRef, useState } from "react";
import BannerImage from '../assets/scralp.webp';
import LogoText from '../assets/santacruztext.png';
import v10 from '../assets/v10DH.png';
import bullit from '../assets/bullit.png';
import bullitGX from '../assets/bullitGX.png';
import bullit70 from '../assets/bullit70.png';
import nomadRSV from '../assets/nomadRSV.png';
import nomadAXS from '../assets/nomadAXS.png';
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
        <div className="container-fluid" style={{backgroundImage: `url(${BannerImage})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '250px 0', width: '100%'}}>
          <FadeInScroll>
            <div>
              <div style={{backgroundColor: '#121619', width: '350px', margin: '0 auto', padding: '5px', paddingBottom: '10px', borderRadius: '15px'}}><h1 style={{color: 'white', textAlign: 'center', margin: '0 auto'}}>Bikes Made Right.</h1></div>
            </div>
          </FadeInScroll>
        </div>
        <div className="container-fluid">
              <FadeInScroll>
                <div>
                  <h2 style={{color: 'white', textAlign: 'center', paddingTop: '10px'}}>Performance</h2>
                </div>
              </FadeInScroll>
              <FadeInScroll>
                <div className="row">
                    <div className="col-4"><p style={{color: 'white', textAlign: 'center', marginTop: '15px'}}>Santa Cruz Bicycles are widely praised for their high-performance capabilities across aggressive trail conditions. Models like the Hightower are equipped with advanced suspension systems that absorb impact effectively on technical descents. This results in improved traction, confident control, and stable handling, even at high speeds.</p></div>
                    <div className="col-4"><p style={{color: 'white', textAlign: 'center', marginTop: '15px'}}>In addition to downhill dominance, Santa Cruz bikes excel in climbing efficiency. Their thoughtful geometry and upright riding posture help conserve energy over long ascents. Optimized suspension kinematics provide consistent grip, making steep and uneven climbs smoother and more manageable for the rider.</p></div>
                    <div className="col-4"><p style={{color: 'white', textAlign: 'center', marginTop: '15px'}}>Santa Cruz is also known for using top-tier materials and components to ensure performance and reliability. Bikes often feature carbon frames, FOX Float suspension, and SRAM X0 AXS drivetrains. This premium build quality enhances durability and responsiveness, giving riders a high-end, long-lasting mountain biking experience.</p></div>
                </div>
              </FadeInScroll>
              <FadeInScroll>
                <div className="row">
                  <div className="col-4">
                    <a href="https://www.santacruzbicycles.com/collections/bullit"> 
                      <img src={bullit70} alt="bullit70 Downhill Bike" className="image-hover-effect" style={{width: '100%', height: 'auto', borderRadius: '15px'}}/>
                    </a>
                  </div>
                  <div className="col-4">
                    <a href="https://www.santacruzbicycles.com/collections/bullit">
                      <img src={bullit} alt="bullit Downhill Bike" className="image-hover-effect" style={{width: '100%', height: 'auto', borderRadius: '15px'}}/>
                    </a>
                  </div>
                  <div className="col-4">
                    <a href="https://www.santacruzbicycles.com/collections/bullit">
                      <img src={bullitGX} alt="bullitGX Downhill Bike" className="image-hover-effect" style={{width: '100%', height: 'auto', borderRadius: '15px'}}/>
                    </a>
                  </div>
                </div>
              </FadeInScroll>
              <br></br>
              <FadeInScroll>
                <div className="row">
                  <div className="col-4">
                    <a href="https://www.santacruzbicycles.com/collections/nomad">
                      <img src={nomadRSV} alt="nomadRSV enduro Bike" className="image-hover-effect" style={{width: '100%', height: 'auto', borderRadius: '15px'}}/>
                    </a>
                  </div>
                  <div className="col-4">
                    <a href="https://www.santacruzbicycles.com/collections/nomad">
                      <img src={nomadAXS} alt="nomadAXS enduro Bike" className="image-hover-effect" style={{width: '100%', height: 'auto', borderRadius: '15px'}}/>
                    </a>
                  </div>
                  <div className="col-4">
                    <a href="https://www.santacruzbicycles.com/collections/nomad">
                      <img src={nomad90} alt="nomad90 enduro Bike" className="image-hover-effect" style={{width: '100%', height: 'auto', borderRadius: '15px'}}/>
                    </a>
                  </div>
                </div>
              </FadeInScroll>
              <FadeInScroll>
                <div className="row">
                    <div className="col-4"><h2 style={{color: 'white', textAlign: 'center', paddingTop: '10px'}}>Enduro</h2></div>
                    <div className="col-4"><h2 style={{color: 'white', textAlign: 'center', paddingTop: '10px'}}>Downhill</h2></div>
                    <div className="col-4"><h2 style={{color: 'white', textAlign: 'center', paddingTop: '10px'}}>XC</h2></div>
                </div>
              </FadeInScroll>
              <FadeInScroll>
                <div className="row">
                    <div className="col-4"><p style={{color: 'white', textAlign: 'center', marginTop: '15px'}}>Santa Cruz enduro bikes like the Megatower are built for aggressive trail riding where both climbing and descending matter. They have long travel suspension (usually 160–170mm), slack geometry, and durable carbon frames. These bikes balance efficiency and downhill capability, making them ideal for riders who race enduro or tackle technical trails with lots of ups and downs.</p></div>
                    <div className="col-4"><p style={{color: 'white', textAlign: 'center', marginTop: '15px'}}>The V10 is Santa Cruz’s flagship downhill bike, designed purely for speed and control on steep, rugged descents. It has a massive 215mm of rear travel, a full carbon frame, and is optimized for stability at high speeds. Unlike trail or enduro bikes, DH bikes are not meant to climb — they excel when pointed downhill, making them perfect for lift-accessed terrain or bike parks.</p></div>
                    <div className="col-4"><p style={{color: 'white', textAlign: 'center', marginTop: '15px'}}>Santa Cruz XC bikes like the Blur focus on lightweight performance, fast climbing, and efficient pedaling. They have shorter suspension travel (100–120mm) and a steeper geometry for sharp, responsive handling. These bikes are built for racing, endurance rides, and riders who prioritize speed and distance over big hits and technical features.</p></div>
                </div>
              </FadeInScroll>
        </div>
    </div>
  );
};

export default Shop;