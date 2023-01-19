import styled from "styled-components";
import React from "react";

const Account = () => {
  return (
    <Container>
      <Wrapper>
        <h1>This is My Account Dir</h1>
      </Wrapper>
    </Container>
  );
};

export default Account;

const Container = styled.div`
  min-height: calc(100vh - 60px);
  height: 100%;
  margin-top: 60px;
  margin-left: 180px;
  width: calc(100vw - 180px);
  font-family: montserrat;
  display: flex;
  justify-content: center;

  @media (max-width: 800px) {
    margin-left: 50px;
    width: calc(100vw - 50px);
  }
  @media (max-width: 500px) {
    margin-left: 0;
    width: 100vw;
  }
`;

const Wrapper = styled.div`
  width: 1150px;
  @media (max-width: 1150px) {
    width: 95%;
  }
`;
