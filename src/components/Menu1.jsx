import { faFileArchive, faStar as solidStar, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import React from "react";
import Bahan1 from "../assets/img/bahan2/kentang.jpg";
import Bahan2 from "../assets/img/bahan2/lettuce.jpg";
import Bahan3 from "../assets/img/bahan2/tartarsauce.jpg";
import Icon from "../assets/img/mangi.png";
import { Link } from "react-router-dom";

const Menu1 = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState("");
  const [popupImage, setPopupImage] = useState("");
  const [popupTitle, setPopupTitle] = useState(""); // Menambahkan state untuk judul pop-up
  const [isFlavorTasteVisible, setFlavorTasteVisible] = useState(true);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const [showCircleButton, setShowCircleButton] = useState(true);

  const openPopup = (content, image, title, position) => {
    setPopupContent(content);
    setPopupImage(image);
    setPopupTitle(title); // Menetapkan judul pop-up
    setPopupPosition(position);
    setPopupOpen(true);
    setFlavorTasteVisible(false);
    setShowCircleButton(false);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setFlavorTasteVisible(true);
    setShowCircleButton(true);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-sidedish1 bg-cover bg-center min-h-screen overflow-y-auto">
      <h1
        className={`font-display2 text-[185px] -my-7 text-[#FBC531] drop-shadow-[0_10px_8px_rgba(0,0,0,255)] text-center align-baseline 
        ${isFlavorTasteVisible ? "" : "hidden"
          }`}
      >
        FLAVOR TASTE !!
      </h1>
      <div
        className={`-mt-5 grid grid-cols-5 gap-x-72 items-center ${isFlavorTasteVisible ? "" : "hidden"
          }`}
      >
        <div className="flex items-center flex-col col-start-2 mt-4">
          <p className="flavortext">MANIS</p>
          <span className="flex items-center justify-center gap-1">
            <FontAwesomeIcon icon={solidStar} size="2x" className="text-amber-300 drop-shadow-[0_7px_10px_rgba(0,0,0,255)]" />
            <FontAwesomeIcon icon={solidStar} size="2x" className="text-amber-300 drop-shadow-[0_7px_10px_rgba(0,0,0,255)]" />
            <FontAwesomeIcon icon={regularStar} size="2x" className="text-amber-300 drop-shadow-[0_7px_10px_rgba(0,0,0,255)]" />
            <FontAwesomeIcon icon={regularStar} size="2x" className="text-amber-300 drop-shadow-[0_7px_10px_rgba(0,0,0,255)]" />
            <FontAwesomeIcon icon={regularStar} size="2x" className="text-amber-300 drop-shadow-[0_7px_10px_rgba(0,0,0,255)]" />
          </span>
        </div>
        <div className="flex items-center flex-col mt-4">
          <p className="flavortext">UMAMI</p>
          <span className="flex items-center justify-center gap-1">
            <FontAwesomeIcon icon={solidStar} size="2x" className="text-amber-300 drop-shadow-[0_7px_10px_rgba(0,0,0,255)]" />
            <FontAwesomeIcon icon={solidStar} size="2x" className="text-amber-300 drop-shadow-[0_7px_10px_rgba(0,0,0,255)]" />
            <FontAwesomeIcon icon={solidStar} size="2x" className="text-amber-300 drop-shadow-[0_7px_10px_rgba(0,0,0,255)]" />
            <FontAwesomeIcon icon={solidStar} size="2x" className="text-amber-300 drop-shadow-[0_7px_10px_rgba(0,0,0,255)]" />
            <FontAwesomeIcon icon={regularStar} size="2x" className="text-amber-300 drop-shadow-[0_7px_10px_rgba(0,0,0,255)]" />
          </span>
        </div>
        <div className="flex items-center flex-col mt-4">
          <p className="flavortext">ASAM</p>
          <span className="flex items-center justify-center gap-1">
            <FontAwesomeIcon icon={solidStar} size="2x" className="text-amber-300 drop-shadow-[0_7px_10px_rgba(0,0,0,255)]" />
            <FontAwesomeIcon icon={solidStar} size="2x" className="text-amber-300 drop-shadow-[0_7px_10px_rgba(0,0,0,255)]" />
            <FontAwesomeIcon icon={solidStar} size="2x" className="text-amber-300 drop-shadow-[0_7px_10px_rgba(0,0,0,255)]" />
            <FontAwesomeIcon icon={regularStar} size="2x" className="text-amber-300 drop-shadow-[0_7px_10px_rgba(0,0,0,255)]" />
            <FontAwesomeIcon icon={regularStar} size="2x" className="text-amber-300 drop-shadow-[0_7px_10px_rgba(0,0,0,255)]" />
          </span>
        </div>
        <div className="flex items-center flex-col mt-4 col-start-3">
          <p className="flavortext">ASIN</p>
          <span className="flex items-center justify-center gap-1">
            <FontAwesomeIcon icon={solidStar} size="2x" className="text-amber-300 drop-shadow-[0_7px_10px_rgba(0,0,0,255)]" />
            <FontAwesomeIcon icon={solidStar} size="2x" className="text-amber-300 drop-shadow-[0_7px_10px_rgba(0,0,0,255)]" />
            <FontAwesomeIcon icon={solidStar} size="2x" className="text-amber-300 drop-shadow-[0_7px_10px_rgba(0,0,0,255)]" />
            <FontAwesomeIcon icon={regularStar} size="2x" className="text-amber-300 drop-shadow-[0_7px_10px_rgba(0,0,0,255)]" />
            <FontAwesomeIcon icon={regularStar} size="2x" className="text-amber-300 drop-shadow-[0_7px_10px_rgba(0,0,0,255)]" />
          </span>
        </div>
      </div>
      <div className="mt-10 relative">
        {isPopupOpen && (
          <div className="flex flex-col">
            <div className="flex items-center bg-stone-200 border border-black shadow-md shadow-gray-400 p-5 rounded-xl w-[1000px]">
              <div className="mr-10">
                <img
                  src={popupImage}
                  alt="Gambar Popup"
                  className="max-w-[200px] rounded-xl shadow"
                />
              </div>
              <div className="p-3">
                <h3 className="text-3xl font-bold mb-8">{popupTitle}</h3> {/* Menampilkan judul pop-up */}
                <p className="text-2xl font-keterangan">{popupContent}</p>
                <button
                  onClick={closePopup}
                  className="absolute top-0 right-0 p-2 text-gray-600 hover:text-red-500"
                >
                  <FontAwesomeIcon icon={faTimes} size="2x" />
                </button>
              </div>
            </div>
            <h1 className="textbahan">
              INGRIDIENT
            </h1>
          </div>
        )}

        {showCircleButton && !isPopupOpen && (
          <div className="absolute right-[250px]">
            <button
              className="btnbase top-[350px] left-[250px]"
              onClick={() =>
                openPopup(
                  "Potongan kentang yang digoreng hingga garing dan lezat.",
                  Bahan1,
                  "FRENCH FRIES" // Menetapkan judul pop-up
                )
              }
            >
              <span className="btnanimate"></span>
              <span className="btnketerangan"></span>
            </button>
            <button
              className="btnbase top-[400px] left-[10px]"
              onClick={() =>
                openPopup(
                  "Selada segar yang ditanam di green house kami sendiri, memberikan kecrispyan pada setiap gigitan.",
                  Bahan2,
                  "SELADA" // Menetapkan judul pop-up
                )
              }
            >
              <span className="btnanimate"></span>
              <span className="btnketerangan"></span>
            </button>
            <button
              className="btnbase top-[525px] left-[500px]"
              onClick={() =>
                openPopup(
                  "Saus mayones dengan sentuhan segar berkat bumbu seperti acar, bawang, dan rempah-rempah, memberikan cita rasa gurih yang memanjakan lidah.",
                  Bahan3,
                  "TARTAR SAUCE" // Menetapkan judul pop-up
                )
              }
            >
              <span className="btnanimate"></span>
              <span className="btnketerangan"></span>
            </button>
          </div>
        )}

        {isPopupOpen ? ( //BUAT POP UP MENU SATUNYA
          <div className="absolute left-[215px]">
            <button
              className="btnbase top-[350px] left-[250px]"
              onClick={() =>
                openPopup(
                  "Potongan kentang yang digoreng hingga garing dan lezat.",
                  Bahan1,
                  "FRENCH FRIES" // Menetapkan judul pop-up
                )
              }
            >
              <span className="btnanimate"></span>
              <span className="btnketerangan"></span>
            </button>
            <button
              className="btnbase top-[400px] left-[10px]"
              onClick={() =>
                openPopup(
                  "Selada segar yang ditanam di green house kami sendiri, memberikan kecrispyan pada setiap gigitan.",
                  Bahan2,
                  "SELADA / LETTUCE" // Menetapkan judul pop-up
                )
              }
            >
              <span className="btnanimate"></span>
              <span className="btnketerangan"></span>
            </button>
            <button
              className="btnbase top-[525px] left-[500px]"
              onClick={() =>
                openPopup(
                  "Saus mayones dengan sentuhan segar berkat bumbu seperti acar, bawang, dan rempah-rempah, memberikan cita rasa gurih yang memanjakan lidah.",
                  Bahan3,
                  "TARTAR SAUCE" // Menetapkan judul pop-up
                )
              }
            >
              <span className="btnanimate"></span>
              <span className="btnketerangan"></span>
            </button>
          </div>
        ) : null}
        <div className="flex flex-col justify-center items-center my-[360px]">
        </div>
      </div>
      <div className="text-center mb-10">
        <h1 className="font-foodname text-white text-7xl">
          FRENCH FRIES WITH TARTAR SAUCE
        </h1>
        <h2 className="font-foodname text-[#FBC531] drop-shadow-[0_10px_8px_rgba(0,0,0,255)] text-5xl break-normal">
          The shoestring french fries are full of flavortext
          <p>Combined with the creamy tartar sauce</p>
        </h2>
      </div>
      <div className="foodfact">
        <div className="text-5xl font-keterangan mb-7 text-end">#FOOD_FACT
          <div className="absolute transform -translate-x-14 -translate-y-24">
            <img
              src={Icon}
              alt="Icon"
              className="max-w-[125px]"
            />
          </div>
        </div>
        <div className="text-2xl font-keterangan text-justify mb-4 break-normal">
          Mungkin tak banyak yang tahu, french fries sejatinya berasal dari Belgia. Nama "french fries" mungkin muncul karena pada masa lalu, bahasa Prancis adalah bahasa resmi di Belgia.
        </div>
      </div>
      <div className="mt-9 mb-5 flex justify-between items-center">
        <Link to={"/"}>
          <button className="bg-yellow-500 hover:bg-orange-700 px-6 py-2.5 rounded-full flex flex-row gap-5">
            <FontAwesomeIcon icon={faFileArchive} size="3x" className="justify-center items-center text-center" />
            <h1 className="text-black text-6xl font-buttontext">MENU</h1>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Menu1;
