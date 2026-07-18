import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Footer = styled.footer`
    margin-top: 80px;
    

    background: linear-gradient(
            180deg,
            #050817 0%,
            #040611 100%
    );

    border-top: 1px solid rgba(255,255,255,.05);
`;

export const Container = styled.div`
    max-width: 1500px;

    margin: 0 auto 60px;

    padding: 60px 55px 36px;

    @media (max-width:1200px){
        padding:48px 40px 30px;
    }
    @media(max-width:1150px){
        margin-bottom: 60px;
    }

    @media (max-width:768px){
        padding:40px 20px 60px;
    }
`;

export const Top = styled.div`
    display:grid;
    grid-template-columns:2fr 1fr 1fr 1fr;

    gap:60px;

    @media(max-width:1000px){
        grid-template-columns:repeat(2,1fr);
        gap:40px;
    }

    @media(max-width:650px){
        grid-template-columns:1fr;
        gap:36px;

        text-align:center;
    }
`;

export const Brand = styled.div`
    display:flex;
    flex-direction:column;

    @media(max-width:650px){
        align-items:center;
    }
`;

export const Description = styled.p`
    margin:20px 0 0;

    max-width:340px;

    color:#8b93a7;

    font-size:15px;
    line-height:28px;

    @media(max-width:650px){
        max-width:420px;
    }
`;

export const Column = styled.div`
    display:flex;
    flex-direction:column;
    gap:14px;

    @media(max-width:650px){
        align-items:center;
    }
`;

export const ColumnTitle = styled.h3`
    margin:0 0 10px;

    color:white;

    font-size:14px;
    font-weight:700;

    letter-spacing:1px;

    text-transform:uppercase;
`;

export const FooterLink = styled(NavLink)`
    position:relative;

    width:fit-content;

    color:#8b93a7;

    text-decoration:none;

    font-size:15px;

    transition:.25s;

    &::before{
        content:"";

        position:absolute;

        left:-14px;
        top:50%;

        width:5px;
        height:5px;

        border-radius:50%;

        background:#7c5cff;

        opacity:0;

        transform:translateY(-50%);

        transition:.25s;
    }

    &:hover{
        color:white;

        transform:translateX(6px);
    }

    &:hover::before{
        opacity:1;
    }

    &.active{
        color:#fff;
    }

    @media(max-width:650px){

        &::before{
            display:none;
        }

        &:hover{
            transform:none;
        }
    }
`;

export const Bottom = styled.div`
    margin-top:60px;

    padding-top:32px;

    border-top:1px solid rgba(255,255,255,.05);

    display:flex;
    justify-content:space-between;
    align-items:center;

    gap:24px;

    @media(max-width:768px){
        flex-direction:column;

        align-items:center;

        text-align:center;
    }
`;

export const Copyright = styled.p`
    margin:0;

    color:#6d768a;

    font-size:14px;
`;

export const BottomLinks = styled.div`
    display:flex;

    align-items:center;

    gap:28px;

    flex-wrap:wrap;

    @media(max-width:768px){
        justify-content:center;
        gap:18px;
    }
`;

export const BottomLink = styled(NavLink)`
    color:#7e879b;

    text-decoration:none;

    font-size:14px;

    transition:.25s;

    &:hover{
        color:white;
    }

    &.active{
        color:white;
    }
`;