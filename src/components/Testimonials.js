import React from "react";
import TestimonialCard from "./TestimonialCard";
import user1 from "../images/user1.jpg";
import user2 from "../images/user2.jpg";
import user3 from "../images/user3.jpg";

const testimonials = [
  {
    id: 1,
    author: "John Doe",
    description:
      "Aliquam erat volutpat. Quisque ut tellus sit amet mauris egestas semper. Vivamus sed dignissim turpis.",
    image:`${user1}`,
    rating: 5,
  },
  {
    id: 2,
    author: "Jane Johnson",
    description:
      "Phasellus non ante ante. Integer malesuada, magna posuere sodales aliquet, erat lacus tincidunt arcu, quis. ",
    image:`${user3}`,
    rating: 4,
  },
  {
    id: 3,
    author: "Adam Smith",
    description:
      "Ut erat est, vehicula et vestibulum vel, placerat vitae velit. Proin malesuada ligula vel quam.",
    image:`${user2}`,
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="testimonial-background">
      <div className="testimonials">
        <div className="testimonials-container">
          <h1 className="testimonial-title">Testimonials</h1>
        </div>

        <div className="testimonials-list">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              author={testimonial.author}
              description={testimonial.description}
              image={testimonial.image}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;