import styled from "styled-components";
import { NavLink} from "react-router-dom";

export const Overlay = styled.div<{ $open: boolean }>`
    position: fixed;
    inset: 0;

    z-index: 1100;

    background: rgba(0,0,0,.6);

    opacity: ${({ $open }) => ($open ? 1 : 0)};
    visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
`;
export const Panel = styled.div<{ $open: boolean }>`
    position: fixed;
    inset: 0;

    z-index: 1101;

    background: linear-gradient(180deg, #0a0f1c, #05070f);

    display: flex;
    flex-direction: column;

    padding: 80px 20px 20px;

    transform: translateX(${({ $open }) => ($open ? "0" : "-100%")});
    transition: 0.35s ease;
`;

export const CloseBtn = styled.button`
    position: absolute;
    top: 20px;
    left: 20px;

    z-index: 1102;

    background: none;
    border: none;

    color: #ffffff;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 8px;

    transition: transform 0.2s ease, opacity 0.2s ease;

    &:hover {
        transform: scale(1.15);
    }

    svg {
        font-size: 32px;
    }
`;
export const Burger = styled.button`
    display: none;
    z-index: 1102;
    padding: 8px;
    svg{
        z-index: 1102; 
    }

    @media (max-width: 1200px) {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        
        background: none;
        border: none;
        color: white;

        cursor: pointer;
        svg {
            font-size: 32px;
        }
    }
`;
export const MenuHeader = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
`;
export const PrimaryButton = styled.button`
    flex: 1;
    padding: 12px;
    border-radius: 10px;

    background: linear-gradient(135deg, #2563eb, #7c3aed);
    color: white;

    border: none;
    cursor: pointer;
`;

export const SecondaryButton = styled.button`
    flex: 1;
    padding: 12px;

    border-radius: 10px;

    background: rgba(255,255,255,0.05);
    color: #fff;

    border: 1px solid rgba(255,255,255,0.1);
`;
export const FavButton = styled(NavLink)`
    margin: 10px 0 20px;

    padding: 12px;
    border-radius: 12px;

    background: rgba(255,255,255,0.05);
    color: #fff;

    border: 1px solid rgba(255,255,255,0.1);

    cursor: pointer;
`;
export const MenuGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-top: 30px;
`;
export const MenuLink = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;

    padding: 14px;
    border-radius: 12px;

    background: rgba(255,255,255,0.03);
    color: #d1d5db;

    text-decoration: none;

    transition: 0.2s;

    svg {
        opacity: 0.8;
    }

    &:hover {
        background: rgba(255,255,255,0.07);
        color: white;
        transform: translateX(4px);

        svg {
            opacity: 1;
        }
    }

    &.active {
        color: #60a5fa;
    }
`;
export const MenuFooter = styled.div`
    margin-top: auto;

    text-align: center;
    font-size: 12px;

    color: rgba(255,255,255,0.4);
`;