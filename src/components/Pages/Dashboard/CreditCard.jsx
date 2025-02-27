import React, { useState } from "react";

import CreditCards from "../common/CreditCard/CreditCards";
import { Link } from "react-router-dom";

const CreditCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    <CreditCards key={1} theme="dark" />, 
    <CreditCards key={2} theme="light" />,
    <CreditCards key={3} theme="dark" />,
    <CreditCards key={4} theme="light" />,
    
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div className="2xl:w-[69%] xl:w-[63%] w-full">
      <div className="w-full flex justify-between items-center my-4">
        <h2 className="md:text-lg text-sm font-semibold text-gray-900">Credit Card</h2>
        <Link to={"/AllCreditCards"}className="text-blue-500 hover:underline md:text-lg text-sm">See All</Link>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {cards.map((card, index) => (
            <div key={index} className="w-full md:w-1/2 xl:px-2 px-0 flex-shrink-0">
              {card}
            </div>
          ))}
        </div></div>
    </div>
  );
};

export default CreditCard;