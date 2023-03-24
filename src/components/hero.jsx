import React from "react";

function Hero() {
  return (
    <div className="container movie-details">
      <div className="row">
        <div className="col-md-6 left-box">
          <h1>John Wick: Chapter 4</h1>
          <p>
            Sinopsis:
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, ipsum quia voluptatum repellendus vero ad?Lorem ipsum
            dolor sit amet.
          </p>
          <p>Cast:</p>
          <div className="casting">
            <img
              src="img/john-cast1.jpeg"
              title="Keanu Reeves"
              className="casting-img"
            />
            <img
              src="img/john-cast2.jpeg"
              title="Donnie Yen"
              className="casting-img"
            />
            <img
              src="img/john-cast3.jpeg"
              title="Scott Adkins"
              className="casting-img"
            />
            <img
              src="img/john-cast4.jpeg"
              title="Bill Skarsgard"
              className="casting-img"
            />
            <img
              src="img/john-cast5.jpeg"
              title="Asia Kate Dillon"
              className="casting-img"
            />
          </div>
          <a href="#" className="play-btn">
            <i className="bi bi-play-fill"></i>
            Watch Now
          </a>
        </div>
        <div className="col-md-6 text-center">
          <img src="img/john-wick.jpeg" className="movie-img" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
