import styled from "styled-components";
import {Link} from "react-router-dom";


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

export const Logo = styled.a`
    font-size: 1.7rem;
    font-weight: 800;
    color: #fff;
    text-decoration: none;
    flex-shrink: 0;

    transition: transform 0.25s ease;

    &:hover {
        transform: scale(1.04);
    }

    @media (max-width: 768px) {
        grid-column: 2;
        justify-self: center;
    }
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 28px;
    flex-shrink: 0;

    @media (max-width: 1024px) {
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

export const NavLink = styled(Link)`
    position: relative;

    color: #9ca3af;
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;

    transition: color 0.25s ease;

    &::after {
        content: "";

        position: absolute;
        left: 0;
        bottom: -8px;

        width: 100%;
        height: 2px;

        background: linear-gradient(90deg, #3b82f6, #8b5cf6);

        transform: scaleX(0);
        transform-origin: center;

        transition: transform 0.25s ease;
    }

    &:hover {
        color: #ffffff;
    }

    &:hover::after {
        transform: scaleX(1);
    }
    @media (max-width: 768px) {
        display: none;
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
export const Bookmarks = styled(Link)`
    display: flex;
    align-items: center;
    gap: 8px;
    position: relative;
    white-space: nowrap;
    flex-shrink: 0;

    padding: 10px 14px;
    border-radius: 12px;

    background: rgba(255, 255, 255, 0.04);

    color: #d1d5db;
    text-decoration: none;

    transition: all 0.25s ease;
`;
export const Label = styled.span`
    @media (max-width: 768px) {
        display: none;
    }
`;

export const Count = styled.span<{ $animate?: boolean }>`
    position: absolute;
    top: -6px;
    right: -6px;

    min-width: 18px;
    height: 18px;
    padding: 0 5px;

    border-radius: 999px;

    background: linear-gradient(135deg, #3b82f6, #2563eb);
    color: #fff;

    font-size: 11px;
    font-weight: 700;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    box-shadow: 0 6px 16px rgba(59, 130, 246, 0.35);

    border: 2px solid rgba(10, 15, 28, 0.85);
    
    transform: scale(${({ $animate }) => ($animate ? 1.2 : 1)});
    transition: transform 0.2s ease;

    pointer-events: none;
`;

export const Auth = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    @media (max-width: 1024px) {
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