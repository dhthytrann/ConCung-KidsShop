import { useState } from "react";
import "../DescriptionProduct/DescriptionProduct.scss";
import videoBg from "../../../../assets/videos/video.mp4";
import Description from "./Description/Description";
import AdditionalInformation from "./AdditionalInformation/AdditionalInformation";
import SizeGuide from "./SizeGuide/SizeGuide";
import Reviews from "./Reviews/Reviews";

const DescriptionProduct = () => {
  const [tabMenu, setTabMenu] = useState([
    {
      id: 0,
      name: "Description",
      active: true,
    },
    {
      id: 1,
      name: "Information",
      active: false,
    },
    {
      id: 2,
      name: "Size Guide",
      active: false,
    },
    {
      id: 3,
      name: "Review",
      active: false,
    },
  ]);

  const setActiveItem = (tabId) => {
    setTabMenu(
      tabMenu.map((item) =>
        item.id === tabId
          ? { ...item, active: true }
          : { ...item, active: false }
      )
    );
  };

  return (
    <div className="description-product layout-middle">
      <div className="menu-tab">
        {tabMenu.map((item) => (
          <div
            className={item.active ? "item active" : "item"}
            key={item.id}
            onClick={() => setActiveItem(item.id)}
          >
            <p className="mb-0">{item.name}</p>
          </div>
        ))}
      </div>
      {tabMenu[0].active && <Description />}
      {tabMenu[1].active && <AdditionalInformation />}
      {tabMenu[2].active && <SizeGuide />}
      {tabMenu[3].active && <Reviews />}
    </div>
  );
};
export default DescriptionProduct;
