import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CreditCards from "../../../../../components/Pages/common/CreditCard/CreditCards";
export default function AllCreditCards() {
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
    <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
        {cards.map((card, index) => (
            <div key={index} className="w-full md:w-1/2 xl:px-2 px-0 flex-shrink-0">
              {card}
            </div>
          ))}
    </div>
  )
}
