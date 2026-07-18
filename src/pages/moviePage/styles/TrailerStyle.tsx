import styled from "styled-components";

export const TrailerSection = styled.div`
    margin-top: 30px;

    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const TrailerTitle = styled.h2`
    font-size: 1.3rem;
    color: #e2e8f0;
    font-weight: 700;
`;

export const TrailerFrame = styled.iframe`
    width: 100%;
    height: 620px;

    border-radius: 16px;
    border: none;

    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);

    @media (max-width: 768px) {
        height: 220px;
    }
`;