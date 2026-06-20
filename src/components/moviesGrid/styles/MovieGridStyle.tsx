import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
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

    &::before {
        content: "";

        position: absolute;
        top: 0;
        left: -120%;

        width: 100%;
        height: 100%;

        background: linear-gradient(
                120deg,
                transparent,
                rgba(255, 255, 255, 0.12),
                transparent
        );

        transition: 0.6s ease;
    }

    &:hover::before {
        left: 120%;
    }
`;

export const Poster = styled.img`
    width: 100%;
    aspect-ratio: 2 / 3;
    border-radius: 10px;
    object-fit: contain;
    margin-bottom: 10px;

    transition: all 0.3s ease;

    filter: saturate(1);

    ${Card}:hover & {
        transform: scale(1.03);
        filter: saturate(1.2) brightness(1.1);
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
`;
export const Subtitle = styled.p`
    color: #94a3b8;
    font-size: 0.95rem;
    margin-bottom: 10px;
`;
