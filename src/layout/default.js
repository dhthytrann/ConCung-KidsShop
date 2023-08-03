import { Outlet } from "react-router-dom";
import Header from "../containers/Layout/Header/Header";
import Footer from "../containers/Layout/Footer/Footer";
import { useState } from "react";
import FooterMobile from "../containers/Layout/FooterMobile/FooterMobile";
import CartPopup from "../components/CartPopup/CartPopup";
import QuickViewProduct from "../components/QuickViewProduct/QuickViewProduct";
import VideoDescriptionPopup from "../components/VideoDescriptionPopup/VideoDescriptionPopup";
import FilterProductPopup from "../components/FilterProductPopup/FilterProductPopup";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import AdvertisementPopup from "../components/AdvertisementPopup/AdvertisementPopup";
import MenuMobile from "../components/MenuMobile/MenuMobile";

const Default = () => {
  const [fixHeader, setFixHeader] = useState(false);

  const setFixedHeader = () => {
    if (window.scrollY >= 200) {
      setFixHeader(true);
    } else {
      setFixHeader(false);
    }
  };
  window.addEventListener("scroll", setFixedHeader);

  return (
    <>
      <div className="page">
        <MenuMobile />
        <AdvertisementPopup />
        <VideoDescriptionPopup />
        <FilterProductPopup />
        <CartPopup />
        <QuickViewProduct />
        <div className={fixHeader ? "header fixed" : "header"}>
          <Header />
        </div>
        <div className="main-content">
          <Outlet />
        </div>
        <div className="footer">
          <Footer />
        </div>
        <div className="footer-bottom-mobie">
          <FooterMobile />
        </div>
        <ScrollToTop />
      </div>
    </>
  );
};

export default Default;
