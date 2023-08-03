import { useContext } from "react";
import VideoDescriptionPopup from "../../../../../components/VideoDescriptionPopup/VideoDescriptionPopup";
import "../Description/Description.scss";
import { DataContext } from "../../../../../context/dataContext";

const Description = () => {
  const { openVideoPopup, setOpenVideoPopup } = useContext(DataContext);
  return (
    <div className="description-tab">
      <div className="description-content">
        <div className="features mb-4">
          <p className="title mb-2">Features</p>
          <div className="features-content">
            <p className="mb-3">
              Praesent id enim sit amet.Tdio vulputate eleifend in in tortor.
              ellus massa. siti iMassa ristique sit amet condim vel, facilisis
              quimequistiqutiqu amet condim Dilisis Facilisis quis sapien.
              Praesent id enim sit amet.
            </p>
            <div className="list-content">
              <div className="item">
                <i class="fa-solid fa-check"></i>
                <p className="mb-0">Praesent id enim sit amet.Tdio vulputate</p>
              </div>
              <div className="item">
                <i class="fa-solid fa-check"></i>
                <p className="mb-0">
                  Eleifend in in tortor. ellus massa.Dristique sitii
                </p>
              </div>
              <div className="item">
                <i class="fa-solid fa-check"></i>
                <p className="mb-0">Massa ristique sit amet condim vel</p>
              </div>
              <div className="item">
                <i class="fa-solid fa-check"></i>
                <p className="mb-0">
                  Dilisis Facilisis quis sapien. Praesent id enim sit amet
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="specifications">
          <p className="title mb-2">Specifications</p>
          <table>
            <thead>
              <tr>
                {/* <th>Material</th> */}
                {/* <th>Claimed Size</th> */}
                {/* <th>Recommended Use</th> */}
                {/* <th>Manufacturer</th> */}
              </tr>
            </thead>
            <tbody>
              <tr className="item-row">
                <th>Material</th>
                <td>Praesent id enim sit amet.Tdio</td>
              </tr>
              <tr className="item-row">
                <th>Claimed Size</th>
                <td>Praesent id enim sit</td>
              </tr>
              <tr className="item-row">
                <th>Recommended Use</th>
                <td>
                  Praesent id enim sit amet.Tdio vulputate eleifend in in
                  tortor. ellus massa. siti
                </td>
              </tr>
              <tr className="item-row">
                <th>Manufacturer</th>
                <td>Praesent id enim</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="description-video">
        <p className="title mb-4">Video Description</p>
        <div className="video-description mb-4">
          <div className="banner-video">
            <img src="/images/banner-video.jpg" alt="" />
          </div>
          <div className="btn-play" onClick={() => setOpenVideoPopup(true)}>
            <i class="fa-sharp fa-light fa-play"></i>
          </div>
        </div>
        <div className="service">
          <div className="item">
            <div className="icon">
              <i class="fa-light fa-shield-halved"></i>
            </div>
            <div className="content">
              <p className="subject mb-0">2 year warranty</p>
              <p className="mb-0">Guarantee with no doubt</p>
            </div>
          </div>
          <div className="item">
            <div className="icon">
              <i class="fa-light fa-truck-fast"></i>
            </div>
            <div className="content">
              <p className="subject mb-0">Free shipping</p>
              <p className="mb-0">On orders over $50.00</p>
            </div>
          </div>
        </div>
      </div>
      {/* <VideoDescriptionPopup /> */}
    </div>
  );
};

export default Description;
