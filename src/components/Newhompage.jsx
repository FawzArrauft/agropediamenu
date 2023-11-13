import React from "react";
import logo from "../assets/img/test.gif";
import v1 from "../assets/img/homepage/v5.png";
import v2 from "../assets/img/homepage/v6.png";
import v3 from "../assets/img/homepage/v2.png";
import v4 from "../assets/img/homepage/v7.png";
import v5 from "../assets/img/homepage/v3.png";
import v6 from "../assets/img/homepage/v4.png";
import v7 from "../assets/img/homepage/v8.png";
import { Link } from 'react-router-dom';
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NewHompage = () => {
    return (
        <div className="bg-darkpattern w-screen h-screen overflow-y-auto relative bg-cover">
            {/* Container untuk GIF */}
            <div className="justify-center items-center flex mt-5">
                <img
                    src={logo}
                    alt="logo"
                />
            </div>
            <h1 className="text-white text-[70px] font-display tracking-[.45rem] mt-10 ml-12 text-left drop-shadow-[-3px_-3px_1px_rgba(255,255,255,100)]">
                APPETIZER
            </h1>
            {/* Grid dengan kolom tunggal */}
            <div className="grid grid-cols-1 justify-center items-center ml-8 mr-10 gap-5">
                {/* Container untuk keterangan (tengah) */}
                <Link to={'/Menu1'}>
                    <button className="homebtn">
                        <div className="flex items-center gap-10">
                            <img
                                src={v1}
                                alt=""
                                className="w-36 h-36 justify-center items-center"
                            />
                            <h2 className="hometext">
                                FRENCH FRIES
                                <p className="font-light text-3xl font-mono">with Creamy Tartar Sauce</p>
                            </h2>
                        </div>
                        <h3 className="text-right text-white text-5xl font-display">
                            22.-
                        </h3>
                    </button>
                </Link>
                {/* APPETIZER 2 */}
                <Link to={'/Menu2'}>
                    <button className="homebtn">
                        <div className="inline-flex items-center gap-10">
                            <img
                                src={v2}
                                alt=""
                                className="w-32 h-32 justify-center items-center ml-4"
                            />
                            <FontAwesomeIcon icon={solidStar} size="3x" className=" left-[130px] top-[700px] homefav" />
                            <h2 className="hometext">
                                CHESSY NACHO DELIGHT
                            </h2>
                        </div>
                        <h3 className="text-right text-white text-5xl font-display">
                            23.-
                        </h3>
                    </button>
                </Link>
            </div>
            <h1 className="text-white text-[70px] font-display tracking-[.45rem] ml-12 text-left drop-shadow-[-3px_-3px_1px_rgba(255,255,255,100)]">
                MAIN DISH
            </h1>
            <div className="grid grid-cols-1 justify-center items-center ml-8 mr-10 gap-5">
                {/* Container untuk keterangan (tengah) */}
                <Link to={'/Menu3'}>
                    <button className="homebtn">
                        <div className="flex items-center gap-10">
                            <img
                                src={v3}
                                alt=""
                                className="w-36 h-36 justify-center items-center"
                            />
                            <FontAwesomeIcon icon={solidStar} size="3x" className=" left-[130px] top-[950px] homefav" />
                            <h2 className="hometext">
                                MR. B FOR BEEF TERIYAKI
                                <p className="font-light text-3xl font-mono">Enjoy the tender meat wrapped in teriyaki sauce and 50g fries</p>
                            </h2>
                        </div>
                        <h3 className="text-right text-white text-5xl font-display">
                            43.-
                        </h3>
                    </button>
                </Link>
                <Link to={'/Menu4'}>
                    <button className="homebtn">
                        <div className="flex items-center gap-10">
                            <img
                                src={v3}
                                alt=""
                                className="w-36 h-36 justify-center items-center"
                            />
                            <h2 className="hometext">
                                MR. B FOR BEEF BOLOGNESE
                                <p className="font-light text-3xl font-mono">Enjoy the tender meat wrapped in bolognese sauce and 50g fries</p>
                            </h2>
                        </div>
                        <h3 className="text-right text-white text-5xl font-display">
                            41.-
                        </h3>
                    </button>
                </Link>
                <Link to={'/Menu5'}>
                    <button className="homebtn">
                        <div className="flex items-center gap-10">
                            <img
                                src={v4}
                                alt=""
                                className="w-36 h-36 justify-center items-center"
                            />
                            <h2 className="hometext">
                                SPAGHETTI BOLOGNESE
                                <p className="font-light text-3xl font-mono"> Spaghetti with homemade bolognese sauce served with sausage and parsley</p>
                            </h2>
                        </div>
                        <h3 className="text-right text-white text-5xl font-display">
                            35.-
                        </h3>
                    </button>
                </Link>
                <Link to={'/Menu6'}>
                    <button className="homebtn">
                        <div className="flex items-center gap-10">
                            <img
                                src={v5}
                                alt=""
                                className="w-36 h-36 justify-center items-center"
                            />
                            <FontAwesomeIcon icon={solidStar} size="3x" className=" left-[130px] bottom-[400px] homefav" />
                            <h2 className="hometext">
                                SPAGHETTI ALFREDO MUSHROOM
                                <p className="font-light text-3xl font-mono">Spaghetti Alfredo served in a creamy sauce with mushroom pieces.</p>
                            </h2>
                        </div>
                        <h3 className="text-right text-white text-5xl font-display">
                            37.-
                        </h3>
                    </button>
                </Link>
                <Link to={'/Menu7'}>
                    <button className="homebtn">
                        <div className="flex items-center gap-10">
                            <img
                                src={v6}
                                alt=""
                                className="w-36 h-36 justify-center items-center"
                            />
                            <h2 className="hometext">
                                TACO FIESTA PICO DE GALLO
                                <p className="font-light text-3xl font-mono">perfect blend of authentic beef tacos with fresh Mexican pico de gallo and 70g fries</p>
                            </h2>
                        </div>
                        <h3 className="text-right text-white text-5xl font-display">
                            33.-
                        </h3>
                    </button>
                </Link>
            </div>
            <div className="mx-80 mt-5">
                <Link to={'/Minuman1'}>
                    <button className="inline-flex items-center justify-center p-4 rounded-xl bg-black ring-inset ring-2 ring-white drop-shadow-[2px_2px_5px_rgba(255,255,255,100)] animate-pulse">
                        <img
                            src={v7}
                            alt=""
                            className="w-[75px]"
                        />
                        <h1 className="font-display text-white text-5xl">
                            MENU MINUMAN
                        </h1>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default NewHompage;