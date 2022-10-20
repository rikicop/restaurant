import React from "react";
import styled from "styled-components";
import logo from "assets/food.png";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  

/* COMO USAR IMAGEN EN NEXTJS */

/*  
  <div className="brand">
    <Image src={logo} alt="Footer Logo" height={120} width={400} />
    <p>
      From Tron to Narnya, the idea to suddenly be transferred in another
      world, where you could move, feel, interact and communicate is a
      recurring theme in books, animes and movies.
    </p>
  </div> 
*/

  return (
   <div className="footer">
    <Section>
      <div className="brand container">
        <Image src={logo} alt="Footer Logo" height={120} width={400} />
        <p>
          From Tron to Narnya, the idea to suddenly be transferred in another
        </p>
        <ul>
          <li><FaFacebook/></li>
          <li><FaInstagram/></li>
          <li><FaTwitter/></li>
        </ul>
      </div>  
      <div className="about container">
        <div className="title"><h3>About us</h3></div>
        <p>
          From Tron to Narnya, the idea to suddenly be transferred in another
          world, where you could move, feel, interact and communicate is a
          recurring theme in books, animes and movies.
        </p>
      </div>
      <div className="contact container">
        <div className="title"><h3>Contact us</h3></div>
        <p> +34 654 765 456</p>
        <p> rikotalora@gmail.com </p>
        <p> @rikotalora </p>
        <p> 412 Street, Gorund Floor, Cúcuta </p>
      </div>
    </Section>
   </div>
  );
}

const Section = styled.footer`
  margin: 0;
  background: linear-gradient(to right,#fc4958,#e85d04); 
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10vw;
  padding: 4vw;
  p {
    font-size: 1.1rem;
    line-height: 2rem;
    letter-spacing: 0.1rem;
  }
  ul {
    display: flex;
    list-style-type: none;
    gap: 4vw;
    margin-top: 2vw;
    li {
      padding: 0.8rem;
      border-radius: 2rem;
      background-color: white;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        background-color: black;
        svg {
          transform: scale(1.2);
        }
      }
      svg {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fb3434;;
        font-size: 1.6rem;
        transition: 0.3s ease-in-out;
        &:hover {
        }
      }
    }
  }
  img {
    filter: brightness(0) invert(1);
    width: 10vw;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    h3 {
      font-size: 2rem;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    .container {
      img {
        height: 4rem;
        width: 10rem;
      }
    }
  }
`;

/* const LowerFooter = styled.div`

 margin: 0;
  text-align: center;
  background-color: black;
  color: white;
  padding: 1rem;
  h2 {
    span {
      color: #FBB034;
      text-transform: uppercase;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 450px) {
    h2 {
      span {
        display: block;
      }
    }
  }
` */