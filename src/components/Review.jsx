import React from "react";

function Review(props) {
  console.log(props);
  return (
    <div className="review-item mb-3">
      <div className="d-flex align-items-center mt-2">
        <div className="d-flex mr-2">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <small className="font-weight-bold" style={{ color: "rgba(0,0,0,0.7)" }}>
          Definitely Recommended
        </small>
      </div>
      <div className="d-flex flex-column">
        <small className="" style={{ color: "rgba(0,0,0,0.7)" }}>
          Reviewed in the United Kingdom on 14 January 2020
        </small>
        <small className="font-weight-bold mb-2" style={{ color: "#b12704", fontSize: 11 }}>
          Verified Purchase
        </small>
        <small>{props.review.comment}</small>
      </div>
    </div>
  );
}

export default Review;
