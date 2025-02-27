import React, { useState } from "react";
import { AiOutlineClose, AiOutlineHome } from "react-icons/ai";
import { BsCreditCard, BsGear } from "react-icons/bs";
import { FaUserAlt, FaMoneyBillWave, FaTools } from "react-icons/fa";
import { MdOutlineAccountBalanceWallet, MdCardGiftcard } from "react-icons/md";
import { RiBankLine } from "react-icons/ri";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";

// import { useLocation } from "react-router-dom";
const SideBar = ({ sidebar, open }) => {

  const [isBulkToolsOpen, setIsBulkToolsOpen] = useState(false);
  const location = useLocation();
  const activePagePath = location.pathname;
  const toggleBulkToolsDropdown = (e) => {
    e.preventDefault(); // Prevent accidental navigation.
    setIsBulkToolsOpen((prevState) => !prevState);
  };

  const menuItems = [
    { text: "Dashboard", icon: <AiOutlineHome size={25} />, page: "/" },
    { text: "Transactions", icon: <HiOutlineCurrencyDollar size={25} />, page: "#" },
    { text: "Accounts", icon: <FaUserAlt size={25} />, page: "#" },
    { text: "Investments", icon: <RiBankLine size={25} />, page: "#" },
    { text: "Credit Cards", icon: <BsCreditCard size={25} />, page: "/AllCreditCards" },
    { text: "Loans", icon: <HiOutlineCurrencyDollar size={25} />, page: "#" },
    { text: "Services", icon: <FaTools size={25} />, page: "/services" },
    { text: "My Privileges", icon: <MdCardGiftcard size={25} />, page: "#" },
    { text: "Setting", icon: <IoSettingsOutline size={25} />, page: "/settings" },
  ];

  const handleSidebarToggle = () => sidebar(!open);
  const handleClose = () => {
    // if (window.innerWidth <= 1279) {
    //   sidebar(true);
    // } else {
    //   sidebar(true);
    // }
  };
  return (
    <div
      className={`bg-gray-200 text-black overflow-y-auto h-screen z-50 top-0 ${
        open
          ? "xl:sticky 2xl:sticky md:fixed lg:fixed sm:fixed fixed w-[15rem]"
          : "w-[5rem] xl:block 2xl:block md:hidden lg:hidden sm:hidden hidden xl:sticky 2xl:sticky"
      } xl:h-screen transition-all duration-300`}>
      <div className="relative">
        <AiOutlineClose
          onClick={handleSidebarToggle}
          size={30}
          className={`absolute right-4 top-2 cursor-pointer  ${open ? "block xl:hidden 2xl:hidden lg:block md:block" : "md:hidden xl:hidden 2xl:hidden lg:block block"}`}/>
        <h2 className={`text-2xl text-center mt-3 ${open ? "block" : "hidden"}`}>
          <span className="font-bold text-black">Sora Task</span>
        </h2>
        <nav>
          <ul className="py-4">
            {menuItems.map(({ icon, text, page, subItems, icon2 }, index) => (
              <div key={index} className="py-3">
                <NavLink
                  to={page}
                  onClick={subItems ? toggleBulkToolsDropdown : handleClose}
                  className={`flex items-center gap-2 px-4 py-3  ${
                    activePagePath === page ? "border-l-4 rounded-md border-black" : " border-[#415baa]"
                  }`}>
                  {icon}
                  <div className={`${open ? "block" : "hidden"} flex justify-between items-center w-full`}>
                    <p>{text}</p> <span className="">{icon2}</span> 
                  </div>
                </NavLink>

               
              </div>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
