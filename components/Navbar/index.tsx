import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import logo from "../../assets/food2.png";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { Link as LinkScroll } from "react-scroll";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0rem 1rem;
  .brand {
    display: flex;
    align-items: center;
    .logo {
      img {
        object-fit: contain;
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
    
    ul {
      display: flex;
      list-style-type: none;
      gap: 2rem;
      li {
        padding: 0.5rem 1rem;
        transition: 0.3s ease-in-out;
        &:first-of-type {
          background-color: var(--primary-color);
          border-radius: 0.3rem;
          a {
            color: black;
          }
        }
        &:hover {
          background-color: var(--primary-color);
          border-radius: 0.3rem;
          a {
            color: black;
          }
        }
        a {
          text-decoration: none;
          color: #666;
          font-weight: bold;
          transition: 0.3s ease-in-out;
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
        color: #666;
        border-radius: 0.3rem;
        padding: 0.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
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
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: relative;
    margin: 0;
    z-index: 1;
    .brand {
      padding: 1rem 1rem;
      justify-content: space-between;
      width: 100%;
      z-index: 2;
      background-color: var(--background-color);
      .toggle {
        display: block;
        svg {
          font-size: 2rem;
        }
      }
    }
    .links {
      position: absolute;
      background-color: #fff;
      flex-direction: column;
      margin-top: 5rem;
      width: 100vw;
      padding: 4rem 0;
      transition: 0.4s ease-in-out;
      gap: 2rem;
      ul {
        flex-direction: column;
        gap: 1rem;
      }
      .login-btn {
        flex-direction: column;
      }
    }
    .show {
      top: 0;
    }
    .hide {
      top: -600px;
    }
  }
`;

const Navbar = () => {
  const [navState, setNavState] = useState<boolean>(false);
  return (
    <Nav>
      <div className="brand">
        <div className="logo">
          <Image
            src={logo}
            alt="Brand Logo"
            height={70}
            width={100}
          />
        </div>
        <div className="toggle">
          {navState ? (
            <BsToggleOn onClick={() => setNavState(false)} color="27ae60" />
          ) : (
            <BsToggleOff onClick={() => setNavState(true)} color="27ae60" />
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
            <LinkScroll
              to="hero"
              smooth={true}
              duration={100}
              style={{ cursor: "pointer" }}
            >
              Principal
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              to="portfolio"
              smooth={true}
              duration={100}
              style={{ cursor: "pointer" }}
            >
              Prodcuts
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              to="footer"
              smooth={true}
              duration={100}
              style={{ cursor: "pointer" }}
            >
              Contacto
            </LinkScroll>
          </li>
        </ul>
      </div>
    </Nav>
  );
};

export default Navbar;
