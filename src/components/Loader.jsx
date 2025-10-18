import React from "react";

export default function Loader() {
  return (
    <div className="overflow-hidden fixed inset-0 ">
      <div className="box-of-star1 overflow-hidden">
        <div className="star star-position1"></div>
        <div className="star star-position2"></div>
        <div className="star star-position3"></div>
        <div className="star star-position4"></div>
        <div className="star star-position5"></div>
        <div className="star star-position6"></div>
        <div className="star star-position7"></div>
      </div>
      <div className="box-of-star2 overflow-hidden">
        <div className="star star-position1"></div>
        <div className="star star-position2"></div>
        <div className="star star-position3"></div>
        <div className="star star-position4"></div>
        <div className="star star-position5"></div>
        <div className="star star-position6"></div>
        <div className="star star-position7"></div>
      </div>
      <div className="box-of-star3 overflow-hidden">
        <div className="star star-position1"></div>
        <div className="star star-position2"></div>
        <div className="star star-position3"></div>
        <div className="star star-position4"></div>
        <div className="star star-position5"></div>
        <div className="star star-position6"></div>
        <div className="star star-position7"></div>
      </div>
      <div className="box-of-star4 overflow-hidden">
        <div className="star star-position1"></div>
        <div className="star star-position2"></div>
        <div className="star star-position3"></div>
        <div className="star star-position4"></div>
        <div className="star star-position5"></div>
        <div className="star star-position6"></div>
        <div className="star star-position7"></div>
      </div>
      <div data-js="astro" className="astronaut overflow-hidden">
        <div className="head"></div>
        <div className="arm arm-left"></div>
        <div className="arm arm-right"></div>
        <div className="body">
          <div className="panel"></div>
        </div>
        <div className="leg leg-left"></div>
        <div className="leg leg-right"></div>
        <div className="schoolbag"></div>
      </div>
    </div>
  );
}
