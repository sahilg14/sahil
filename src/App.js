import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/about/About";
import PhotoGallery from "./components/photoGallery/PhotoGallery";
import ContactUs from "./components/contactUs/ContactUs";
import Footer from "./components/Footer";
import resumeData from "./resumeData";
import Resume from "./components/Resume";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <PhotoGallery />
        {/* <Testimonials resumeData={resumeData} /> */}
        {/* <Resume resumeData={resumeData} /> */}
        <ContactUs resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}

export default App;
