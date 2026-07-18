import styled from "styled-components";


export const Section = styled.section`
    margin-top: 20px;
`;


export const Grid = styled.div`

    display:grid;

    grid-template-columns:repeat(4,1fr);

    gap:24px;


    a{
        text-decoration:none;
    }


    @media(max-width:1100px){
        grid-template-columns:repeat(3,1fr);
    }


    @media(max-width:768px){
        grid-template-columns:repeat(2,1fr);

        gap:16px;
    }


    @media(max-width:480px){
        grid-template-columns:1fr;
    }

`;



export const Card = styled.div`

    position:relative;

    height:200px;

    overflow:hidden;

    border-radius:20px;

    cursor:pointer;


    border:1px solid rgba(255,255,255,.06);


    display:flex;

    align-items:flex-end;

    padding:22px;


    transition:.3s;


    &:hover{

        transform:translateY(-6px);

        border-color:rgba(124,92,255,.5);

    }


`;



export const Image = styled.img`

    position:absolute;

    inset:0;

    width:100%;

    height:100%;

    object-fit:cover;

`;



export const Overlay = styled.div`

    position:absolute;

    inset:0;


    background:
    linear-gradient(
        180deg,
        rgba(5,8,23,.05),
        rgba(5,8,23,.85)
    );

`;



export const Name = styled.h2`

    position:relative;

    z-index:2;


    margin:0;


    color:white;

    font-size:22px;

    font-weight:700;


    @media(max-width:768px){

        font-size:18px;

    }

`;