import styled from "styled-components";

export const Main = styled.main`
    flex: 1;

    width: 100%;
    max-width: 1500px;

    margin: 0 auto;


    @media (max-width: 1200px) {
        padding: 24px;
    }

    @media (max-width: 768px) {
        padding: 16px;
    }
`;