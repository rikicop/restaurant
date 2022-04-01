import React from "react";
import styled from "styled-components";
import planeta from "../../assets/background.png";
import imageHero from "../../assets/home.png";
import Button from "components/Button";
import { RiGroupLine } from "react-icons/ri";
import Image from "next/image";

const Hero = () => {
  return (
    <Section id="hero">
      <div className="text">
        <h1>
          <span className="highlight">Ethereum</span>is a real time strategic
          game
        </h1>
        <p>
          Donde crearás tu publicidad, <span className="highlight">crypto</span>
          and <span className="highlight">NFT'S</span> by trading land, finding
          treasures and building Busisness. Welcome!
        </p>
        <Button text="Join our Discord" icon={<RiGroupLine />} />
      </div>
      <div className="image">
        <Image src={imageHero} alt="hero" />
      </div>
    </Section>
  );
};

export default Hero;

const Section = styled.section`
  background-image: url(${planeta.src});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  display: grid;
  grid-template-columns: 50% 50%;
  height: 80vh;
  align-items: center;
  .image {
    img {
      width: 80%;
    }
  }
  .text {
    padding-left: 10rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    .highlight {
      color: var(--primary-color);
    }
    h1 {
      font-size: 4.8vw;
    }
    font-size: 1.5vw;
  }
`;
