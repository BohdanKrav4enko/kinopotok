import styled from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {Link} from "react-router-dom";

export const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
`;

export const ListCard = styled.div`
    display: flex;
    gap: 16px;
    position: relative;
    cursor: pointer;
    
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
        align-items: flex-start;
    }
`;

export const Poster = styled.img`
    width: 220px;
    height: 320px;

    cursor: pointer;

    border-radius: 12px 0 0 12px;
    flex-shrink: 0;

    object-fit: cover;
    @media (max-width: 1024px) {
        width: 170px;
        height: 250px;
    }   
    @media (max-width: 767px) {
        width: 120px;
        height: 180px;
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

    transition: color 0.2s ease;

    ${ListCard}:hover & {
        color: #f8fafc;
    }

    @media (max-width: 1024px) {
        font-size: 1.6rem;
        width: 90%;
    }

    @media (max-width: 768px) {
        font-size: 1.4rem;
    }
`;

export const Info = styled.div`
    padding: 24px 30px 24px 0;

    display: flex;
    flex-direction: column;
    gap: 12px;

    flex: 1;
    min-width: 0;

    @media (max-width: 1024px) {
        padding: 6px 20px 6px 0;
        gap: 10px;
    }

    @media (max-width: 767px) {
        padding: 8px 12px 8px 0;
        gap: 6px;
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
export const MetaItem = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;

    color: #94a3b8;
    font-size: 0.95rem;
    line-height: 1;

    svg {
        color: inherit;
        font-size: 18px;
        flex-shrink: 0;

        position: relative;
        top: -1px;
    }

    @media (max-width: 767px) {
        font-size: 0.85rem;

        svg {
            font-size: 16px;
        }
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
    margin: 0;

    color: #cbd5e1;
    line-height: 1.7;

    width: 100%;
    min-width: 0;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    @media (max-width: 767px) {
        font-size: 0.85rem;
    }
`;
export const Label = styled.span`
    color: #e2e8f0;
    font-weight: 600;
    line-height: 1.6;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    @media (max-width: 767px) {
        display: none;
    }
`;
export const RatingStarsWrapper = styled.div`
    @media (max-width: 767px) {
        display: none;
    }
`;
export const PosterWrapper = styled.div`
    position: relative;
`
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
    bottom: 20px;
    right: 20px;
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

    ${ListCard}:hover & {
        opacity: 1;
    }

    &:hover {
        transform: scale(1.15);
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
    @media (max-width: 768px) {
        opacity: 1;
    }
`;
export const StyledLink = styled(Link)`
    color: #60a5fa;
    font-weight: 600;

    transition: color 0.2s ease;

    &:hover {
        color: #93c5fd;
        text-decoration: underline;
    }
`;
