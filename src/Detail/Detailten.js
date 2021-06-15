import React from 'react'
import styled from 'styled-components'
import {Movies} from '../disneyPlusMoviesData'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import GroupIcon from '@material-ui/icons/Group';

function Detailten() {
    return (
        <Container>
         <Contains>
                <Image alt="" src={Movies[10].titleImg}  />
                <Divs>
                    <Play><PlayArrowIcon fontSize="large"/>PLAY</Play>
                    <Trailer><PlayArrowIcon fontSize="large"/>TRAILER</Trailer>
                    <AddCircleOutlineIcon fontSize="large"/>
                    <GroupIcon fontSize="large"/>
                </Divs>
                <Dura>{Movies[10].subTitle}</Dura>
                <Desc>{Movies[10].description}</Desc>
                <BgImg />
         </Contains>
        </Container>
    )
}

const Container=styled.div`
    margin-top: 50px;
    overflow:hidden;
    display: flex;
    flex-direction: column;
    height:100vh;
`;

const Divs=styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

`;

const Contains=styled.div`
    margin-bottom:10vw;
    width:100%;
    position:relative;
    min-height:100vh;
    box-sizing:border-box;
    padding: 80px 40px;
    height: 100%;
`;



const Play=styled.button`
    display: flex;
    align-items: center;
    padding: 10px 9px;
    justify-content: center;
    background: rgb(255,255,255);
    border: 2px solid rgb(255,255,255);
    border-radius: 6px;
    padding-right: 16px;
    font-weight: bolder;
    letter-spacing: 1.4px;


    &:hover{
        background-color: #0000004D;
    }
`;
const Trailer =styled.button`
    display: flex;
    align-items: center;
    padding: 10px 9px;
    justify-content: center;
    background: #0000004D;
    border: 2px solid rgb(255,255,255);
    border-radius: 6px;
    padding-right: 16px;
    font-weight: bolder;
    letter-spacing: 1.4px;

    &:hover{
        background-color: rgb(255,255,255);
    }
`;

const Image=styled.img`
    margin-bottom: 19px;
    max-width: 470px;
    margin-top: 70px;
    height: auto;
    min-width: 260px;
    min-height: 1px;
    width: 60vw;
    margin-left: -40px;
`;

const Dura=styled.h4`
       font-weight: bold;
`;

const Desc=styled.h4`
    max-width: 70%;
    line-height: 1.5;
    letter-spacing: 1.5px;
    font-family: Avenir-'Times New Roman', Times, serif,sans-serif;
    font-size: 13px;
    color: white;
    font-weight: lighter;
`;

const BgImg=styled.div`
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    background-image: url("https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F6CDB6C0EB2D77EB19BCADA31F85066E001A1F61FA68F4AC3356A73FE076477F/scale?width=1440&aspectRatio=1.78&format=jpeg");
    z-index: -1;
`;



export default Detailten
