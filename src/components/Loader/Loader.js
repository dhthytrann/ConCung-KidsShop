import "../Loader/Loader.scss";
import {
  ColorRing,
  FallingLines,
  InfinitySpin,
  MutatingDots,
  Oval,
  Rings,
  ThreeCircles,
  ThreeDots,
} from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader-component">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#ff6b81"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;

// #2aa3fb
