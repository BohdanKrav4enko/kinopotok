import styled from "styled-components";

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;

    padding: 40px;

    @media (max-width: 768px) {
        padding: 20px;
    }
`;

export const Top = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 30px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Poster = styled.img`
    width: 360px;
    height: 480px;
    object-fit: cover;

    border-radius: 16px;


    flex-shrink: 0;

    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
`;
export const PosterColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex-shrink: 0;
`;

export const Info = styled.div`
    max-width: 650px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const Title = styled.h1`
    font-size: 2.2rem;
    font-weight: 800;
    line-height: 1.2;

    letter-spacing: -0.02em;

    background: linear-gradient(90deg, #fff, #60a5fa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: fadeIn 0.4s ease;

    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);

    @media (max-width: 768px) {
        font-size: 1.8rem;
    }
`;

export const Meta = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;

    color: #94a3b8;
    font-size: 0.95rem;
`;

export const Category = styled.span`
  display: inline-block;

  width: fit-content;

  padding: 6px 14px;
  border-radius: 999px;

  background: rgba(59, 130, 246, 0.15);
  color: #60a5fa;

  font-size: 0.85rem;
  font-weight: 600;
`;

export const Description = styled.p`
  color: #cbd5e1;
  line-height: 1.7;
  max-width: 600px;
`;

export const Dot = styled.span`
  color: rgba(255, 255, 255, 0.3);
`;
export const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  margin-bottom: 20px;

  padding: 10px 14px;

  border-radius: 12px;

  background: rgba(255, 255, 255, 0.05);

  color: #d1d5db;
  font-weight: 600;

  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(-3px);
  }

  &:active {
    transform: translateX(0);
  }
`;
export const Facts = styled.div`
    margin-top: 16px;

    display: flex;
    flex-direction: column;
    gap: 10px;

    padding: 16px;

    border-radius: 14px;

    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.06);

    color: #cbd5e1;

    font-size: 0.9rem;
    line-height: 1.5;
`;

export const FactRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;

    b {
        color: #94a3b8;
        font-weight: 600;
    }
`;

export const Money = styled.span`
    color: #60a5fa;
    font-weight: 600;
`;

export const Divider = styled.div`
    height: 1px;
    background: rgba(255, 255, 255, 0.06);
    margin: 6px 0;
`;
export const HeaderRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 12px;

    flex-wrap: wrap;
`;
export const StarsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;

    line-height: 1;
    margin: 0;
    padding: 0;
`;