import { useContext, useEffect } from "react";
import "../AdvertisementPopup/AdvertisementPopup.scss";
import { DataContext } from "../../context/dataContext";
import OutsideClickHandler from "react-outside-click-handler";

const AdvertisementPopup = () => {
  const { openAdvertisementPopup, setOpenAdvertisementPopup } = useContext(
    DataContext
  );

  const handleOpen = () => {
    const timer = setTimeout(() => {
      setOpenAdvertisementPopup(true);
    }, 1000);
    return () => clearTimeout(timer);
  };


  useEffect(() => {
    handleOpen();
  }, []);

  return (
    <div
      className={
        openAdvertisementPopup ? "advertisement open" : "advertisement"
      }
    >
      <div className="advertisement-popup">
        <OutsideClickHandler
          onOutsideClick={() => {
            setOpenAdvertisementPopup(false);
          }}
        >
          <div className="advertisement-popup-box">
            <div className="content">
              <div className="discount mb-2">
                <p className="mb-0 mr-1">UP TO</p>
                <p className="mb-0 percent">20% OFF</p>
              </div>
              <div className="sign-up">
                <p className="mb-0 mr-1">Sign up to</p>
                <p className="mb-0 shop-name">concung</p>
              </div>
              <p className="description mb-0 mt-3">
                Subscribe to the Riode eCommerce newsletter to receive timely
                updates from your favorite products.
              </p>
              <div className="form-submit-sunscribe mt-4">
                <input
                  type="text"
                  className="input-email"
                  placeholder="Enter your email address..."
                />
                <div className="btn-subscribe">
                  <p className="mb-0">SUBSCRIBE</p>
                </div>
              </div>
              <p className="mb-0"></p>
            </div>
          </div>
        </OutsideClickHandler>

        <div
          className="close-popup"
          onClick={() => {
            setOpenAdvertisementPopup(false);
          }}
        >
          <i class="fa-regular fa-xmark"></i>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementPopup;
