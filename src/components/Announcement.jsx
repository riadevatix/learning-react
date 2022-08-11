import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: skyblue;
  color: #464343;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Free Shipping on Orders over 100$</Container>;
};

export default Announcement;
