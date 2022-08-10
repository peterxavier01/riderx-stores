import React from "react";
import Link from "next/link";

import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

import { AiOutlineShopping, AiOutlineDesktop } from "react-icons/ai";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <AiOutlineDesktop style={{ fontSize: 24}} />
        <Link href="/">Riderx Gadgets</Link>
      </p>
      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
