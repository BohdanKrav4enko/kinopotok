import styled from "styled-components";
import {Link, NavLink} from "react-router-dom";


export const Container = styled.header`
    position: sticky;
    top: 0;
    z-index: 100;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 28px;

    padding: 0 clamp(16px, 4vw, 48px);

    min-height: 82px;

    background: rgba(6, 10, 20, 0.82);
    backdrop-filter: blur(22px);
    -webkit-backdrop-filter: blur(22px);

    border-bottom: 1px solid rgba(255,255,255,.08);

    transition: .25s ease;

    &::before{
        content:"";
        position:absolute;
        inset:0;

        background:
                linear-gradient(
                        180deg,
                        rgba(41,121,255,.08),
                        transparent 35%
                );

        pointer-events:none;
    }

    @media (max-width:1024px){
        gap:20px;
        min-height:74px;
    }

    @media (max-width:768px){
        display:grid;
        grid-template-columns:1fr auto 1fr;
        grid-template-rows:auto auto;

        row-gap:12px;

        padding:0 16px;
        min-height:72px;
    }
`;

export const Logo = styled(Link)`
    display: flex;
    align-items: center;
    transition: transform .2s ease;

    &:hover {
        transform: scale(1.04);
    }

    img {
        display: block;
        width: 220px;
        height: auto;
        user-select: none;
        -webkit-user-drag: none;
    }

    @media (max-width: 992px) {
        img {
            width: 190px;
        }
    }

    @media (max-width: 768px) {
        grid-column: 2;
        justify-self: center;

        img {
            width: 170px;
        }
    }

    @media (max-width: 480px) {
        img {
            width: 150px;
        }
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