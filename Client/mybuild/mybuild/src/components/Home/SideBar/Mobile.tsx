import styled from "styled-components";
import {
  MdAccountBalance,
  MdAccountBalanceWallet,
  MdDashboard,
} from "react-icons/md";
import { IoTrailSignOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Mobile = () => {
  return (
    <MobileContainer>
      <Wrapper>
        <TopBoard>
          <Logo>Wallet.</Logo>
          <Profile>
            <ProfileDiv>
              <img src="/image/ava.png" alt="" />
            </ProfileDiv>
            <span>Welcome Back</span>
            <Name>Olorunda Samuel</Name>
          </Profile>
          <Account>
            <Amt>$34,321</Amt>
            <small>Current Balance</small>
          </Account>
          <Navigations>
            <Navs to="/home">
              <MdDashboard />
              <span>Dashboard</span>
            </Navs>
            <Navs to="/account">
              <MdAccountBalance />
              <span>Account Details</span>
            </Navs>
            <Navs to="/tranction">
              <MdAccountBalanceWallet />
              <span>Transaction</span>
            </Navs>
          </Navigations>
        </TopBoard>
        <ButtonBoard>
          <Navs to="/home">
            <IoTrailSignOutline />
            <span>Sign Out</span>
          </Navs>
        </ButtonBoard>
      </Wrapper>
    </MobileContainer>
  );
};

export default Mobile;

const MobileContainer = styled.div`
  display: none;
  @media (max-width: 500px) {
    display: block;
    margin-top: 60px;
    min-height: calc(100vh - 60px);
    width: 180px;
    position: fixed;
    background-color: #000;
    color: #fff;
    display: flex;
    justify-content: center;
    font-family: montserrat;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const TopBoard = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Logo = styled.div`
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 15px;
`;
const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  span {
    font-size: 11px;
  }
`;
const ProfileDiv = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  /* background-color: aqua; */
  margin-bottom: 15px;
  border: 3px solid darkorange;
  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }
`;
const Name = styled.div`
  font-size: 13px;
  font-weight: 800;
`;
const Account = styled.div`
  text-align: center;
  margin-bottom: 40px;
  small {
    font-size: 10px;
  }
`;
const Amt = styled.div`
  font-size: 25px;
  font-weight: lighter;
`;
const Navigations = styled.div`
  width: 100%;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Navs = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  transition: all 350ms;
  color: #fff;
  text-decoration: none;

  span {
    margin-left: 10px;
    font-size: 13px;
    font-weight: 500;
  }

  :hover {
    color: darkorange;
    font-weight: 900;
  }

  &.active {
    color: darkorange;
    font-weight: 900;
  }
`;
const ButtonBoard = styled.div`
  margin-right: 40px;
`;
