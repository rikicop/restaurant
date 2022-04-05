import React from "react";
import styled from "styled-components";
import planeta from "../../assets/background.png";
import imageHero from "../../assets/home.png";
import Button from "components/Button";
import { RiWhatsappFill } from "react-icons/ri";
import Image from "next/image";

const Hero = () => {
  return (
    <Section id="hero">
      <div className="text">
        <h1>
          <span className="highlight">Megapixeles </span>es tu estrategia de
          publicidad.
        </h1>
        <p>
          Empresa orientada a la publicidad,
          <span className="highlight">exterior visual </span>y
          <span className="highlight"> medios alternativos</span>
        </p>

        <a href="https://wa.me/573115097934" style={{ textDecoration: "none" }}>
          <Button text="Contáctame" icon={<RiWhatsappFill />} />
        </a>
      </div>
      <div className="image">
        <Image src={imageHero} alt="hero" />
      </div>
    </Section>
  );
};

export default Hero;

// background-image: url(${planeta.src});
const Section = styled.section`
  background-image: url(${planeta.src});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  display: grid;
  grid-template-columns: 50% 50%;
  height: 80vh;
  align-items: center;
  .text {
    padding-left: 10rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .highlight {
      color: var(--primary-color);
    }
    h1 {
      font-size: 4.8vw;
    }
    p {
      font-size: 1.5vw;
    }
  }
  .image {
    img {
      width: 80%;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column-reverse;
    height: max-content;
    text-align: center;
    margin: 0 1rem;
    .image {
      img {
        width: 100%;
      }
    }
    .text {
      padding-left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      h1 {
        font-size: 8vw;
      }
      p {
        font-size: 5vw;
      }
    }
  }
`;
