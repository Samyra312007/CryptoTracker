import React from "react";
import Dock from "../reactbits/Dock/Dock";
import { VscHome, VscArchive, VscAccount } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import About from "../pages/About";

const Navbar = () => {
  const navigate = useNavigate();

  const homeRoute = () => {
    navigate('/');
  };

  const watchlistRoute = () => {
    navigate('/watchlist');
  };

  const aboutRoute = () => {
    navigate('/about');
    About()
  };

  const items = [
    {
      icon: <VscHome size={18} style={{color: "white"}}/>,
      label: "Home",
      onClick: homeRoute,
    },
    {
      icon: <VscArchive size={18} style={{color: "white"}}/>,
      label: "Watchlist",
      onClick: watchlistRoute,
    },
    {
      icon: <VscAccount size={18} style={{color: "white"}}/>,
      label: "About",
      onClick: aboutRoute,
    },
  ];
  return (
    <div>
      <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </div>
  );
};

export default Navbar;
