import styled from "styled-components";

export const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
`;

export const ListCard = styled.div`
    display: flex;
    gap: 16px;

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
        flex-direction: column;
        padding: 14px;
    }
`;

export const Poster = styled.img`
    width: 220px;
    height: 320px;

    cursor: pointer;

    border-radius: 12px;
    flex-shrink: 0;

    object-fit: cover;

    @media (max-width: 1024px) {
        width: 180px;
        height: 260px;
    }

    @media (max-width: 768px) {
        width: 100%;
        max-width: 280px;
        height: auto;
        aspect-ratio: 2 / 3;

        align-self: center;
    }
`;

export const Title = styled.h3`
    margin: 0;

    font-size: 2rem;
    font-weight: 800;

    color: #ffffff;

    cursor: pointer;

    @media (max-width: 1024px) {
        font-size: 1.6rem;
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
`;

export const Meta = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    font-size: 0.9rem;
    color: #94a3b8;

    @media (max-width: 768px) {
        font-size: 0.85rem;
    }
`;

export const Actions = styled.div`
    display: flex;
    gap: 10px;

    margin-top: auto;

    @media (max-width: 480px) {
        flex-direction: column;
        width: 100%;
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

export const Label = styled.span`
    font-weight: 700;
    color: #e5e7eb;

    line-height: 1.5;

    @media (max-width: 768px) {
        font-size: 0.95rem;
    }
`;