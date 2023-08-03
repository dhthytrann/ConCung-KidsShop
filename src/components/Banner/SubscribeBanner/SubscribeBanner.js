import "../SubscribeBanner/SubscribeBanner.scss";

const SubscribeBanner = () => {
  return (
    <div className="subscribe-banner">
      <div className="content">
        <p className="title mb-0">SUBSCRIBE TO THE NEWSLETTER</p>
        <p className="description mb-0">
          Stay up to date regarding the newest product & offers.
        </p>
      </div>
      <div className="form-submit-sunscribe">
        <input
          type="text"
          className="input-email"
          placeholder="Enter your email address..."
        />
        <div className="btn-subscribe">
          <p className="mb-0">SUBSCRIBE</p>
        </div>
      </div>
    </div>
  );
};

export default SubscribeBanner;
