import React from "react";
import styled from "styled-components";
import { FaUser } from "react-icons/fa";
import { IoCalendarClear } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaSchool } from "react-icons/fa";

function Information() {
  return (
    <Container>
      <Infobox
        style={{
          boxShadow: "-5px -5px 5px 5px white, 5px 5px 30px 5px gray",
        }}
      >
        <FaUser size={40} />
        <h1>이름</h1>
        <h2>서지훈</h2>
      </Infobox>
      <Infobox
        style={{
          boxShadow: "-5px -5px 5px 5px white, 5px 5px 30px 5px gray",
        }}
      >
        <IoCalendarClear size={40} />
        <h1>생년월일</h1>
        <h2>2001.04.14</h2>
      </Infobox>
      <Infobox
        style={{
          boxShadow: "-5px -5px 5px 5px white, 5px 5px 30px 5px gray",
        }}
      >
        <FaLocationDot size={40} />
        <h1>주소지</h1>
        <h2>전북특별자치도</h2>
        <h2>완주군 삼례읍</h2>
      </Infobox>
      <Infobox
        style={{
          boxShadow: "-5px -5px 5px 5px white, 5px 5px 30px 5px gray",
        }}
      >
        <IoCall size={40} />
        <h1>연락처</h1>
        <h2>010-8455-7368</h2>
      </Infobox>
      <Infobox
        style={{
          boxShadow: "-5px -5px 5px 5px white, 5px 5px 30px 5px gray",
        }}
      >
        <IoIosMail size={40} />
        <h1>Email</h1>
        <h2>fkdla432@gmail.com</h2>
      </Infobox>
      <Infobox
        style={{
          boxShadow: "-5px -5px 5px 5px white, 5px 5px 30px 5px gray",
        }}
      >
        <FaSchool size={40} />
        <h1>부트캠프</h1>
        <h2>스파르타 React-3기</h2>
      </Infobox>
    </Container>
  );
}

export default Information;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 100px;
  justify-content: center;
  width: 1000px;
  height: 500px;
  font-family: "Cafe24";
  margin-bottom: 280px;
`;

const Infobox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 220px;
  border-radius: 100%;
  background-color: white;
`;
