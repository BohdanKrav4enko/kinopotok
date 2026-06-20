import styled from "styled-components";
import {Link} from "react-router-dom";

export const Container = styled.div`
  padding: 40px;
`;

export const Title = styled.h1`
  margin-bottom: 24px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
`;

export const Card = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 18px;

  border-radius: 14px;

  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);

  color: #cbd5e1;
  text-decoration: none;

  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    background: rgba(59, 130, 246, 0.15);
    color: #fff;
  }
`;
export const Category = styled(Link)`
    display: inline-flex;
    width: fit-content;

    padding: 6px 14px;

    border-radius: 999px;

    background: rgba(59, 130, 246, 0.15);
    color: #60a5fa;

    font-size: 0.9rem;
    font-weight: 600;

    text-decoration: none;

    position: relative;
    overflow: hidden;

    transition: all 0.25s ease;

    box-shadow: 0 0 0 rgba(59, 130, 246, 0);

    &:hover {
        transform: translateY(-2px) scale(1.05);
        background: rgba(59, 130, 246, 0.25);
        color: #93c5fd;

        box-shadow: 0 8px 20px rgba(59, 130, 246, 0.25);
    }

    &:active {
        transform: translateY(0) scale(0.98);
    }

    &::before {
        content: "";

        position: absolute;
        top: 0;
        left: -100%;

        width: 100%;
        height: 100%;

        background: linear-gradient(
                120deg,
                transparent,
                rgba(255, 255, 255, 0.2),
                transparent
        );

        transition: all 0.5s ease;
    }

    &:hover::before {
        left: 100%;
    }
`;
export const Dot = styled.span`
  color: rgba(255, 255, 255, 0.3);
`;
export const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  margin-top: 6px;

  color: #94a3b8;
  font-size: 0.95rem;
`;