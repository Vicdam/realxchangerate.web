import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const CurrencyContainer = styled.div`
  box-sizing: border-content;
  background-color: #ffffff;
  width: 100%;
  height:472px;
  align-items: center;

  @media screen and (min-width: 350px) and (max-width: 550px) {
    width: 90%;
    height: 500px;
    padding: 1em;
    overflow:hidden;
  }
`;
export const Header = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #1e293b;
  letter-spacing: 0.001em;
  padding: 29px 0px 14px 120px;

  @media screen and (min-width: 350px) and (max-width: 550px) {
    font-size: 14px;
    line-height: 20px;
    padding: 29px 0px 12px 10px;
  }

  @media screen and (max-width: 768px) {
    padding: 29px 0px 12px 10px;
   
  }
`;


export const CounrtryOptionWrapper = styled.div`
  align-items: center;
  width: 80%;
  height: 28px;
  padding: 0px 0px 34px 208px;
  display: flex;
  justify-content: space-evenly;

  @media screen and (min-width: 350px) and (max-width: 550px) {
  
    padding: 0px 0px 34px 10%;
    width: 100%;
    height: 20%;
 
  }
`;

export const Redirect = styled(LinkR)`
 
  text-decoration: none;
  align-items: center;
  
  cursor: pointer;
  &:hover {
    color: #00000f;
    transition: 0.4s ease-in-out;
  }
`;


export const Text = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #94a3b8;
  padding-left: 5px;


  @media screen and (min-width: 350px) and (max-width: 550px) {
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    padding-left: 7px;
  }

`;



export const CurrencyWrapper = styled.div`
  width: 50%;
  padding: 0px 0px 0px 120px;
  margin-bottom:2%;
  align-items: center;

  @media screen and (min-width:350px) and (max-width: 550px) {
   margin:0px;
     padding: 0px 0px 0px 20px;
  
  }
`;


export const CountryNames = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.001em;
  color: #2f343f ;
  margin-right:10%;


  @media screen and (max-width: 768px) {
    padding: 1em;

  }
`;


export const Indicator = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.02em;
  color: #4c4f59;
  border-bottom 4px solid #00296B;
  width:5%;
  

  @media screen and (max-width: 768px) {
    margin-right: 1em;
    font-size: 1.8em;
  
  }
`;


export const CountryCurrencyWrapper = styled.div`
  width: 90%;
  display: grid;
  gap: 6%;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  padding: 0px 0px 0px 120px;
  align-items: center;

  @media screen and (min-width: 350px) and (max-width: 550px) {
    height: 60px;
    padding: 1em;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    padding-bottom: 86px;
    overflow: hidden;
  }
`;

export const Img = styled.img`
width:7%;

  @media screen and (min-width: 350px) and (max-width: 550px) {
    width:10%;

  }
`;




