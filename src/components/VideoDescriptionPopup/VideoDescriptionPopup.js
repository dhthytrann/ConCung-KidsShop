import "../VideoDescriptionPopup/VideoDescriptionPopup.scss";
import videoBg from "../../assets/videos/video.mp4";
import { useContext, useState } from "react";
import { DataContext } from "../../context/dataContext";
import OutsideClickHandler from "react-outside-click-handler";

const VideoDescriptionPopup = () => {
  const { openVideoPopup, setOpenVideoPopup } = useContext(DataContext);

  return (
    <div
      className={
        openVideoPopup
          ? "video-description-popup open"
          : "video-description-popup"
      }
    >
      <OutsideClickHandler onOutsideClick={() => setOpenVideoPopup(false)}>
        <div className="video-description">
          <div className="video-box">
            <video src={videoBg} loop autoplay="" muted controls />
          </div>
        </div>
      </OutsideClickHandler>

      <div className="close-popup" onClick={() => setOpenVideoPopup(false)}>
        <i class="fa-regular fa-xmark"></i>
      </div>
    </div>
  );
};
export default VideoDescriptionPopup;
