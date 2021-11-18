import styled, { keyframes } from 'styled-components';

export const FooterDiv = styled.div`
    display: flex;
    width: 100%;
    height: 70px;
    background-color: #FFE0AE;
    color: #6C8255;
    position: absolute;
    left:20px;
    /* bottom: 0; */
    z-index: 10;
    overflow: visible;
    border-top:double whitesmoke;
    border-bottom: double whitesmoke;

    @media only screen and (min-width: 1024px) and (max-height: 1366px){
    display: flex;
    width: 100%;
    height: 70px;
    background-color: #FFE0AE;
    color: #6C8255;
    position: absolute;
    right:4rem;
    /* bottom: 0; */
    z-index: 10;
    overflow: visible;
    border-top:double whitesmoke;
    border-bottom: double whitesmoke;
    }
`
    export const FooterH4 = styled.h4`
    position: fixed;
    right:1rem;
    @media only screen and (min-width: 1024px) and (max-height: 1366px){
        position: fixed;
        left:60rem;
        bottom: 2rem;
        /* top:3rem; */
    }

    @media only screen and (min-width: 320px) and (max-height: 480px){
        position: fixed;
        left:60rem;
        bottom: 2rem;
    }
    `