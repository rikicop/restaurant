import React from "react";
import styled from "styled-components";
import hero from "../../assets/hero.jpg";
import Button from "components/Button";
import { RiWhatsappFill } from "react-icons/ri";

const Hero = () => {
  return (
    <Section id="hero">
      <div className="text">
        <h1>
          <span className="highlight">TropiBurguer </span>las mejores
          hamburgesas de Cúcuta.
        </h1>
        <p>Comida rápida</p>
        <div className="button-wrapper">
          <a
            href="https://wa.me/573115097934"
            style={{ textDecoration: "none" }}
          >
            <Button text="Ordena Ahora" icon={<RiWhatsappFill />} />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Hero;

// background-image: url(${hero.src});
const Section = styled.section`
  background-image: url(${hero.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100vh;
  align-items: center;
  .text {
    color: black;
    padding-left: 10rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    font-weight: 500;
    .highlight {
      color: #f3fb04;
    }
    h1 {
      font-size: 4.8vw;
    }
    p {
      font-size: 1.5vw;
    }
    .button-wrapper {
      margin-bottom: 15px;
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
    margin: 0;
    padding: 0;
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
