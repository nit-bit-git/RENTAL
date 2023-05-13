import React from "react";
import styled from "styled-components";     
import tw from 'twin.macro';
import { NavBar } from "../../components/navbar";
import bkg from "../../../assets/images/rental.gif"

const BackgroundImage = styled.div`
  ${tw`
    bg-cover
    bg-center
    h-screen
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
  background-image: url(${bkg});
`;

export function HomePage() {
  

  return (
    <BackgroundImage>
      <NavBar />
    </BackgroundImage>
  );
   
    
}
