import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>Wallet.</Logo>
        <SignUo>
          <NavLink to="/signup">
            <button>Sign Up</button>
          </NavLink>
        </SignUo>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 90px;
  width: 100%;
  font-family: montserrat;
  /* background-color: orange; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  font-size: 30px;
  font-weight: 900;
  color: #fff;
`;
const SignUo = styled.div`
  button {
    padding: 9px 35px;
    outline: none;
    border: none;
    font-family: montserrat;
    font-size: 13px;
    font-weight: bold;
    color: #fff;
    background-color: #000;
    border-radius: 5px;
  }
`;
