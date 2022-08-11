import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";

import React, { useState } from "react";
import styled from "styled-components";
import { items } from "../data";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 0.5s ease-in;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  /* border: 2px solid red; */
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100%;
  background-color: ${(props) => props.bg};
`;

const ImageContainer = styled.div`
  /* border: 2px solid teal; */
  flex: 1;
  // height: 100%;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  // margin: 10px 10px;
  // height: 100%;
  width: 100%;
`;

const InfoContainer = styled.div`
  /* border: 2px solid aqua; */
  flex: 1;
  width: 100%;
  padding: 20px 20px;
  // height: 100%;
  // padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "right") {
      setSlideIndex((slideIndex + 1) % items.length);
    } else {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : items.length - 1);
    }
  };
  return (
    <Container>
      <Arrow direction={"left"} onClick={() => handleClick("left")}>
        <ArrowBackIosOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {/* <Slide key={items[slideIndex].id} bg={items[slideIndex].bg}>
          <ImageContainer>
            <Image src={items[slideIndex].img} />
          </ImageContainer>
          <InfoContainer>
            <Title>{items[slideIndex].title}</Title>
            <Description>{items[slideIndex].desc}</Description>
            <Button>Add to cart</Button>
          </InfoContainer>
        </Slide> */}
        {items.map((item) => {
          console.log(item);
          return (
            <Slide key={item.id} bg={item.bg}>
              <ImageContainer>
                <Image src={item.img} />
              </ImageContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Description>{item.desc}</Description>
                <Button>Add to cart</Button>
              </InfoContainer>
            </Slide>
          );
        })}
      </Wrapper>
      <Arrow direction={"right"} onClick={() => handleClick("right")}>
        <ArrowForwardIosOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
