import styled from "styled-components";

export const Container = styled.footer`
    position: relative;
    margin-top: 100px;
    padding: 60px 24px;

    overflow: hidden;

    background: radial-gradient(
            circle at top,
            rgba(59, 130, 246, 0.15),
            transparent 60%
    ),
    radial-gradient(
            circle at bottom,
            rgba(139, 92, 246, 0.12),
            transparent 60%
    ),
    rgba(10, 12, 20, 0.95);

    border-top: 1px solid rgba(255, 255, 255, 0.08);

    backdrop-filter: blur(20px);

    @media (max-width: 768px) {
        padding: 40px 16px;
    }
`;
export const Hero = styled.div`
    text-align: center;
    margin-bottom: 40px;
`;
export const Title = styled.h2`
    font-size: 2rem;
    font-weight: 800;

    color: #ffffff;

    letter-spacing: -0.03em;

    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;
export const Subtitle = styled.p`
    color: #94a3b8;
    font-size: 0.95rem;
    max-width: 520px;
    margin: 0 auto;
`;
export const Actions = styled.div`
    display: flex;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;

    margin-top: 30px;
`;
export const ActionButton = styled.a<{ $primary?: boolean }>`
    padding: 10px 14px;
    border-radius: 12px;

    font-size: 0.9rem;
    font-weight: 600;

    text-decoration: none;

    transition: all 0.25s ease;

    color: ${({ $primary }) => ($primary ? "#fff" : "#94a3b8")};

    background: ${({ $primary }) =>
    $primary ? "rgba(59,130,246,0.2)" : "rgba(255,255,255,0.04)"};

    border: 1px solid
        ${({ $primary }) =>
    $primary ? "rgba(59,130,246,0.4)" : "rgba(255,255,255,0.06)"};

    &:hover {
        transform: translateY(-3px);

        background: rgba(59,130,246,0.25);
        color: #ffffff;
        border-color: rgba(59,130,246,0.5);
    }
`;
export const Bottom = styled.div`
    margin-top: 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    color: #64748b;

    font-size: 0.85rem;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10px;
        text-align: center;
    }
`;
export const Socials = styled.div`
    display: flex;
    gap: 10px;
`;
export const Dot = styled.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;

    background: rgba(148, 163, 184, 0.6);

    transition: all 0.2s ease;

    &:hover {
        background: #60a5fa;
        transform: scale(1.4);
    }
`;