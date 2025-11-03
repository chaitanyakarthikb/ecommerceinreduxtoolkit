import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Contact = () => {
  const contactRef = useRef();
  useEffect(() => {
    contactRef.current.scrollIntoView({
      behaviour: "smooth",
      block: "start",
    });
  }, []);
  return (
    <Wrapper>
      <div ref={contactRef} className="heading">
        <h2>Contact Page</h2>
      </div>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251389.63016535234!2d76.19017834207452!3d10.102116805288269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1761490984228!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xjkaboyj"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />
            <input
              type="email"
              placeholder="email"
              name="email"
              required
              autoComplete="off"
            />
            <textarea
              name="message"
              cols={30}
              rows={10}
              required
              autoComplete="off"
              placeholder="Enter your message"
            ></textarea>
            <input type="submit" name="submit button" value={"Send"} />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .heading {
    text-align: center;
    padding-top: 8rem;
    padding-bottom: 8rem;
  }

  .heading h2 {
    font-weight: 600;
  }
  iframe {
    width: 100%;
  }
  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

export default Contact;
