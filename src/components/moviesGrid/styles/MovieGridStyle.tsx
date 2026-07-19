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

export const Card = styled.div<{
    $variant: "grid" | "home";
}>`
    position: relative;
    overflow: hidden;

    width: ${({ $variant }) =>
            $variant === "home" ? "210px" : "100%"};

    flex: 0 0 210px;

    background: linear-gradient(
            180deg,
            rgba(17, 23, 40, .92),
            rgba(10, 15, 28, .98)
    );

    border: 1px solid rgba(255,255,255,.08);
    border-radius: 18px;

    cursor: pointer;

    transition:
            transform .3s ease,
            box-shadow .3s ease,
            border-color .3s ease;

    box-shadow:
            0 12px 30px rgba(0,0,0,.35),
            inset 0 1px rgba(255,255,255,.05);

    &::before{
        content:"";
        position:absolute;
        inset:0;

        background:
                linear-gradient(
                        180deg,
                        rgba(52,120,255,.08),
                        transparent 35%
                );

        opacity:0;
        transition:.3s;

        pointer-events:none;
    }

    &:hover{
        transform: translateY(-10px) scale(1.02);

        border-color: rgba(52,120,255,.45);

        box-shadow:
                0 22px 50px rgba(0,0,0,.55),
                0 0 30px rgba(52,120,255,.18);

        &::before{
            opacity:1;
        }
    }
`;

export const Poster = styled.img<{
    $variant: "grid" | "home";
}>`
    width: 100%;
    aspect-ratio:${({ $variant }) =>
            $variant === "home"
                    ? "2 / 3"
                    : "2 / 3"};
    border-radius: 14px 14px 0 0 ;
    object-fit: cover;
    margin-bottom: 10px;

    transition: all 0.3s ease;

    filter: saturate(1);

    ${Card}:hover & {
        transform: scale(1.03);
        filter: saturate(1.2) brightness(1.1);
    }

    @media (max-width: 768px) {
        margin-bottom: 8px;
    }
`;

export const Title = styled.h2`
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
        margin-bottom: 8px;
    }

    @media (max-width: 480px) {
        font-size: 0.85rem;
    }
`;
export const Subtitle = styled.p`
    color: #94a3b8;
    font-size: 0.95rem;
    margin-bottom: 30px;
`;
export const MetaItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;

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
export const Duration = styled.p`
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
        transform: scale(1.15);
    }

    @media (max-width: 768px) {
        opacity: 1;
    }
    @media (max-width: 480px) {
        bottom: 2px;
        right: 2px;
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
export const PosterWrapper = styled.div`
    position: relative;
`;
export const MetaWrapper = styled.div`
    padding:0 6px 6px;
`;