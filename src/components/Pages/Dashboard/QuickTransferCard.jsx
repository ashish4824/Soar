import React, { useRef } from "react";
import { useSelector } from 'react-redux';

import { ArrowRight, Send } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import boy from "../../../assets/UsersImages/boy.png";
import user2 from "../../../assets/UsersImages/man.png";
import girl from "../../../assets/UsersImages/woman.png";
const users = [
  {
    name: "Livia Bator",
    title: "CEO",
    image: boy,
  },
  {
    name: "Randy Press",
    title: "Director",
    image: user2,
  },
  {
    name: "Workman",
    title: "Designer",
    image: girl,
  },
];
const QuickTransferCard = () => {
  const userData = useSelector((state) => state.user);

  const sliderRef = useRef(null);
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const handleNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  return (
    <div className="2xl:w-[29%] xl:w-[35%] w-full ">
      <h2 className="text-lg font-semibold my-4">Quick Transfer</h2>
      <div className="bg-white shadow-2xl rounded-2xl p-6 py- w-full h-full relative border-2 border-gray-200">
        <Slider ref={sliderRef} {...settings}>
          {users.map((user, index) => (
            <div key={index} className="flex items-center space-x-4 mb-4">
              <div className="flex flex-col items-center">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span className="font-bold">{userData.name}</span>

                <span className="text-blue-600 font-semibold text-sm">{userData.title}</span>

              </div>
            </div>
          ))}
        </Slider>
        <div className="mb-4 flex justify-center absolute right-0 top-10">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer" onClick={handleNextSlide}>
            <ArrowRight className="text-gray-500" />
          </div>
        </div>
        <div className="my-4 flex justify-between items-center">
          <div>
            <label className="text-gray-700 font-semibold text-sm w-full">Write Amount</label>
          </div>
          <div className="flex items-center bg-gray-100 rounded-l-full">
            <input type="text" value="525.50" className="mt-1 bg-gray-100 text-center outline-none focus:outline-none w-28" readOnly />
            <button className="bg-black text-white w-full flex items-center justify-center py-2 rounded-3xl px-4">
              Send <Send className="ml-2" size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickTransferCard;
