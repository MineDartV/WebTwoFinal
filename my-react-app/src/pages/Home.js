import { Link } from "react-router-dom";
import BannerImage from '../assets/santaCruz.jpg';
import '../styles/Home.css';
import React, { useEffect, useRef, useState } from "react";
import FadeInScroll from '../components/FadeInScroll';

function Home() {

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
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <FadeInScroll>
          <h1 style={{color: "white"}}>Santa Cruz Bikes</h1>
        </FadeInScroll>
        <br></br>
        <FadeInScroll>
          <p style={{color: "white"}}>Bikes made right.</p>
          <Link to="/shop">
            <button>BUY NOW</button>
          </Link>
        </FadeInScroll>
      </div>
      <div className="contentContainer">
      </div>
    </div>
  )
}

export default Home
