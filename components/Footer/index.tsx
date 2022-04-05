import React from "react";
import styled from "styled-components";
import logo from "assets/logo.png";
//import Button from "../Button";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const links = [
    /*  {
      title: "Links",
      links: [
        "Brochure",
        "Company",
        "Terms & Conditions",
        "Privacy Policy",
        "Cookie Policy",
      ],
    }, */
    {
      title: "Contacto",
      links: ["+57 311 5097934", "megapixels@gmail.com", `Sector San Eduardo`],
    },
  ];
  return (
    <Footr id="footr">
      <div className="upper__footer">
        <div className="brand">
          <Image src={logo} alt="Footer Logo" />
          <p>
            From Tron to Narnya, the idea to suddenly be transferred in another
            world, where you could move, feel, interact and communicate is a
            recurring theme in books, animes and movies.
          </p>
        </div>
        {links.map(({ title, links }) => {
          return (
            <div className="links" key={title}>
              <h3>{title}</h3>
              <ul>
                {links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="lower__footer">
        <span>&copy; 2022 Earthium</span>
        <ul>
          <li>
            <FaFacebook style={{ marginRight: "10px" }} />
            Facebook
          </li>
          <li>
            <FaTwitter style={{ marginRight: "10px" }} />
            Twitter
          </li>
          <li>
            <FaInstagram style={{ marginRight: "10px" }} /> Instagram
          </li>
        </ul>
      </div>
    </Footr>
  );
}

const Footr = styled.footer`
  border-top: 0.02rem solid var(--primary-color);
  margin: 5rem 0rem 1rem 0rem;
  .upper__footer {
    margin: 0 5rem;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
    padding-top: 3rem;
    .brand {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      z-index: 1;
      gap: 1rem;
      img {
        height: 2rem;
      }
      .mail-container {
        display: flex;
        align-items: center;
        gap: 1rem;
        input {
          padding: 0.8rem 1rem;
          border-radius: 0.3rem;
          border: none;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.8rem 1rem;
          gap: 0.5rem;
        }
      }
    }
    .links {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      h3 {
        color: var(--primary-color);
      }
      ul {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        li {
          cursor: pointer;
          transition: 0.3s ease-in-out;
          &:hover {
            color: var(--primary-color);
          }
        }
      }
    }
  }
  .lower__footer {
    margin: 0 5rem;
    display: flex;
    justify-content: space-between;
    border-top: 0.02rem solid var(--primary-color);
    padding-top: 1rem;
    margin-top: 1rem;
    ul {
      display: flex;
      list-style-type: none;
      gap: 3rem;
      li {
        transition: 0.5s ease-in-out;
        cursor: pointer;
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem 1rem;
    .upper__footer {
      margin: 2rem 1rem;
      display: flex;
      flex-direction: column;
      padding-top: 1rem;
      .brand {
        .mail-container {
          flex-direction: column;
          align-items: flex-start;
        }
      }
      .links {
        ul {
          list-style-type: none;
        }
      }
    }
    .lower__footer {
      margin: 2rem 1rem;
      flex-direction: column-reverse;
      gap: 1.5rem;
      ul {
        flex-direction: column;
        gap: 1rem;
      }
    }
  }
`;
