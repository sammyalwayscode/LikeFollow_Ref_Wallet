import styled from "styled-components";
import {
  MdAccountBalance,
  MdAccountBalanceWallet,
  MdDashboard,
} from "react-icons/md";
import { IoTrailSignOutline } from "react-icons/io5";

const Tablet = () => {
  return (
    <Container>
      <Wrapper>
        <TopTab>
          <Logo>W.</Logo>
          <AvatarDiv>
            <img src="" alt="" />
          </AvatarDiv>
          <Navigations>
            <Navs>
              <MdDashboard />
            </Navs>
            <Navs>
              <MdAccountBalance />
            </Navs>
            <Navs>
              <MdAccountBalanceWallet />
            </Navs>
          </Navigations>
        </TopTab>
        <ButtomTab>
          <Navs>
            <IoTrailSignOutline />
          </Navs>
        </ButtomTab>
      </Wrapper>
    </Container>
  );
};

export default Tablet;

const Container = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: block;
    width: 50px;
    margin-top: 60px;
    width: 50px;
    background-color: #000;
    color: #fff;
    min-height: calc(100vh - 60px);
    position: fixed;
    font-family: montserrat;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  min-height: calc(100vh - 60px);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const TopTab = styled.div`
  margin-top: 20px;
`;
const Logo = styled.div`
  font-size: 23px;
  font-weight: 800;
  margin-bottom: 20px;
`;

const AvatarDiv = styled.div`
  height: 35px;
  width: 35px;
  background-color: aqua;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const Navigations = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Navs = styled.div`
  font-size: 22px;
  margin: 10px 0;
  cursor: pointer;
`;
const ButtomTab = styled.div``;
