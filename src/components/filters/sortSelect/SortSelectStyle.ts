import styled from "styled-components";

export const Container = styled.select`
    height: 52px;

    padding: 0 18px;

    display: flex;
    align-items: center;
    gap: 10px;

    border: 1px solid rgba(255,255,255,.08);
    border-radius: 10px;

    background: rgba(255,255,255,.03);

    color: rgba(255,255,255,.85);

    cursor: pointer;

    transition: .2s;

    &:hover {
        background: rgba(255,255,255,.05);
        border-color: rgba(255,255,255,.12);
    }

    svg {
        color: rgba(255,255,255,.55);
    }
`;