import "../styles/HomepageReviews.css";
import React from "react";
import { reviewList } from "../utils/ReviewList";
import { Star } from "lucide-react";

const HomepageReviews = () => {
  return (
    <div className="HomepageReviewsContainer">
      <div className="ReviewsHeader">
        <span className="ReviewsSplitText">
          <h1>What Our</h1>
          <h1>Family Says</h1>
        </span>
        <p>
          At Riella's, our guests become family. Here's what they have to say
          about their experience with us.
        </p>
      </div>

      <div className="ReviewsBody">
        {reviewList.map((review) => (
          <div className="ReviewCard" key={review.id}>
            <div className="ReviewerInfo">
              <p className="ReviewerName">{review.reviewer}</p>
              <p className="ReviewerRole">{review.role}</p>
            </div>
            <div className="Stars">
              {Array.from({ length: review.rating }).map((_, index) => (
                <Star key={index} size={18} strokeWidth={2} fill="red" color="red" />
              ))}
            </div>
            <p className="ReviewText">"{review.reviewBody}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomepageReviews;
