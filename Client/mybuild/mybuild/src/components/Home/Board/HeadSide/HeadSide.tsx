import React from "react";
import styled from "styled-components";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";

const HeadSide = () => {
  return (
    <Container>
      <Header />
      <SideBar />
    </Container>
  );
};

export default HeadSide;

const Container = styled.div`
  height: 100vh;
  display: flex;
`;
