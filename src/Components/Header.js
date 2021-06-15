import React from 'react'
import styled from 'styled-components'
import { useDataLayerValue } from '../datalayer'
import { auth, provider } from '../Firebase'
import { Link } from 'react-router-dom'

const Header=()=> {

    const[{user},dispatch]=useDataLayerValue()


    const onLogin=()=>{
        auth.signInWithPopup(provider).then(result=>
            (
                dispatch({
                    type:"SET_USER",
                    user:result.user,
                })
            ))
        .catch(e=>alert(e.message))
    }

    return (
        <Nav>
            <Logo>
                <img alt="" src="/Assets/logo.svg"></img>
            </Logo>

        {!user ? (
            <Login onClick={onLogin}>LOGIN</Login>
        ):(
            <Navmenu>
            <a href="/home">
                <img alt="" src="/Assets/home-icon.svg" />
                <span>HOME</span>
            </a>

            <a href="/home">
                <img alt="" src="/Assets/search-icon.svg" />
                <span>SEARCH</span>
            </a>

            <a href="/home">
                <img alt="" src="/Assets/watchlist-icon.svg" />
                <span>WATCHLIST</span>
            </a>

            <a href="/home">
                <img alt="" src="/Assets/original-icon.svg" />
                <span>ORIGINALS</span>
            </a>

            <a href="/home">
                <img alt="" src="/Assets/movie-icon.svg" />
                <span>MOVIES</span>
            </a>

            <a href="/home">
                <img alt="" src="/Assets/series-icon.svg" />
                <span>SERIES</span>
            </a>


           <a href="/">
                <span className="logout">LOGOUT</span>
            </a>

        </Navmenu>
        )}

        </Nav>
    )
}

const Nav=styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 67px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    z-index: 3;
    letter-spacing: 16px;
`;

const Logo =styled.a`
    width: 80px;
    padding: 0;
    margin-top: 4px;
    max-height: 70px;
`;

const Navmenu=styled.div`
    display: flex;
    align-items: center;
    flex-flow:row nowrap;
    justify-content: flex-end;
    padding: 0;
    margin: 0;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    a{
        display: flex;
        align-items: center;
        padding: 0 12px;

    img{
        height: 20px;
        min-width: 20px;
        width: 20px;
        z-index: auto;

    }

    span{
        color: rgb(249,249,249);
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding: 2px 0;
        white-space: nowrap;
        position: relative;
        font-size: 13px;
        margin-top: 5px;
        margin-left: 3px;

    &:before{
        background-color: rgb(249,249,249);
        border-radius: 0px 0px 4px 4px;
        height: 2px;
        content: "";
        bottom: -6px;
        left: 0;
        right: 0;
        opacity: 0;
        visibility: hidden;
        position: absolute;
        transform-origin:center;
        transform :scaleX(0);
        transition :all 250ms cubic-bezier(0.25,0.46,0.45,0.94)0s;
        width: auto;
        /* margin: 0px 7px;
        margin-left: 10px; */
      }
    }

    &:hover{
        span:before{
            visibility: visible;
            transform: scaleX(1);
            opacity: 1 !important;
            
        }
      }
    }

    @media (max-width:768px){
        display: none;
    }
`;

const Login=styled.a`
    padding: 8px 16px;
    letter-spacing: 1.5px;
    border:1px solid #f9f9f9;
    border-radius: 4px;
    transition: all .2s ease 0s;

    &:hover{
        background-color: #f9f9f9;
        color: #000;
        font-weight: bold;
        border-color: transparent;
    }

`;




export default Header
