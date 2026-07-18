import styled, {keyframes} from "styled-components";
import {Link, NavLink} from "react-router-dom";

const glow = keyframes`
  0%, 100% {
    filter:
      drop-shadow(0 0 4px #00e5ff)
      drop-shadow(0 0 8px #7c4dff)
      drop-shadow(0 0 12px #ff2bd6);
    transform: scale(1);
  }

  50% {
    filter:
      drop-shadow(0 0 8px #00e5ff)
      drop-shadow(0 0 16px #7c4dff)
      drop-shadow(0 0 24px #ff2bd6);
    transform: scale(1.03);
  }
`;

export const Container = styled.header`
    position: sticky;
    top: 0;
    z-index: 100;

    padding: 18px 48px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;

    flex-wrap: nowrap;

    background: rgba(10, 15, 28, 0.85);
    backdrop-filter: blur(20px);

    border-bottom: 1px solid rgba(255, 255, 255, 0.08);

    @media (max-width: 1024px) {
        padding: 14px 24px;
        gap: 16px;
    }
    
    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        grid-template-rows: auto auto;
        row-gap: 12px;
        align-items: center;
    }
`;

export const Logo = styled(Link)`
    display:flex;

    align-items:center;

    gap:10px;

    font-size:1.7rem;

    font-weight:800;

    color:#fff;

    text-decoration:none;

    flex-shrink:0;


    transition:.25s ease;


    &:hover{
        transform:scale(1.04);
    }


    img{
        width:30px;

        height:30px;

        object-fit:contain;

        animation:${glow} 2.5s ease-in-out infinite;
    }


    span{
        background:
                linear-gradient(
                        90deg,
                        #8b5cf6,
                        #3b82f6
                );


        -webkit-background-clip:text;

        -webkit-text-fill-color:transparent;

        background-clip:text;
    }


    @media(max-width:768px){
        grid-column:2;

        justify-self:center;
    }
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 28px;
    flex-shrink: 0;

    @media (max-width: 1200px) {
        display: none;
    }
`;
export const SearchContainer = styled.div`
    display: flex;
    align-items: center;

    flex: 1;
    justify-content: center;
    min-width: 0;

    @media (max-width: 768px) {
        grid-column: 1 / 4;
        grid-row: 2;
        width: 100%;
    }
`;

export const StyledNavLink = styled(NavLink)`
    position: relative;

    color: #9ca3af;

    &.active {
        color: #fff;
    }

    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -8px;
        width: 100%;
        height: 2px;

        background: linear-gradient(90deg, #3b82f6, #8b5cf6);

        transform: scaleX(0);
        transition: transform 0.25s ease;
    }

    &.active::after,
    &:hover::after {
        transform: scaleX(1);
    }
`;

export const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

    flex-shrink: 0;
    white-space: nowrap;

    @media (max-width: 768px) {
        grid-column: 3;
        justify-self: end;
    }
`;

export const Auth = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    @media (max-width: 1200px) {
        display: none;
    }
`;

export const Login = styled(Link)`
    padding: 8px 12px;
    border-radius: 10px;

    color: #d1d5db;
    text-decoration: none;

    &:hover {
        background: rgba(255,255,255,0.06);
        color: #fff;
    }
`;

export const Register = styled(Link)`
    padding: 10px 14px;
    border-radius: 12px;

    background: linear-gradient(135deg, #2563eb, #7c3aed);
    color: #fff;

    font-weight: 600;

    transition: 0.25s ease;

    &:hover {
        transform: translateY(-2px);
    }
    @media (max-width: 1024px) {
        display: none;
    }
`;

export const MobileNavWrapper = styled.nav`
    display: none;

    @media (max-width:1200px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 40px;

        padding: 16px 24px 20px;

        background: rgba(5, 8, 23, .98);

        border-bottom: 1px solid rgba(255,255,255,.05);
    }

    @media (max-width:768px) {
        justify-content: space-around;
        padding: 14px 16px 18px;
        gap: 8px;
    }
`;

export const MobileNavLink = styled(NavLink)`
    position: relative;

    color: #9ca3af;

    &.active {
        color: #fff;
    }

    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -8px;
        width: 100%;
        height: 2px;

        background: linear-gradient(90deg, #3b82f6, #8b5cf6);

        transform: scaleX(0);
        transition: transform 0.25s ease;
    }

    &.active::after,
    &:hover::after {
        transform: scaleX(1);
    }
`;