import styled from "styled-components";


export const Section = styled.section`
    padding: 40px 55px;

    @media (max-width: 1200px) {
        padding: 36px 40px;
    }

    @media (max-width: 768px) {
        padding: 32px 20px;
    }

    @media (max-width: 480px) {
        padding: 24px 16px;
    }
`;


export const Header = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;

    margin-bottom:24px;
`;


export const Title = styled.h2`
    color:white;
    font-size:28px;
`;


export const More = styled.button`
    border:none;
    background:none;

    color:#7c7cff;

    cursor:pointer;
`;


export const Grid = styled.div`
    display:grid;

    grid-template-columns:repeat(4,1fr);

    gap:20px;


    @media(max-width:992px){
        grid-template-columns:repeat(2,1fr);
    }


    @media(max-width:600px){
        gap:14px;
    }
`;


export const Card = styled.div`
    position:relative;

    height:180px;

    border-radius:18px;

    overflow:hidden;

    cursor:pointer;

    display:flex;
    align-items:flex-end;

    padding:20px;

    border:1px solid rgba(255,255,255,.05);

    transition:.3s;


    &:hover{
        transform:translateY(-4px) scale(1.02);
    }


    @media(max-width:768px){
        height:140px;
        padding:16px;
    }
`;


export const Image = styled.img`
    position:absolute;

    inset:0;

    width:100%;
    height:100%;

    object-fit:cover;

    z-index:0;
`;


export const Overlay = styled.div`
    position:absolute;

    inset:0;

    background:linear-gradient(
            rgba(0,0,0,.15),
            rgba(0,0,0,.75)
    );

    z-index:1;
`;


export const Name = styled.div`
    position:relative;

    color:white;

    font-size:20px;

    font-weight:700;

    z-index:2;


    @media(max-width:768px){
        font-size:16px;
    }
`;