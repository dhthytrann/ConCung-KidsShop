import "../ItemIntroduce/ItemIntroduce.scss";

const ItemIntroduce = ({ icon, subject, description, bgIcon }) => {
  return (
    <div className="item-introduce">
      <div className="icon" style={{ backgroundColor: `${bgIcon}` }}>
        <i className={icon}></i>
      </div>
      <div className="content">
        <p className="subject mb-0">{subject}</p>
        <p className="mb-0">{description}</p>
      </div>
    </div>
  );
};

export default ItemIntroduce;
