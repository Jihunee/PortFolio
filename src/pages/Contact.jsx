import axios from "axios";
import React, { useState } from "react";
import uuid from "react-uuid";
import styled from "styled-components";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (name === "" || email === "" || message === "") {
        alert("필수내용입니다.");
        return false;
      }
      const newContact = {
        id: uuid(),
        name,
        email,
        message,
      };
      await axios.post(
        `https://turquoise-chartreuse-bear.glitch.me/contact`,
        newContact
      );
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      alert("알 수 없는 오류가 발생하였습니다.");
      console.log("error", error);
    }
  };

  return (
    <Container>
      <ContactBox>
        <Header>Contact</Header>
        <Inputs onSubmit={onSubmitHandler}>
          <label htmlFor="name">
            <h1>Name</h1>
            <input
              value={name}
              id="name"
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
          <label htmlFor="email">
            <h1>E-mail</h1>
            <input
              value={email}
              id="email"
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label htmlFor="message">
            <h1>Message</h1>
            <textarea
              value={message}
              id="message"
              type="text"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </label>
          <Button>Send</Button>
        </Inputs>
      </ContactBox>
    </Container>
  );
}

export default Contact;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Times New Roman", Times, serif;
`;

const ContactBox = styled.div`
  position: relative;
  width: 900px;
  height: 600px;
  background-color: white;
  padding: 0 100px 0 100px;
  border-radius: 30px;
  box-shadow: -5px -5px 5px 5px white, 5px 5px 30px 5px gray;
`;

const Header = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
`;

const Inputs = styled.form`
  display: flex;
  height: 65%;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  & h1 {
    font-size: 20px;
    margin-bottom: 5px;
    font-weight: 700;
  }
  & input {
    width: 100%;
    resize: none;
    padding: 8px;
    font-size: 18px;
    outline: 0;
    border: 1px solid black;
    border-radius: 10px;
    font-family: "Times New Roman", Times, serif;
  }
  & textarea {
    width: 100%;
    resize: none;
    padding: 8px;
    font-size: 18px;
    outline: 0;
    border: 1px solid black;
    border-radius: 10px;
    font-family: "Times New Roman", Times, serif;
    height: 100%;
  }
`;

const Button = styled.button`
  position: absolute;
  bottom: 50px;
  left: 43%;
  font-family: "Times New Roman", Times, serif;
  width: 120px;
  border-radius: 30px;
  cursor: pointer;
  padding: 10px;
  border: none;
  background-color: transparent;
  box-shadow: -1px -1px 1px 1px white, 1px 1px 1px 1px gray;
  transition: all 0.3s ease-in-out;
  font-size: 20px;
  &:hover {
    background: linear-gradient(to right top, #d5b3ff, #b8ffc7);
    color: white;
  }
`;
