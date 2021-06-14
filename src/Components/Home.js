import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'

function Home() {
    return (
        <Container>
            <ImgSlider />
        </Container>
    )
}

const Container =styled.main`
   position: relative;
   min-height: calc(100vh-250px);
   overflow-x: hidden;
   top: 72px;
   padding: 0 calc(3.5vw+5px);
   height: 100%;
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   opacity: 0.4;

    &:after{
      background: url("Assets/home-background.png") center center/cover no-repeat fixed;
      content: "";
      position: absolute;
      inset: 0px;
      opacity: 1;
      z-index: -1;
    }
   
`;

export default Home


