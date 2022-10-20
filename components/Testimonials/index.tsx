import Image from "next/image";
import React from "react";
import styled from "styled-components";
import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";
import { TitleStyles, imageZoomEffect } from "../ReusableStyles";
export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="container">
        <div className="title">
          <h1>
            <span>What</span> Customers Says
          </h1>
        </div>
        <div className="testimonials">
          <div className="testimonial">
            <div className="image-testimonial">
              <Image src={avatar1} alt="" width="100%" height="100%" />
            </div>
            <p>
              He Printing and Typesetting the industry. <span>Lorem Ipsum</span>{" "}
              has been the Industry's
            </p>
          </div>
          <div className="testimonial">
            <div className="image-testimonial">
              <Image src={avatar2} alt="" width="100%" height="100%" />
            </div>
            <p>
              He Printing and Typesetting the industry. <span>Lorem Ipsum</span>{" "}
              has been the Industry's
            </p>
          </div>
          <div className="testimonial">
            <div className="image-testimonial">
              <Image src={avatar3} alt="" width="100%" height="100%" />
            </div>
            <p>
              He Printing and Typesetting the industry. <span>Lorem Ipsum</span>{" "}
              has been the Industry's
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5vw;
  background: linear-gradient(to right, #fc4958, #e85d04, #fc4958);
  padding: 0.2rem;
  border-radius: 1.5rem;
  position: relative;
  .container {
    margin: 0.5rem;
    padding-top: 1vw;
    padding-bottom: 4vw;
    background-color: white;
    border-radius: 1rem;
    ${TitleStyles};
    .title {
      position: absolute;
      top: -1rem;
      left: 25%;
      padding: 0 2rem;
      background-color: white;
    }
    .testimonials {
      display: flex;
      justify-content: space-between;
      line-height: 10%;
      align-items: center;
      gap: 6vw;
      margin-top: 3vw;
      .testimonial {
        padding: 0 4vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1rem;
        p {
          font-size: 1.1rem;
          line-height: 1.6rem;
          letter-spacing: 0.1rem;
          span {
            color: #fc4958;
          }
        }
        ${imageZoomEffect};
        .image-testimonial {
          overflow: hidden;
          width: max-content;
          max-height: 10rem;
          border-radius: 10rem;
          img {
            height: 10rem;
            object-fit: cover;
          }
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    margin-top: 20vw;
    .container {
      .title {
        position: initial;
        background-color: transparent;
      }
      .testimonials {
        flex-direction: column;
      }
    }
  }
`;
