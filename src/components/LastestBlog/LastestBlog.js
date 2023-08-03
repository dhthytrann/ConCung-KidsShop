import { useState } from "react";
import "../LastestBlog/LastestBlog.scss";
import { Carousel } from "antd";

const LastestBlog = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 576, itemsToShow: 1, itemsToScroll: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 992, itemsToShow: 2 },
    { width: 1200, itemsToShow: 2 },
  ];

  const [blog, setBlog] = useState([
    {
      id: 1,
      date: "Sep 6, 2023",
      dd: "06",
      mm: "SEP",
      blogTitle: "Warm Hug & Babycare",
      blogContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit....",
      comment: 0,
      imgBanner: "/images/Page Home/Blog/img-01.jpeg",
    },
    {
      id: 2,
      date: "Oct 19, 2023",
      dd: "19",
      mm: "OCT",
      blogTitle: "Dream will Come True",
      blogContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit....",
      comment: 1,
      imgBanner: "/images/Page Home/Blog/img-02.jpeg",
    },
  ]);

  return (
    <div className="lastest-blog-form">
      <div className="tab-titles">
        <p className="title mb-0">Lastest Blog</p>
        <div className="view-all">
          <p className="mb-0">View All</p>
          <i class="fa-light fa-arrow-right-long"></i>
        </div>
      </div>
      <div className="list-blog-box">
        {blog.map((blog) => (
          <div className="item-blog">
            <div className="img-banner">
              <img src={blog.imgBanner} alt="" />
              <div className="badge">
                <p className="mb-0 date">{blog.dd}</p>
                <p className="mb-0 month">{blog.mm}</p>
              </div>
            </div>
            <div className="content">
              <div className="date-post mb-1">
                <div className="date">
                  <span>On</span>
                  <p className="mb-0">{blog.date}</p>
                </div>
                <div className="comment">
                  <p className="mb-0">{blog.comment}</p>
                  <span>Comment</span>
                </div>
              </div>
              <p className="blog-title mb-2">{blog.blogTitle}</p>
              <p className="blog-content">{blog.blogContent}</p>
              <div className="btn-read-more">
                <p className="mb-0">READ MORE</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastestBlog;
