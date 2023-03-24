import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MoveflixCard(props) {
  return (
    <div className="series">
      <h3 className="title-library">Movies</h3>
      <div className="row movie-row">
        <div className="col-md-3 movie-album">
          <div className="card mb-3 card-serie">
            <img className="card-img-top" src="img/aadc.jpg" alt="" />
            <button
              className="btn btn-primary btn-watch"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#watchNowModal"
              data-bs-image="img/aadc.jpg"
              data-bs-title="Ada Apa Dengan Cinta"
              data-bs-cast="img/nicho.jpeg,img/dian.jpeg,img/cinta-cast3.jpeg,img/cinta-cast4.jpeg,img/cinta-cast5.jpeg"
            >
              More Details
            </button>
          </div>
        </div>
        <div className="col-md-3 movie-album">
          <div className="card mb-3 card-serie">
            <img className="card-img-top" src="img/Spiderman.jpg" alt="" />
            <button
              className="btn btn-primary btn-watch"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#watchNowModal"
              data-bs-image="img/Spiderman.jpg"
              data-bs-title="Spider-Man: No Way Home"
              data-bs-cast="img/spi1.jpeg,img/spi2.jpeg,img/spi3.jpeg,img/spi4.jpeg,img/spi5.jpeg"
            >
              More Details
            </button>
          </div>
        </div>
        <div className="col-md-3 movie-album">
          <div className="card mb-3 card-serie">
            <img className="card-img-top" src="img/john-wick.jpeg" alt="" />
            <button
              className="btn btn-primary btn-watch"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#watchNowModal"
              data-bs-image="img/john-wick.jpeg"
              data-bs-title="John Wick: Chapter 4"
              data-bs-cast="img/john-cast1.jpeg,img/john-cast2.jpeg,img/john-cast3.jpeg,img/john-cast4.jpeg,img/john-cast5.jpeg"
            >
              More Details
            </button>
          </div>
        </div>
        <div className="col-md-3 movie-album">
          <div className="card mb-3 card-serie">
            <img className="card-img-top" src="img/mission.jpeg" alt="" />
            <button
              className="btn btn-primary btn-watch"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#watchNowModal"
              data-bs-image="img/mission.jpeg"
              data-bs-title="Mission: Impossible - Fallout"
              data-bs-cast="img/mission1.jpeg,img/mission6.jpeg,img/mission3.jpeg,img/mission4.jpeg,img/mission5.jpeg"
            >
              More Details
            </button>
          </div>
        </div>
        <div className="col-md-3 movie-album">
          <div className="card mb-3 card-serie">
            <img className="card-img-top" src="img/NO.jpeg" alt="" />
            <button
              className="btn btn-primary btn-watch"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#watchNowModal"
              data-bs-image="img/NO.jpeg"
              data-bs-title="No Time to Die"
              data-bs-cast="img/NO1.jpeg,img/NO2.jpeg,img/NO3.jpeg,img/NO6.jpeg,img/NO5.jpeg"
            >
              More Details
            </button>
          </div>
        </div>
        <div className="col-md-3 movie-album">
          <div className="card mb-3 card-serie">
            <img className="card-img-top" src="img/Minion.jpg" alt="" />
            <button
              className="btn btn-primary btn-watch"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#watchNowModal"
              data-bs-image="img/Minion.jpg"
              data-bs-title="Minions: The Rise of Gru"
              data-bs-cast="img/minion1.jpeg,img/minion2.jpeg,img/minion3.jpeg,img/minion4.jpeg,img/minion5.jpeg"
            >
              More Details
            </button>
          </div>
        </div>
        <div className="col-md-3 movie-album">
          <div className="card mb-3 card-serie">
            <img className="card-img-top" src="img/strange.jpeg" alt="" />
            <button
              className="btn btn-primary btn-watch"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#watchNowModal"
              data-bs-image="img/strange.jpeg"
              data-bs-title="Doctor Strange"
              data-bs-cast="img/strange1.jpeg,img/strange2.jpeg,img/strange3.jpeg,img/strange4.jpeg,img/strange5.jpeg"
            >
              More Details
            </button>
          </div>
        </div>
        <div className="col-md-3 movie-album">
          <div className="card mb-3 card-serie">
            <img className="card-img-top" src="img/army.jpeg" alt="" />
            <button
              className="btn btn-primary btn-watch"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#watchNowModal"
              data-bs-image="img/army.jpeg"
              data-bs-title="Army of the Dead"
              data-bs-cast="img/army1.jpeg,img/army2.jpeg,img/army3.jpeg,img/army4.jpeg,img/army5.jpeg"
            >
              More Details
            </button>
          </div>
        </div>
        <div className="col-md-3 movie-album">
          <div className="card mb-3 card-serie">
            <img className="card-img-top" src="img/parajpg.jpg" alt="" />
            <button
              className="btn btn-primary btn-watch"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#watchNowModal"
              data-bs-image="img/parajpg.jpg"
              data-bs-title="Parasite"
              data-bs-cast="img/park.jpeg,img/seo-joon.jpeg,img/jung.jpeg,img/cho.jpeg,img/choi.jpeg"
            >
              More Details
            </button>
          </div>
        </div>
        <div className="col-md-3 movie-album">
          <div className="card mb-3 card-serie">
            <img className="card-img-top" src="img/black.jpg" alt="" />
            <button
              className="btn btn-primary btn-watch"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#watchNowModal"
              data-bs-image="img/black.jpg"
              data-bs-title="Black Adam"
              data-bs-cast="img/black1.jpeg,img/black2.jpeg,img/black3.jpeg,img/black4.jpeg,img/black5.jpeg"
            >
              More Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoveflixCard;
