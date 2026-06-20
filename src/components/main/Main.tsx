import styled from "styled-components";

export const Main = styled.main`
    flex: 1;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding: 24px 48px;

    @media (max-width: 768px) {
        padding: 16px 20px;
    }
`;