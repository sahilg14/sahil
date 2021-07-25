import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/about/About";
import PhotoGallery from "./components/photoGallery/PhotoGallery";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/contactUs/ContactUs";
import Footer from "./components/Footer";
import resumeData from "./resumeData";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <PhotoGallery />
        {/* <Testimonials resumeData={resumeData} /> */}
        <ContactUs resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}

export default App;
