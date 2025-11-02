import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Body from './components/Body';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Support from './pages/Support';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/shop" element={<Shop />} />
           <Route path="/gallery" element={<Gallery />} />
           <Route path="/about" element={<About />} />
           <Route path="/support" element={<Support />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
  // const myFirstElement = <h1>This is a website made with React </h1>
  // const myElement = (
  //   <div>
  //     <h1>Welcome to a page made with react!</h1>
  //     <h1>React uses components like this</h1>
  //   </div>
  // );
  //   class Container extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {show: true};
  //   }
  //   delHeader = () => {
  //     this.setState({show: false});
  //   }
  //   render() {
  //     let myheader;
  //     if (this.state.show) {
  //       myheader = <Child />;
  //     };
  //     return (
  //       <div>
  //       {myheader}
  //       <button type="button" onClick={this.delHeader}>Delete Header</button>
  //       </div>
  //     );
  //   }
  // }

  // class Child extends React.Component {
  //   componentWillUnmount() {
  //     alert("The component named Header is about to be unmounted.");
  //   }
  //   render() {
  //     return (
  //       <h1>Hello World!</h1>
  //     );
  //   }
  // }
  // const mainDiv = (
  //   function Football(){
  //     const shoot = (a, b) => {
  //       alert(b.type);
  //       /*
  //       'b' represents the React event that triggered the function.
  //       In this case, the 'click' event
  //       */
  //     }
  //     return (
  //       <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
  //     );
  //   }
  // );


  // const root = ReactDOM.createRoot(document.getElementById('root'));
  // root.render(myFirstElement);
  // root.render(myElement);
  // root.render(<Container />);
  // root.render(mainDiv);
// }

export default App;
