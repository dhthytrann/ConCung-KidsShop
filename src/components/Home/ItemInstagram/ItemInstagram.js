import "../ItemInstagram/ItemInstagram.scss";

const ItemInstagram = ({ image }) => {
  return (
    <div className="item-instagram">
      <div className="img-instagram">
        <img src={image} alt="" />
        <i class="fa-brands fa-instagram"></i>
      </div>
    </div>
  );
};

export default ItemInstagram;
