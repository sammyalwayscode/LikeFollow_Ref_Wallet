import React from "react";
import styled from "styled-components";
import { FiArrowLeftCircle } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Swal from "sweetalert2";

const SignUp = () => {
  // const navigate = useNavigate();
  const schema = yup.object().shape({
    fullName: yup.string().required("Please Enter Your Full Name"),
    userName: yup.string().required("Please Enter Your User Name"),
    email: yup.string().required("Your email"),
    password: yup.string().required("Please Enter your password"),
    confirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password Dose not Match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm({ resolver: yupResolver(schema) });

  const registerNow = handleSubmit(async (data) => {
    console.log(data);
    const URL: string = "http://localhost:2200";
    const mainURL: string = `${URL}/api/users/create`;
    await axios
      .post(mainURL, data)
      .then(() => {
        Swal.fire("Good job!", "Sign Up Sucessfull!", "success");
      })
      .catch((err) => console.log(err));
  });

  return (
    <Container>
      <Wrapper>
        <InputPart>
          <IconTop>
            <NavLink
              to="/"
              style={{
                textDecoration: "none",
                color: "#000",
              }}
            >
              <FiArrowLeftCircle />
            </NavLink>
          </IconTop>
          <SignInputHold>
            <SignTitle>Sign Up</SignTitle>
            <SignSubTitle>To Become a Wallet Member</SignSubTitle>
            <InputForm onSubmit={registerNow}>
              <InputDiv placeholder="Full Name" {...register("fullName")} />
              <Error>
                {" "}
                {errors?.fullName && <p>Please provide your fullname</p>}{" "}
              </Error>
              <InputDiv placeholder="Your Name" {...register("userName")} />
              <Error>
                {" "}
                {errors?.fullName && <p>Please provide your userName</p>}{" "}
              </Error>
              <InputDiv placeholder="Email " {...register("email")} />
              <Error>
                {" "}
                {errors?.fullName && <p>Please provide your email</p>}{" "}
              </Error>
              <InputDiv placeholder="Password" {...register("password")} />
              <Error>
                {" "}
                {errors?.fullName && <p>Please provide your password</p>}{" "}
              </Error>
              <InputDiv placeholder="Confirm" {...register("confirm")} />
              <Error>
                {" "}
                {errors?.fullName && <p>Password dosn't match</p>}{" "}
              </Error>
              <InputButton type="submit">Sign Up</InputButton>
            </InputForm>
            <HasAcc>
              Already has an account?{" "}
              <NavLink
                to="/signin"
                style={{
                  textDecoration: "none",
                }}
              >
                <span>Sign In</span>
              </NavLink>
            </HasAcc>
          </SignInputHold>
        </InputPart>
        <ImagePart>
          <ImgMain src="/image/let.png" alt="" />
        </ImagePart>
      </Wrapper>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Montserrat;
  background-color: #fff;
`;
const Wrapper = styled.div`
  width: 55%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 800px) {
    justify-content: center;
  }
`;
const InputPart = styled.div``;
const ImagePart = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    display: none;
  }
`;
// const IconTop = styled(NavLink)`
const IconTop = styled.div`
  font-size: 30px;
  text-decoration: none;
  /* color: ${(props) => props.theme.textColor}; */
`;
const SignInputHold = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;
const SignTitle = styled.div`
  font-size: 25px;
  font-weight: 800;
  /* color: ${(props) => props.theme.textColor}; */
`;
const SignSubTitle = styled.div`
  font-size: 12px;
  color: #77838f;
`;
const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;
const InputDiv = styled.input`
  height: 45px;
  width: 280px;
  margin: 4px 0;
  border: none;
  outline: none;
  border-radius: 5px;
  font-weight: 700;
  font-size: 13px;
  background-color: #ff970535;
  font-family: Montserrat;
  padding-left: 20px;
  ::placeholder {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 13px;
    /* color: #377dff; */
    color: #000;
    padding-left: 20px;
  }
`;
const InputButton = styled.button`
  height: 40px;
  width: 100%;
  border: none;
  outline: none;
  font-family: Montserrat;
  font-weight: 700;
  color: #fff;
  /* background-color: #377dff; */
  background-color: #000;
  border-radius: 3px;
  margin-top: 10px;
`;
const HasAcc = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.theme.textColor};
  span {
    color: #ff9705;
    cursor: pointer;
  }
`;

const ImgMain = styled.img`
  width: 290px;
  margin-top: -65px;
`;

const Error = styled.div`
  font-size: 10px;
  color: red;
`;
