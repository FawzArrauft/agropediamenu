import { faFileArchive, faStar as solidStar, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import v1 from "../assets/img/homepage/v1.png";

const Minuman1 = () => {
  return (
    <div className="bg-minuman w-screen h-screen overflow-y-auto bg-cover flex items-center justify-center">
      <div className="mt-[1350px]">
        <Link to={'/'}>
          <button className="inline-flex items-center justify-center gap-7 px-14 py-4 rounded-xl bg-black ring-inset ring-2 ring-white drop-shadow-[2px_2px_5px_rgba(255,255,255,100)] animate-pulse">
            <img src={v1} alt="" className="w-[90px]" />
            <h1 className="font-display text-white text-5xl text-left">HOME</h1>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Minuman1;
