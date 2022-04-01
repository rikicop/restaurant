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
  .brand {
    display: flex;
    align-items: center;
    .logo {
      .brandLogo {
        height: 5vh;
      }
    }
    .toggle {
      display: none;
    }
  }
  .links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    ul {
      display: flex;
      list-style-type: none;
      gap: 2rem;
      li {
        padding: 0.5rem 1rem;
        transition: 0.3s ease-in-out;
        border-radius: 0.3rem;
        &:first-of-type,
        &:hover {
          background-color: var(--primary-color);
          a {
            color: black;
          }
        }
        a {
          text-decoration: none;
          color: white;
          font-weight: bold;
          transform: 0.3s ease-in-out;
        }
      }
    }
    .login-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      .flag {
        display: flex;
        justify-content: center;
        gap: 0.3rem;
        align-items: center;
        font-weight: bold;
        cursor: pointer;
      }
      button {
        border: 1px solid var(--primary-color);
        background-color: transparent;
        color: white;
        border-radius: 0.3rem;
        padding: 0.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.7rem;
        font-weight: bold;
        cursor: pointer;
        svg {
          font-weight: bold;
          font-size: 1.1rem;
        }
      }
    }
  }
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
          <Image src={logo} alt="Brand Logo" className="brandLogo" />
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
