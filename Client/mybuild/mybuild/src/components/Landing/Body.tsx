import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";

const Body = () => {
  return (
    <Page>
      <Header />
      <Container>
        <Wrapper>
          <TextDiv>
            <Title>Maximise your money with Wallet.</Title>
            <SubTitle>
              The best way to make your daily transfres, Do Try it Out...
            </SubTitle>
            <EmailHold>
              <input placeholder="Enter your Email to Get Started..." />
              <NavLink to="signup">
                <button>Get Started</button>
              </NavLink>
            </EmailHold>
          </TextDiv>
          <ImageDiv>
            <img src="/image/wallimg.png" alt="" />
          </ImageDiv>
        </Wrapper>
      </Container>
    </Page>
  );
};

export default Body;

const Page = styled.div`
  background-color: #ff9505;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 85vh;
  display: flex;
  align-items: flex-end;
  font-family: montserrat;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
`;
const TextDiv = styled.div`
  width: 400px;
`;
const ImageDiv = styled.div`
  img {
    width: 500px;
  }
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: 900;
`;
const SubTitle = styled.div`
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 30px;
`;
const EmailHold = styled.div`
  input {
    height: 35px;
    width: 250px;
    border: none;
    font-family: montserrat;
  }

  button {
    padding: 11px 23px;
    border: none;
    outline: none;
    background-color: #000;
    color: #fff;
    font-size: 13px;
    font-weight: bold;
    font-family: montserrat;
  }
`;
