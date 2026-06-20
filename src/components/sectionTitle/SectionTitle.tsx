import styled from "styled-components";

export const SectionTitle = styled.p`
  font-size: 1.6rem;
  font-weight: 700;

  color: #ffffff;

  margin-bottom: 20px;

  letter-spacing: -0.02em;

  position: relative;

  &::after {
    content: "";

    position: absolute;
    left: 0;
    bottom: -6px;

    width: 60px;
    height: 3px;

    background: linear-gradient(90deg, #3b82f6, #8b5cf6);

    border-radius: 2px;
  }
`;