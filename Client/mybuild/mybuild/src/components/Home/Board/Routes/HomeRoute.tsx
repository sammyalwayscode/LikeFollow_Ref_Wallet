import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Account from "../Components/Account";
import Home from "../Components/Home";
import Tranaction from "../Components/Tranaction";
import HeadSide from "../HeadSide/HeadSide";

const HomeRoute = () => {
  return (
    <Container>
      <HeadSide />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/tranction" element={<Tranaction />} />
      </Routes>
    </Container>
  );
};

export default HomeRoute;

const Container = styled.div`
  display: flex;
`;
