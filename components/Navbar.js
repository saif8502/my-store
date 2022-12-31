import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">myStore</Link>
      </p>
      <div className="toggler flex align-item-center">
        <p className="toggler--light m-b-5">Light</p>
        <div className="toggler--slider m-b-5" onClick={toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark m-b-5">Dark</p>
      
      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping className="m-l-21" />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
      </div>
    </div>
  );
};

export default Navbar;
