import styled from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }
`;

export const Card = styled.div`
    position: relative;
    overflow: hidden;

    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.06);

    border-radius: 14px;
    padding: 12px;

    cursor: pointer;

    transition: all 0.25s ease;

    box-shadow: 0 0 0 rgba(0, 0, 0, 0);

    &:hover {
        transform: translateY(-8px) scale(1.02);
        background: rgba(255, 255, 255, 0.07);
        border-color: rgba(59, 130, 246, 0.3);
        box-shadow: 0 14px 40px rgba(0, 0, 0, 0.4);
    }

    &:active {
        transform: translateY(-3px) scale(0.99);
    }

    @media (max-width: 768px) {
        padding: 8px;
        border-radius: 12px;

        /* отключаем ховер-эффекты на мобилке */
        &:hover {
            transform: none;
            box-shadow: none;
        }
    }
`;

export const Poster = styled.img`
    width: 100%;
    aspect-ratio: 2 / 3;
    border-radius: 10px;
    object-fit: cover;
    margin-bottom: 10px;

    transition: all 0.3s ease;

    filter: saturate(1);

    ${Card}:hover & {
        transform: scale(1.03);
        filter: saturate(1.2) brightness(1.1);
    }

    @media (max-width: 768px) {
        margin-bottom: 6px;
    }
`;

export const Title = styled.div`
    font-weight: 600;
    font-size: 1.2rem;
    text-align: center;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    color: #e5e7eb;

    transition: all 0.2s ease;

    ${Card}:hover & {
        color: #ffffff;
    }

    @media (max-width: 768px) {
        font-size: 0.95rem;
    }

    @media (max-width: 480px) {
        font-size: 0.85rem;
    }
`;
export const Subtitle = styled.p`
    color: #94a3b8;
    font-size: 0.95rem;
    margin-bottom: 10px;
`;
export const Year = styled.p`
    font-size: 0.8rem;
    color: #94a3b8;

    text-align: center;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
export const StyledFavoriteIcon = styled(FavoriteIcon)<{
    $active?: boolean;
}>`
    position: absolute;
    bottom: 8px;
    right: 8px;
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
        color: #60a5fa;
        transform: scale(1.15);
        filter: drop-shadow(0 0 8px #60a5fa);
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