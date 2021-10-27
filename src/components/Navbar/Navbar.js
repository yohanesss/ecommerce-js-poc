import React from "react";
import CartIcon from "./CartIcon";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { NavbarContainer, NavbarInnerContainer } from "./Navbar.style";

const Navbar = ({ cart }) => {
    return (
        <NavbarContainer>
            <NavbarInnerContainer>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <Logo />
                </Link>
                <Link to="/cart">
                    <CartIcon cart={cart} />
                </Link>
            </NavbarInnerContainer>
        </NavbarContainer>
    );
};

export default Navbar;
