import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Overlay = styled.div<{ $open: boolean }>`
    position: fixed;
    inset: 0;

    z-index: 1100;

    background: rgba(5, 8, 23, .82);
    backdrop-filter: blur(10px);

    opacity: ${({ $open }) => ($open ? 1 : 0)};
    visibility: ${({ $open }) => ($open ? "visible" : "hidden")};

    transition: .3s;
`;

export const Panel = styled.div<{ $open: boolean }>`
    position: fixed;
    inset: 0;
    
    z-index: 1101;

    overflow-y: auto;

    background:
            radial-gradient(circle at top,#181d33 0%,#0b1020 35%,#050817 100%);

    display: flex;
    flex-direction: column;

    padding: 18px;

    transform: translateX(${({ $open }) => ($open ? "0" : "-100%")});

    transition: transform .35s ease;
`;

export const TopBar = styled.div`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 6px 0 20px;

    margin-bottom: 12px;

    border-bottom: 1px solid rgba(255,255,255,.05);
`;

export const CloseBtn = styled.button`
    position: absolute;

    left: -8px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 44px;
    height: 44px;

    border: none;
    border-radius: 12px;

    background: transparent;

    color: #fff;

    cursor: pointer;

    transition: .25s;

    &:hover{
        background: rgba(255,255,255,.05);
    }
`;

export const Burger = styled.button`
    display:none;

    border:none;
    background:none;

    color:white;

    cursor:pointer;

    @media (max-width:1200px){
        display:flex;
        align-items:center;
        justify-content:center;

        width:46px;
        height:46px;

        border-radius:12px;

        transition:.25s;

        &:hover{
            background:rgba(255,255,255,.05);
        }
    }
`;

export const MenuHeader = styled.div`
    display:flex;
    gap:12px;

    margin-bottom:24px;
`;

export const PrimaryButton = styled.button`
    flex:1;

    height:52px;

    border:none;
    border-radius:14px;

    background:linear-gradient(
            135deg,
            #7c5cff,
            #5b49ff,
            #3d8bff
    );

    color:white;

    font-size:15px;
    font-weight:700;

    cursor:pointer;

    box-shadow:
            0 10px 30px rgba(91,73,255,.3);

    transition:.25s;

    &:hover{
        transform:translateY(-2px);
    }
`;

export const SecondaryButton = styled.button`
    flex:1;

    height:52px;

    border-radius:14px;

    border:1px solid rgba(255,255,255,.08);

    background:rgba(255,255,255,.03);

    backdrop-filter:blur(12px);

    color:white;

    font-size:15px;
    font-weight:600;

    cursor:pointer;

    transition:.25s;

    &:hover{
        background:rgba(255,255,255,.06);
    }
`;

export const FavButton = styled(NavLink)`
    display:flex;
    align-items:center;
    justify-content:center;

    margin-bottom:28px;

    height:54px;

    border-radius:16px;

    text-decoration:none;

    background:rgba(255,255,255,.04);

    border:1px solid rgba(255,255,255,.06);

    color:#fff;

    font-weight:600;

    transition:.25s;

    &:hover{
        background:rgba(255,255,255,.07);
    }
`;

export const MenuGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    padding-bottom: 16px;

    @media (max-width: 480px) {
        display: flex;
        flex-direction: column;
    }
`;

export const MenuLink = styled(NavLink)`
    height: 130px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 14px;

    border-radius: 20px;

    background: rgba(255,255,255,.03);
    border: 1px solid rgba(255,255,255,.05);

    transition: .25s;

    svg{
        width: 34px;
        height: 34px;
        color: #8b5cf6;
    }

    &:hover{
        transform: translateY(-4px);
        border-color: rgba(124,92,255,.35);
    }

    @media (max-width:480px){
        height: 60px;

        flex-direction: row;
        justify-content: flex-start;

        padding: 0 18px;

        border-radius: 16px;

        svg{
            width: 22px;
            height: 22px;
        }
    }
`;

export const MenuFooter = styled.div`
    margin-top:auto;

    padding-top:32px;

    text-align:center;

    color:#7d879b;

    font-size:13px;
`;