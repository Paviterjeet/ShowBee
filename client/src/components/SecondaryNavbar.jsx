import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SecondaryNavbar = () => {
  return (
    <div className="bg-light border-bottom">
      <div className="container d-flex justify-content-between py-2">
        
        {/* Left Menu */}
        <div className="d-flex gap-4">
          <a href="#movies" className="text-dark text-decoration-none">Movies</a>
          <a href="#stream" className="text-dark text-decoration-none">Stream</a>
          <a href="#events" className="text-dark text-decoration-none">Events</a>
          <a href="#plays" className="text-dark text-decoration-none">Plays</a>
          <a href="#sports" className="text-dark text-decoration-none">Sports</a>
          <a href="#activities" className="text-dark text-decoration-none">Activities</a>
        </div>

        {/* Right Menu */}
        <div className="d-flex gap-4">
          <a href="#listyourshow" className="text-dark text-decoration-none">ListYourShow</a>
          <a href="#corporates" className="text-dark text-decoration-none">Corporates</a>
          <a href="#offers" className="text-dark text-decoration-none">Offers</a>
          <a href="#giftcards" className="text-dark text-decoration-none">Gift Cards</a>
        </div>

      </div>
    </div>
  );
};

export default SecondaryNavbar;
