import styled from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {Link} from "react-router-dom";

export const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
`;

export const ListCard = styled.div`
    position: relative;
    overflow: hidden;

    display: flex;
    gap: 16px;

    cursor: pointer;

    border-radius: 18px;

    background: linear-gradient(
            180deg,
            rgba(17, 23, 40, .92),
            rgba(10, 15, 28, .98)
    );

    border: 1px solid rgba(255, 255, 255, .08);

    box-shadow:
            0 12px 30px rgba(0,0,0,.35),
            inset 0 1px rgba(255,255,255,.05);

    transition:
            transform .3s ease,
            border-color .3s ease,
            box-shadow .3s ease;

    &::before{
        content:"";
        position:absolute;
        inset:0;

        background: linear-gradient(
                180deg,
                rgba(52,120,255,.08),
                transparent 35%
        );

        opacity:0;
        transition:.3s;

        pointer-events:none;
    }

    &::after{
        content:"";
        position:absolute;
        left:15%;
        right:15%;
        bottom:-24px;

        height:42px;

        border-radius:50%;

        background:#2d7dff;

        filter:blur(34px);

        opacity:0;
        transition:.3s;

        pointer-events:none;
    }

    &:hover{
        transform: translateY(-6px);

        border-color: rgba(52,120,255,.45);

        box-shadow:
                0 22px 50px rgba(0,0,0,.5),
                0 0 30px rgba(52,120,255,.18);

        &::before,
        &::after{
            opacity:1;
        }
    }

    @media (max-width:768px){
        flex-direction:row;
        align-items:flex-start;
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
