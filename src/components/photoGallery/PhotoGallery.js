import React from "react";
import Gallery from "react-grid-gallery";
import "./index.css";

const IMAGES = [
  {
    src: "/images/gallery/2.jpg",
    thumbnail: "/images/gallery/2.jpg",
    isSelected: false,
    caption: "One evening (Coal Harbour, Vancouver - Sahil) - April 3, 2020",
  },
  {
    src: "/images/gallery/8.jpg",
    thumbnail: "/images/gallery/8.jpg",
    caption:
      "First month in Vancouver (Coal Harbour, Vancouver - Sahil) - April 3, 2020",
  },

  {
    src: "/images/gallery/9.jpg",
    thumbnail: "/images/gallery/9.jpg",
    caption:
      "Morning runs on the waterfront (Coal Harbour, Vancouver - Sahil) - May 22, 2020",
  },
];

class PhotoGallery extends React.Component {
  render() {
    return (
      <section id="gallery">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>My favourite places.</h1>
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
