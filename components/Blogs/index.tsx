import Image from "next/image";
import React from "react";
import styled from "styled-components";
import blog1 from "../../assets/blog1.jpg";
import blog2 from "../../assets/blog1.jpeg";
import blog3 from "../../assets/blog3.jpg";

const Blogs = () => {
  const images = [
    {
      picture: blog1,
      title: "Pancartas de Vinilo personalizadas",
      description:
        "Las pancartas de vinilo son un medio útil y efectivo que sirve para diversos propósitos personales y de marketing. Las pancartas de vinilo personalizadas son convenientes si está buscando algo para usar al aire libre durante mucho tiempo. ",
    },
    {
      picture: blog2,
      title: "Pancartas para exposiciones comerciales",
      description:
        "Instalar una pancarta de vinilo en las exposiciones significa que se beneficiará enormemente de sus características y ventajas. La impresión de pancartas de vinilo es económica y ayuda a mostrar contenido visualmente atractivo.",
    },
    {
      picture: blog3,
      title: "Pancartas de vinilo para desfiles",
      description:
        "¿Estás lanzando tu marca o actualizando tus servicios? Obtenga pancartas de vinilo personalizadas de apertura próxima para que las personas estén alertas a los cambios futuros. Coloque la impresión de pancartas de vinilo cerca del edificio de oficinas.",
    },
  ];

  return (
    <Section id="blogs">
      <div className="title">
        <h2>Servicios!</h2>
        <h5>Donde te puedes promocionar!</h5>
      </div>
      <div className="blogs">
        {images.map(({ picture, title, description }) => {
          return (
            <div className="blog" key={title}>
              <Image src={picture} alt="imagen" />
              <div className="data">
                {/* <h6>1 Jan,2022</h6> */}
                <h4>{title}</h4>
                <p style={{ textAlign: "justify", fontSize: "0.9rem" }}>
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Blogs;

const Section = styled.section`
  margin: 4rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
  }
  .blogs {
    display: flex;
    gap: 5rem;
    .blog {
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-direction: column;
      background-color: rgba(0, 0, 0, 0.3);
      border-bottom: 0.5rem transparent solid;
      transition: 0.3s ease-in-out;
      &:hover {
        border-color: var(--primary-color);
      }
      img {
        width: 99%;
      }
      .data {
        padding: 1rem;
        gap: 1rem;
        display: flex;
        flex-direction: column;
        p {
          font-size: 0.9rem;
          font-weight: 100;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem 1rem;
    .title {
      h2 {
        font-size: 2.4rem;
        color: var(--primary-color);
      }
    }
    .blogs {
      flex-direction: column;
      gap: 2rem;
    }
  }
`;
