/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";

function TopBtn() {
  const scrollToTopBtnRef = useRef();

  const handleScroll = () => {
    if (!scrollToTopBtnRef.current) return;
    if (window.scrollY > 250) {
      scrollToTopBtnRef.current.style.transform = "scale(1)";
    } else {
      scrollToTopBtnRef.current.style.transform = "scale(0)";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = useCallback(() => {
    if (scrollToTopBtnRef.current) {
      document.documentElement.scrollTop = 0;
    }
  }, []);

  return (
    <TopButton ref={scrollToTopBtnRef} onClick={handleScrollToTop}>
      ▲
    </TopButton>
  );
}

export default TopBtn;

const TopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  height: 60px;
  width: 60px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(to right top, #d5b3ff, #b8ffc7);
  border: none;
  padding: 10px;
  font-size: 30px;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 200ms ease-in-out;
  &:hover {
    background-image: linear-gradient(
      90deg,
      rgb(153, 182, 255),
      rgb(255, 213, 184)
    );
  }
`;
