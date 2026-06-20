import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 32px;
    padding: 40px;
`;

export const Poster = styled.div`
    width: 260px;
    height: 380px;
    border-radius: 16px;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
`;

export const Info = styled.div`
    max-width: 600px;
`;

export const Title = styled.h1`
    margin-bottom: 10px;
`;

export const Year = styled.p`
    color: #94a3b8;
    margin-bottom: 20px;
`;

export const Description = styled.p`
  color: #cbd5e1;
  line-height: 1.6;
`;