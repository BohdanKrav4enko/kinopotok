import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 48px;

    padding: 0 55px;

    @media(max-width:1200px){
        padding:0 40px;
    }

    @media(max-width:768px){
        padding:0 20px;
    }
`;

export const Title = styled.h2`
    margin:0 0 20px;

    color:#fff;

    font-size:28px;

    font-weight:700;

    letter-spacing:-0.02em;

    @media(max-width:768px){
        font-size:22px;
    }
`;

export const Grid = styled.div`
    display:grid;

    grid-template-columns:repeat(auto-fill,minmax(200px,1fr));

    gap:22px;


    @media(max-width:768px){
        grid-template-columns:repeat(2,1fr);
        gap:14px;
    }

    @media(max-width:480px){
        gap:10px;
    }
`;

export const Card = styled.div`
    cursor:pointer;

    position:relative;

    overflow:hidden;

    padding:10px;

    border-radius:18px;


    background:
            linear-gradient(
                    145deg,
                    rgba(255,255,255,.06),
                    rgba(255,255,255,.02)
            );


    border:1px solid rgba(255,255,255,.06);


    transition:.3s ease;


    backdrop-filter:blur(10px);


    &:hover{
        transform:translateY(-7px);


        border-color:
                rgba(124,92,255,.45);


        box-shadow:
                0 20px 45px rgba(0,0,0,.45);
    }


    &:active{
        transform:translateY(-2px) scale(.99);
    }


    &::before{
        content:"";


        position:absolute;

        inset:0;


        background:
                linear-gradient(
                        120deg,
                        transparent,
                        rgba(124,92,255,.18),
                        transparent
                );


        transform:translateX(-120%);


        transition:.6s;
    }


    &:hover::before{
        transform:translateX(120%);
    }
`;
