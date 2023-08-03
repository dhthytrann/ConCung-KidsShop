import { useState } from "react";
import "../Reviews/Reviews.scss";

const Reviews = () => {
  const [rate, setRate] = useState([
    {
      numberStar: ["1", "2", "3", "4", "5"],
      percent: 80,
    },
    {
      numberStar: ["1", "2", "3", "4", "0"],
      percent: 20,
    },
    {
      numberStar: ["1", "2", "3", "0", "0"],
      percent: 0,
    },
    {
      numberStar: ["1", "2", "3", "0", "0"],
      percent: 0,
    },
    {
      numberStar: ["1", "0", "0", "0", "0"],
      percent: 0,
    },
  ]);

  const [review, setReview] = useState([
    {
      id: 0,
      imgAvt: "/images/el-banner-01/img-04.jpg",
      name: "John Doe",
      date: "August 8, 2021",
      numberStar: ["1", "2", "3", "0", "0"],
      comment: "A comment service that will delight your users and developers",
      like: 2,
      dislike: 0,
    },
    {
      id: 1,
      imgAvt: "/images/el-banner-01/img-05.jpg",
      name: "Jenny Mod",
      date: "August 12, 2021",
      numberStar: ["1", "2", "3", "4", "5"],
      comment: "Product is very good, fit is good",
      like: 1,
      dislike: 4,
    },
    {
      id: 2,
      imgAvt: "/images/el-banner-01/img-03.jpg",
      name: "John Doe",
      date: "August 8, 2021",
      numberStar: ["1", "2", "3", "1", "0"],
      comment:
        "Product is very good, fit is good. After trying many products of different brands, this one is the best",
      like: 0,
      dislike: 0,
    },
    {
      id: 3,
      imgAvt: "/images/el-banner-01/img-01.jpg",
      name: "John Doe",
      date: "August 8, 2021",
      numberStar: ["1", "2", "3", "4", "5"],
      comment: "Hình ảnh mang tính chất nhận xu",
      like: 1,
      dislike: 0,
    },
  ]);

  return (
    <div className="reviews">
      <div className="rate">
        <div className="average-rating mb-2">
          <p className="avg-rating mb-0">4.0</p>
          <div className="des">
            <p className="mb-0">Average Rating</p>
            <div className="star">
              <div className="list-start">
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#d26e4b" }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#d26e4b" }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#d26e4b" }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#d26e4b" }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#d26e4b" }}
                ></i>
              </div>
              <p className="number-star mb-0">(4 Review)</p>
            </div>
          </div>
        </div>
        <div className="progress-bar-list mb-4">
          {rate.map((item) => {
            return (
              <div className="item-progress-bar">
                <div className="star">
                  {item.numberStar.map((val, idx) => {
                    if (val > 0) {
                      return (
                        <i
                          className="fa-solid fa-star"
                          style={{ color: "#d26e4b" }}
                        ></i>
                      );
                    } else {
                      return (
                        <i
                          className="fa-duotone fa-star"
                          style={{ color: "#a09e9e" }}
                        ></i>
                      );
                    }
                  })}
                </div>
                <div className="progress-bar-rv">
                  <div className={`progress-rv w-${item.percent}`}></div>
                  <p className="percent mb-0">{item.percent}%</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="btn-submit-comment">
          <p className="mb-0">SUBMIT REVIEW</p>
        </div>
      </div>
      <div className="review-content">
        <div className="filter-review">
          <p className="mb-0">ALL REVIEWS</p>
          <p className="mb-0">WITH IMAGES</p>
          <p className="mb-0">WITH VIDEOS</p>
        </div>
        <div className="list-comment">
          {review.map((item) => {
            return (
              <div className="item-comment">
                <div className="comment-info mb-4">
                  <div className="img-avt">
                    <img src={item.imgAvt} alt="" />
                  </div>
                  <div className="comment-content">
                    <div className="rate-comment mb-1">
                      {item.numberStar.map((star) => {
                        if (star > 0) {
                          return (
                            <i
                              className="fa-solid fa-star"
                              style={{ color: "#d26e4b" }}
                            ></i>
                          );
                        } else {
                          return (
                            <i
                              className="fa-duotone fa-star"
                              style={{ color: "#a09e9e" }}
                            ></i>
                          );
                        }
                      })}
                    </div>
                    <div className="user-info mb-3">
                      <p className="mb-0"> by </p>
                      <p className="user-name mb-0">{item.name}</p>
                      <p className="mb-0">{item.date}</p>
                    </div>
                    <p className="comment-des mb-0">{item.comment}</p>
                  </div>
                </div>
                <div className="interaction">
                  <div className="like mr-4">
                    <i class="fa-duotone fa-thumbs-up"></i>
                    <p className="mb-0">LIKE({item.like})</p>
                  </div>
                  <div className="dislike">
                    <i class="fa-duotone fa-thumbs-down"></i>
                    <p className="mb-0">DISLIKE({item.dislike})</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
