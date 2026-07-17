import styled from "styled-components";

export const Container = styled.button`
    height: 52px;

    padding: 0 20px;

    display: flex;
    align-items: center;
    gap: 12px;

    border: 1px solid rgba(255,255,255,.06);
    border-radius: 12px;

    background: rgba(255,255,255,.03);

    color: rgba(255,255,255,.9);

    cursor: pointer;

    transition: .2s;

    &:hover {
        background: rgba(255,255,255,.05);
        border-color: rgba(255,255,255,.12);
    }

    svg {
        opacity: .7;
    }
`;