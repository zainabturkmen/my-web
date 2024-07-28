import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Lottie from "lottie-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import animation from "../assets/animation.json";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const isFormValid = form.current.checkValidity();
    if (!isFormValid) {
      toast.error("Please fill in all required fields.");
      return;
    }

    emailjs
      .sendForm("service_ikm6rfc", "template_5s3et7s", form.current, {
        publicKey: "PTj-7AOYZYNkEZb6O",
      })
      .then(
        () => {
          toast.success("Email sent successfully!");
          form.current.reset(); // Reset the form after successful submission
        },
        (error) => {
          toast.error("Failed to send email. Please try again.");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <Wrapper id="contact">
      <div className="title">Contact Me</div>
      <div className="content">
        <div className="image-container">
          <Lottie animationData={animation} />
        </div>
        <div className="form-container">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="from_name" required />
            <label>Email</label>
            <input type="email" name="from_email" required />
            <label>Message</label>
            <textarea name="message" required />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
      <ToastContainer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background: linear-gradient(135deg, #f6f9fc, #e9ecef);

  @media (max-width: 768px) {
    padding: 15px;
  }

  .title {
    font-size: 32px;
    margin-bottom: 20px;
    color: #333;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 24px;
      margin-bottom: 15px;
    }
  }

  .content {
    display: flex;
    width: 100%;
    gap: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    .form-container,
    .image-container {
      flex: 1;
      padding: 20px;

      @media (max-width: 768px) {
        padding: 15px;
      }
    }

    .image-container {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 100%;
        height: auto;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
    }

    .form-container {
      form {
        display: flex;
        flex-direction: column;
        align-items: center;

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
          background-color: #69d1ee;
          color: black;
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
      }
    }
  }
`;
