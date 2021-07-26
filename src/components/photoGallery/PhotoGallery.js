import React from "react";
import Gallery from "react-grid-gallery";
import "./index.css";

const IMAGES = [
  {
    src: "images/gallery/27.jpg",
    thumbnail: "images/gallery/27.jpg",
    isSelected: false,
    caption: "One evening (Coal Harbour, Vancouver) - Sahil - April 3, 2020",
  },
  {
    src: "images/gallery/9.jpg",
    thumbnail: "images/gallery/9.jpg",
    caption:
      "Morning runs on the waterfront (Coal Harbour, Vancouver) - Sahil - May 22, 2020",
  },
  {
    src: "images/gallery/19.jpg",
    thumbnail: "images/gallery/19.jpg",
    caption:
      "Strait of Georgia (British Columbia) - Sahil - July 2021",
  },
  {
    src: "images/gallery/20.JPG",
    thumbnail: "images/gallery/20.JPG",
    caption:
      "Banff National Park (Alberta) - Sahil - September 2020",
  },
  {
    src: "images/gallery/8.jpg",
    thumbnail: "images/gallery/8.jpg",
    caption:
      "First month in Vancouver (Coal Harbour, Vancouver) - Sahil - April 3, 2020",
  },
  {
    src: "images/gallery/21.jpg",
    thumbnail: "images/gallery/21.jpg",
    caption:
      "Revelstoke (British Columbia) - Sahil - September 2020",
  },
  {
    src: "images/gallery/22.JPG",
    thumbnail: "images/gallery/22.JPG",
    caption:
      "Vancouver skyline as seen from Stanley Park (Vancouver, British Columbia) - Sahil - September 2020",
  },
  {
    src: "images/gallery/23.jpg",
    thumbnail: "images/gallery/23.jpg",
    caption:
      "Amazon workspaces Vancouver (Vancouver, British Columbia) - Sahil - January 2020",
  },
  {
    src: "images/gallery/24.jpg",
    thumbnail: "images/gallery/24.jpg",
    caption:
      "An evening walk in the city (Seattle, United States) - Sahil - November 2019",
  },
  {
    src: "images/gallery/25.JPG",
    thumbnail: "images/gallery/25.JPG",
    caption:
      "Chandigarh, the city beautiful (Chandigarh, India) (Not clicked by me) - Some great photographer :) - Sometime",
  },
  {
    src: "images/gallery/26.JPG",
    thumbnail: "images/gallery/26.JPG",
    caption:
      "Chicago Skyline, from Navy Pier (Chicago, United States) - Sahil - July 2018",
  },
];

class PhotoGallery extends React.Component {
  render() {
    return (
      <section id="gallery">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>My favourite places. Pictures taken with my cellphone.</h1>
          </div>
        </div>
        <div className="row">
          <Gallery images={IMAGES} />
        </div>
      </section>
    );
  }
}

export default PhotoGallery;
