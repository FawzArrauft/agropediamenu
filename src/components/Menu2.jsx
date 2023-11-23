import { faFileArchive, faStar as solidStar, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import React from "react";
import Makanan1 from "../assets/img/gambarmenu/sidedish2.png";
import Bahan1 from "../assets/img/bahan2/cheese.jpeg";
import Bahan2 from "../assets/img/bahan2/sauce.jpeg";
import Bahan3 from "../assets/img/bahan2/tortila.jpeg";
import Icon from "../assets/img/mangi.png";
import { Link } from "react-router-dom";

const Menu2 = () => {
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
    <div className="flex flex-col items-center justify-center bg-sidedish2 bg-cover bg-center min-h-screen overflow-y-auto">
      <h1
        className={`font-display2 text-[185px] -my-7 textbg text-center align-baseline 
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
            <FontAwesomeIcon icon={solidStar} size="2x" className="bintang" />
            <FontAwesomeIcon icon={solidStar} size="2x" className="bintang" />
            <FontAwesomeIcon icon={solidStar} size="2x" className="bintang" />
            <FontAwesomeIcon icon={regularStar} size="2x" className="bintang" />
            <FontAwesomeIcon icon={regularStar} size="2x" className="bintang" />
          </span>
        </div>
        <div className="flex items-center flex-col mt-4">
          <p className="flavortext">UMAMI</p>
          <span className="flex items-center justify-center gap-1">
            <FontAwesomeIcon icon={solidStar} size="2x" className="bintang" />
            <FontAwesomeIcon icon={solidStar} size="2x" className="bintang" />
            <FontAwesomeIcon icon={solidStar} size="2x" className="bintang" />
            <FontAwesomeIcon icon={regularStar} size="2x" className="bintang" />
            <FontAwesomeIcon icon={regularStar} size="2x" className="bintang" />
          </span>
        </div>
        <div className="flex items-center flex-col mt-4">
          <p className="flavortext">ASAM</p>
          <span className="flex items-center justify-center gap-1">
            <FontAwesomeIcon icon={solidStar} size="2x" className="bintang" />
            <FontAwesomeIcon icon={solidStar} size="2x" className="bintang" />
            <FontAwesomeIcon icon={solidStar} size="2x" className="bintang" />
            <FontAwesomeIcon icon={regularStar} size="2x" className="bintang" />
            <FontAwesomeIcon icon={regularStar} size="2x" className="bintang" />
          </span>
        </div>
        <div className="flex items-center flex-col mt-4 col-start-2">
          <p className="flavortext">ASIN</p>
          <span className="flex items-center justify-center gap-1">
            <FontAwesomeIcon icon={solidStar} size="2x" className="bintang" />
            <FontAwesomeIcon icon={solidStar} size="2x" className="bintang" />
            <FontAwesomeIcon icon={solidStar} size="2x" className="bintang" />
            <FontAwesomeIcon icon={regularStar} size="2x" className="bintang" />
            <FontAwesomeIcon icon={regularStar} size="2x" className="bintang" />
          </span>
        </div>
        <div className="flex items-center flex-col mt-4 col-start-4">
          <p className="flavortext">PEDAS</p>
          <span className="flex items-center justify-center gap-1">
            <FontAwesomeIcon icon={solidStar} size="2x" className="bintang" />
            <FontAwesomeIcon icon={solidStar} size="2x" className="bintang" />
            <FontAwesomeIcon icon={solidStar} size="2x" className="bintang" />
            <FontAwesomeIcon icon={regularStar} size="2x" className="bintang" />
            <FontAwesomeIcon icon={regularStar} size="2x" className="bintang" />
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
              className="btnbase top-[450px] left-[250px]"
              onClick={() =>
                openPopup(
                  "Campuran segar dengan tomat cincang, bawang bombay, garam, air jeruk nipis, gula, dan jeruk nipis yang berasal dari petani lokal di Bandung.",
                  Bahan2,
                  "PICO DE GALO" // Menetapkan judul pop-up
                )
              }
            >
              <span className="btnanimate"></span>
              <span className="btnketerangan"></span>
            </button>
            <button
              className="btnbase top-[400px] left-[5px]"
              onClick={() =>
                openPopup(
                  "Keripik tortilla yang ciptakan dari jagung segar, memberikan rasa renyah dan autentik.",
                  Bahan3,
                  "TORTILLA CHIPS" // Menetapkan judul pop-up
                )
              }
            >
              <span className="btnanimate"></span>
              <span className="btnketerangan"></span>
            </button>
          </div>
        )}

        {isPopupOpen ? ( //BUAT POP UP MENU SATUNYA
          <div className="absolute left-[220px]">
            <button
              className="btnbase top-[450px] left-[250px]"
              onClick={() =>
                openPopup(
                  "Campuran segar dengan tomat cincang, bawang bombay, garam, air jeruk nipis, gula, dan jeruk nipis yang berasal dari petani lokal di Bandung.",
                  Bahan2,
                  "PICO DE GALO" // Menetapkan judul pop-up
                )
              }
            >
              <span className="btnanimate"></span>
              <span className="btnketerangan"></span>
            </button>
            <button
              className="btnbase top-[400px] left-[5px]"
              onClick={() =>
                openPopup(
                  "Keripik tortilla yang ciptakan dari jagung segar, memberikan rasa renyah dan autentik.",
                  Bahan3,
                  "TORTILLA CHIPS" // Menetapkan judul pop-up
                )
              }
            >
              <span className="btnanimate"></span>
              <span className="btnketerangan"></span>
            </button>
          </div>
        ) : null}
        <div className="flex flex-col justify-center items-center my-[365px]">
        </div>
      </div>
      <div className="text-center mb-10">
        <h1 className="font-foodname text-white font-bold drop-shadow-[0_45px_45px_rgba(0,0,0,0.5)] text-7xl">
          CHESSY NACHOS DELIGHT
        </h1>
        <h2 className="font-foodname font-bold textbg text-5xl break-normal">
          Enjoy crispy tortilla chips with
          <p>delicious cheese sauce that coats every bite.</p>
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
        <div className="text-3xl font-keterangan text-justify mb-4 break-normal">
          Nacho adalah hidangan asli Meksiko yang sederhana, terdiri dari keripik tortilla yang disiram dengan saus keju, saus salsa, dan sour cream.
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

export default Menu2;