import styled from "styled-components";

export const Container = styled.div`
  padding: 40px;
`;
export const Empty = styled.div`
    margin-top: 40px;
    padding: 24px 32px;

    color: #cbd5e1;
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;

    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 14px;

    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);

    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);

    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        inset: 0;

        background: radial-gradient(
                circle at center,
                rgba(59, 130, 246, 0.15),
                transparent 70%
        );

        opacity: 0.6;
    }
`;