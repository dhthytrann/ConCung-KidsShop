import "../HeaderTop/HeaderTop.scss";

const HeaderTop = () => {
  return (
    <div className="header-top">
      <div className="header-top-box container">
        <div className="left">
          <p className="mb-0">Welcome to Riode store message or remove it!</p>
        </div>
        <div className="right">
          <div className="translate">
            <div className="usd item-translate">
              <div className="title">
                <p className="mb-0">USD</p>
                <i class="fa-regular fa-chevron-down"></i>
              </div>
              <div className="box-dropdown">
                <p className="mb-0">EUR</p>
                <p className="mb-0">ESD</p>
              </div>
            </div>
            <div className="eng item-translate">
              <div className="title">
                <p className="mb-0">ENG</p>
                <i class="fa-regular fa-chevron-down"></i>
              </div>
              <div className="box-dropdown">
                <p className="mb-0">ENG</p>
                <p className="mb-0">FRA</p>
              </div>
            </div>
          </div>
          <div className="menu-sub">
            <p className="mb-0">About</p>
            <p className="mb-0">Blog</p>
            <p className="mb-0">Contact</p>
            <p className="mb-0">Newsletter</p>
            <p className="mb-0">Wishlist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
