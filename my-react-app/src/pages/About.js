import React, { useEffect, useState, useRef } from "react";
import backgroundBanner from '../assets/MountainShot.png';
import LogoText from '../assets/santacruztext.png';
import '../styles/Shop.css';
import { blue } from "@mui/material/colors";
import '../styles/About.css';
import FadeInScroll from '../components/FadeInScroll';
import { Fade } from "@mui/material";

const About = () => {
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
        <div className="container-fluid" style={{backgroundImage: `url(${backgroundBanner})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '100px 0', width: '100%'}}>
            <div className="container" style={{backgroundColor: ' #121619', borderRadius: '30px'}}>
                <FadeInScroll>
                    <div className = "row">
                        <h1 style={{color: 'white', textAlign: 'center', paddingTop: '10px'}}>About Us</h1>
                    </div>
                    <div className="row">
                        <div className="col-12"><p style={{color: 'white', textAlign: 'center', marginTop: '15px'}}>Santa Cruz Bicycles was founded in 1994 in a small garage in Santa Cruz, California, with one simple goal: to build mountain bikes that break the rules and redefine what riders expect from their equipment. What began with a single full-suspension bike—the Tazmon—has grown into a world-renowned brand known for performance, innovation, and a relentless dedication to the ride. Today, Santa Cruz bikes are trusted by everyone from weekend warriors to world champions, and that same rebellious spirit continues to guide every frame we design.</p></div>
                    </div>
                    <div className="row">
                        <div className="col-12"><p style={{color: 'white', textAlign: 'center', marginTop: '15px'}}>We build bikes for riders who demand more—more control, more confidence, more capability on every trail. Our lineup includes everything from downhill dominators to lightweight cross-country rockets. The legendary V10 is built for pure downhill speed and stability and has carried the Santa Cruz Syndicate team to countless World Cup podiums. For riders who want to climb as well as descend, the Megatower and Hightower offer the perfect blend of enduro suspension and trail versatility. And for those chasing speed over long distances, the Blur delivers world-class XC performance in a light, efficient package.</p></div>
                    </div>
                    <div className="row">
                        <div className="col-12"><p style={{color: 'white', textAlign: 'center', marginTop: '15px'}}>Every Santa Cruz bike is engineered with obsessive attention to detail, made from high-end carbon fiber or bombproof aluminum, and assembled by hand. We do all our design and engineering in-house, ensuring our bikes meet the highest standards for stiffness, strength, and ride quality. We back our frames—and even the pivot bearings—with a lifetime warranty, because we believe in making products that last, and supporting riders who go hard. When you buy a Santa Cruz, you're not just buying a bike—you're buying into a promise of quality, performance, and long-term support.</p></div>
                    </div>
                    <div className="row">
                        <div className="col-12"><p style={{color: 'white', textAlign: 'center', marginTop: '15px'}}>Our team is made up of riders first—engineers, designers, athletes, and mechanics who all share the same love for dirt and two wheels. Our headquarters is located right in the heart of the Santa Cruz mountains, surrounded by the very trails our bikes are built to conquer. That proximity to real-world riding shapes every decision we make, from geometry tweaks to suspension design. And we ride what we build, every day.</p></div>
                    </div>
                    <div className="row">
                        <div clasName="col-12"><p style={{color: 'white', textAlign: 'center', marginTop: '15px'}}>We also support and sponsor some of the most accomplished riders in the sport, including the Santa Cruz Syndicate downhill team. Their success on the global stage helps us continuously refine and evolve our bikes under the toughest conditions possible. But it's not just about racing—we’re equally committed to everyday riders and trail communities. From local trail advocacy to global sustainability initiatives, we’re always looking for ways to give back to the people and places that make mountain biking possible.</p></div>
                    </div>
                    <div className="row">
                        <div clasName="col-12"><p style={{color: 'white', textAlign: 'center', marginTop: '15px'}}>At Santa Cruz Bicycles, our mission is to build the best bikes in the world and make sure they’re built to be ridden, repaired, and loved for life. Whether you’re charging down a double black descent, grinding through an alpine climb, or just out for a weekend loop, we’re here to make sure your bike can handle it—and make it fun.</p></div>
                    </div>
                </FadeInScroll>
            </div>
        </div>
    </div>
  );
};

export default About;