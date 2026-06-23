import styled from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {Card} from "../../moviesGrid/styles/MovieGridStyle.tsx";

export const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
`;

export const ListCard = styled.div`
    display: flex;
    gap: 16px;
    position: relative;

    padding: 16px;

    border-radius: 16px;

    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.06);

    transition: all 0.25s ease;
    &:hover {
        transform: translateY(-4px);
        background: rgba(255, 255, 255, 0.07);
        border-color: rgba(59, 130, 246, 0.3);
    }

    @media (max-width: 768px) {
        flex-direction: row;
        padding: 10px;
        gap: 10px;
        align-items: flex-start;
    }
`;

export const Poster = styled.img`
    width: 220px;
    height: 320px;

    cursor: pointer;

    border-radius: 12px;
    flex-shrink: 0;

    object-fit: cover;

    @media (max-width: 767px) {
        width: 90px;
        height: 135px;
        border-radius: 10px;
    }
`;

export const Title = styled.h3`
    margin: 0;

    font-size: 2rem;
    font-weight: 800;

    color: #ffffff;

    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media (max-width: 1024px) {
        font-size: 1.6rem;
        width: 90%;
    }

    @media (max-width: 768px) {
        font-size: 1.4rem;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    flex: 1;
    min-width: 0;
    @media (max-width: 768px) {
        gap: 4px;
    }
`;

export const Meta = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    font-size: 0.9rem;
    color: #94a3b8;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

export const Actions = styled.div`
    display: flex;
    gap: 10px;

    margin-top: auto;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const Button = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    padding: 12px 18px;

    border-radius: 12px;

    font-size: 0.95rem;
    font-weight: 600;
    line-height: 1;

    cursor: pointer;

    color: #d1d5db;

    background: rgba(255, 255, 255, 0.06);

    border: 1px solid rgba(255, 255, 255, 0.08);

    transition:
            transform 0.25s ease,
            background 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease;

    &:hover {
        transform: translateY(-2px);

        background: rgba(255, 255, 255, 0.1);

        border-color: rgba(59, 130, 246, 0.25);

        box-shadow: 0 10px 25px rgba(59, 130, 246, 0.12);
    }

    &:active {
        transform: translateY(0);
    }

    svg {
        flex-shrink: 0;
        font-size: 20px;
    }

    @media (max-width: 480px) {
        width: 100%;
    }
`;
export const Description = styled.p`
    color: #cbd5e1;
    line-height: 1.7;
    max-width: 600px;
    @media (max-width: 767px) {
        font-size: 0.85rem;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`;
export const Label = styled.span`
    font-weight: 700;
    color: #e5e7eb;

    line-height: 1.5;

    @media (max-width: 767px) {
        display: none;
    }
`;
export const RatingStarsWrapper = styled.div`
    @media (max-width: 767px) {
        display: none;
    }
`;
export const WatchMobileButton = styled.button`
    display: none;

    @media (max-width: 767px) {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        width: 100%;

        padding: 1px 2px;
        margin-top: 8px;

        border-radius: 10px;

        font-size: 0.9rem;
        font-weight: 600;

        cursor: pointer;
        transition: all 0.25s ease;

        background: rgba(59, 130, 246, 0.15);
        color: #60a5fa;

        border: 1px solid rgba(59, 130, 246, 0.4);

        box-shadow: 0 10px 25px rgba(59, 130, 246, 0.2);

        &:hover {
            background: rgba(59, 130, 246, 0.25);
            box-shadow: 0 14px 30px rgba(59, 130, 246, 0.3);
        }

        &:active {
            transform: scale(0.98);
        }
    }
`;
export const StyledFavoriteIcon = styled(FavoriteIcon)<{
    $active?: boolean;
}>`
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 2;

    cursor: pointer;

    color: ${({ $active }) =>
    $active ? "#60a5fa" : "rgba(203, 213, 225, 0.6)"};

    opacity: 0;

    transition: all 0.2s ease;

    ${({ $active }) =>
    $active &&
    `
        color: #60a5fa;
        filter: drop-shadow(0 0 6px #60a5fa)
                drop-shadow(0 0 12px #3b82f6);
        animation: pulseGlow 1.5s infinite ease-in-out;
    `}

    ${Card}:hover & {
        opacity: 1;
    }

    &:hover {
        transform: scale(1.15);
    }

    @media (max-width: 768px) {
        opacity: 1;
    }

    @keyframes pulseGlow {
        0% {
            filter: drop-shadow(0 0 5px #60a5fa)
            drop-shadow(0 0 10px #3b82f6);
        }
        50% {
            filter: drop-shadow(0 0 10px #60a5fa)
            drop-shadow(0 0 18px #3b82f6);
        }
        100% {
            filter: drop-shadow(0 0 5px #60a5fa)
            drop-shadow(0 0 10px #3b82f6);
        }
    }
`;