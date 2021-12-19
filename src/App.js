import React from "react";
import About from "./components/about";
import Banner from "./components/banner";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";
import Testimonial from "./components/testimonial";
import Dummyside from "./components/dummyside";
import End from "./components/End";
import Contact from "./components/contact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  return (


<Router>
    <Switch>
         
          <Route path="/contact">
          <Contact/>
          </Route>
          <Route path="/">
         
    <div style={{ overflowX: "hidden" }}>






      <Banner />
      <About />
      <Portfolio />
      <Dummyside />
      <Testimonial />
     
      <Footer />
      <End />
    
    </div>
          </Route>
        </Switch>
        </Router>

  );
}

export default App;
