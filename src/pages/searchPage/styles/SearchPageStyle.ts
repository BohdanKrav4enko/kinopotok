import styled from "styled-components";

export const Container = styled.div`
  padding: 32px 48px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Header = styled.div`
  margin-bottom: 24px;
`;

export const TitleText = styled.h2`
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 1.6rem;
    font-weight: 800;

    color: #ffffff;

    margin-bottom: 6px;
`;

export const Query = styled.div`
  color: #60a5fa;
  font-size: 1.1rem;
  font-weight: 600;

  margin-bottom: 4px;
`;

export const Count = styled.div`
  color: #94a3b8;
  font-size: 0.9rem;
`;

export const MovieTitle = styled.div`
  font-size: 0.95rem;
  font-weight: 600;
  color: #e5e7eb;
`;

export const Empty = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin-top: 60px;

    text-align: center;

    font-size: 1.2rem;
    color: #94a3b8;
`;