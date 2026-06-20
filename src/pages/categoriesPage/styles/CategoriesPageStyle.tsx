import styled from "styled-components";

export const Page = styled.div`
    padding: 58px 0 0 0;
`;
export const Header = styled.div`
    margin-bottom: 22px;
`;
export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 16px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;
export const Card = styled.div`
    position: relative;
    overflow: hidden;

    padding: 18px;

    border-radius: 16px;

    cursor: pointer;

    background: rgba(255, 255, 255, 0.04);

    border: 1px solid rgba(255, 255, 255, 0.06);

    backdrop-filter: blur(14px);

    transition: all 0.25s ease;

    transform: translateZ(0);

    &:hover {
        transform: translateY(-6px) scale(1.02);

        background: rgba(59, 130, 246, 0.12);

        border-color: rgba(59, 130, 246, 0.35);

        box-shadow:
            0 20px 50px rgba(0, 0, 0, 0.5),
            0 0 30px rgba(59, 130, 246, 0.25);
    }

    &:active {
        transform: translateY(-2px) scale(0.98);
    }
`;
export const Glow = styled.div`
    position: absolute;
    inset: 0;

    background: radial-gradient(
        circle at top left,
        rgba(59, 130, 246, 0.25),
        transparent 60%
    );

    opacity: 0.6;

    transition: all 0.3s ease;

    ${Card}:hover & {
        opacity: 1;
        filter: blur(0px);
    }
`;
export const Subtitle = styled.p`
    margin-top: 8px;

    max-width: 600px;

    font-size: 0.95rem;
    line-height: 1.6;

    color: #94a3b8;

    display: flex;
    align-items: center;
    gap: 8px;
`;