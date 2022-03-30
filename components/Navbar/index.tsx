import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";
import flag from "../../assets/flag.png";
import { FiLock } from "react-icons/fi";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 3rem 6rem;
`;

/* const StyledLink = styled.a`
  padding: 0rem 2rem;
  text-decoration: none;
  color: #fff;
`; */

const Navbar = () => {
  const [navState, setNavState] = useState<boolean>(false);
  return (
    <Nav>
      <div className="brand">
        <div className="logo">
          <Image src={logo} alt="Brand Logo" className="Brand Logo" />
        </div>
        <div className="toggle">
          {navState ? (
            <BsToggleOn onClick={() => setNavState(false)} />
          ) : (
            <BsToggleOff onClick={() => setNavState(true)} />
          )}
        </div>
      </div>
      <div className={`links ${navState ? "show" : "hide"}`}>
        <ul>
          {/* 
          <li>
            <a href="#home">Home</a>
          </li> 
          */}
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="login-btn">
          <div className="flag">
            <Image src={flag} alt="Flag" className="Flag" />
            <span>English</span>
          </div>
          <button>
            <FiLock /> Login / Signup
          </button>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;

// OLD CODE
/*  <Nav>
      <div>
        <Link href="/" passHref>
          <StyledLink>NXT</StyledLink>
        </Link>
      </div>
      <div>
        <Link href="/" passHref>
          <StyledLink>Home</StyledLink>
        </Link>
        <Link href="/about" passHref>
          <StyledLink>About</StyledLink>
        </Link>
        <Link href="/contact" passHref>
          <StyledLink>Contact</StyledLink>
        </Link>
      </div>
    </Nav> */
