import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { GiWallet } from "react-icons/gi";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>Wallet.</Logo>
        <SignUo>
          <NavLink to="/signup">
            <button>New Transaction</button>
          </NavLink>
          <NavIcon>
            <GiWallet size="25px" />
          </NavIcon>
        </SignUo>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 60px;
  width: 100%;
  font-family: montserrat;
  background-color: darkorange;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
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
  display: flex;
  align-items: center;
  button {
    padding: 9px 25px;
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

const NavIcon = styled.div`
  display: none;
  @media (max-width: 500px) {
    display: block;
    margin-left: 15px;
    cursor: pointer;
  }
`;
