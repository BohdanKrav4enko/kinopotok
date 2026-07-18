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

    flex: 1;
    min-width: 0;

    font-size: 2rem;
    font-weight: 800;
    color: #fff;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    transition: color .2s;

    ${ListCard}:hover & {
        color: #f8fafc;
    }

    @media (max-width: 1024px) {
        font-size: 1.6rem;
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
export const PosterWrapper = styled.div`
    position: relative;
`

export const Header = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
`;
export const StyledFavoriteIcon = styled(FavoriteIcon)<{
    $active?: boolean;
}>`
    flex-shrink: 0;

    font-size: 28px;

    cursor: pointer;

    color: ${({ $active }) =>
            $active ? "#60a5fa" : "rgba(203,213,225,.55)"};

    transition: .25s;

    &:hover {
        transform: scale(1.12);

        color: ${({ $active }) =>
                $active ? "#60a5fa" : "#ffffff"};
    }

    ${({ $active }) =>
            $active &&
            `
        filter:
            drop-shadow(0 0 5px #60a5fa)
            drop-shadow(0 0 10px #3b82f6);
        animation: pulseGlow 2s ease-in-out infinite;
    `};

    @keyframes pulseGlow {
    0%,100% {
        filter:
                drop-shadow(0 0 5px #60a5fa)
                drop-shadow(0 0 10px #3b82f6);
    }

    50% {
        filter:
                drop-shadow(0 0 8px #60a5fa)
                drop-shadow(0 0 14px #3b82f6);
    }
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
