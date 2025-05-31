import "../styles/HomepageGallery.css";
import React from "react";
import { galleryList } from "../utils/GalleryList";

const HomepageGallery = () => {
  return (
    <div className="HomepageGalleryContainer">
      <div className="GalleryHeader">
        <span className="GallerySplitText">
          <h1>Our</h1>
          <h1>Gallery</h1>
        </span>
        <p>
          Take a glimpse into the heart of Riella's Homestyle - where every meal is crafted
          with love and tradition.
        </p>
      </div>

      <div className="GalleryGrid">
        {galleryList.map((item) => (
          <div className="GalleryImageWrapper" key={item.id}>
            <img src={item.image} alt={item.title} className="GalleryImage" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomepageGallery;
