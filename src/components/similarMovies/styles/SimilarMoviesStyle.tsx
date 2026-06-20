import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 48px;
`;

export const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;

  margin-bottom: 16px;

  color: #ffffff;
`;

export const Grid = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`;

export const Card = styled.div`
    cursor: pointer;

    background: rgba(255, 255, 255, 0.04);

    border-radius: 14px;

    padding: 10px;

    position: relative;
    overflow: hidden;

    transition: all 0.25s ease;

    border: 1px solid rgba(255, 255, 255, 0.06);

    box-shadow: 0 0 0 rgba(0, 0, 0, 0);

    &:hover {
        transform: translateY(-6px) scale(1.02);

        background: rgba(255, 255, 255, 0.08);

        border-color: rgba(59, 130, 246, 0.3);

        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
    }

    &:active {
        transform: translateY(-2px) scale(0.99);
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
                rgba(255, 255, 255, 0.15),
                transparent
        );

        transition: 0.6s ease;
    }

    &:hover::before {
        left: 120%;
    }
`;
