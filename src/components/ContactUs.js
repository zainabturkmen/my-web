import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import animation from "../assets/animation.json";
import Lottie from "lottie-react";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ikm6rfc", "template_5s3et7s", form.current, {
        publicKey: "PTj-7AOYZYNkEZb6O",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <Wrapper>
      <div className="image-container">
        <Lottie animationData={animation} />
      </div>
      <div className="form-container">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="from_name" />
          <label>Email</label>
          <input type="email" name="from_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background: linear-gradient(135deg, #f6f9fc, #e9ecef);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px;
  }

  .form-container,
  .image-container {
    flex: 1;
    padding: 20px;

    @media (max-width: 768px) {
      padding: 15px;
    }
  }

  .image-container img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  label {
    width: 100%;
    text-align: left;
  }

  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;

    @media (max-width: 768px) {
      padding: 8px;
    }
  }

  input[type="submit"] {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }

    @media (max-width: 768px) {
      padding: 8px;
      font-size: 16px;
    }
  }
`;
