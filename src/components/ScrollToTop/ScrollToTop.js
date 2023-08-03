import { useEffect, useState } from "react";
import "../ScrollToTop/ScrollToTop.scss";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 600) {
      setVisible(true);
    } else if (scrolled <= 600) {
      setVisible(false);
    }
  };
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      className={visible ? "scroll-to-top" : "scroll-hidden"}
      onClick={() => {
        scrollUp();
      }}
    >
      <i class="fa-light fa-arrow-up-long"></i>
    </div>
  );
};

export default ScrollToTop;
