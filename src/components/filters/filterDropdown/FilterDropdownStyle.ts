import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;

    width: fit-content;

    @media (max-width: 1080px) {
        width: 100%;
    }
`;

export const Trigger = styled.button`
    height: 44px;

    min-width: 160px;

    padding: 0 14px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 10px;

    border: 1px solid rgba(255,255,255,.08);
    border-radius: 6px;

    background: #121624;

    color: rgba(255,255,255,.92);

    font-size: 14px;
    font-weight: 500;

    cursor: pointer;

    transition: .25s;

    &:hover {
        background: #171b2a;
        border-color: rgba(108,77,255,.35);
    }

    @media (max-width: 1080px) {
        height: 42px;

        padding: 0 12px;

        font-size: 13px;

        min-width: unset;
        width: 100%;
    }

    @media (max-width: 480px) {
        height: 40px;

        padding: 0 10px;

        font-size: 12px;
    }
`;

export const Icon = styled.div<{ $open: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;

    color: #8d74ff;

    transform: ${({ $open }) =>
            $open
                    ? "rotate(180deg)"
                    : "rotate(0deg)"};

    transition: transform .25s ease;
`;

export const Dropdown = styled.div`
    position: absolute;

    top: calc(100% + 10px);
    left: 0;

    width: 100%;

    background: #121624;

    border: 1px solid rgba(255,255,255,.06);
    border-radius: 0 0 8px 8px;

    overflow: hidden;

    z-index: 50;

    box-shadow:
            0 20px 50px rgba(0,0,0,.45);

    max-height: 320px;
    overflow-y: auto;

    scrollbar-width: thin;
    scrollbar-color: #6c4dff #121624;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: rgba(108,77,255,.7);
        border-radius: 20px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #7b5dff;
    }

    @media (max-width: 768px) {
        width: 100%;
        min-width: unset;
        max-height: 260px;
    }
`;

export const Option = styled.button<{ $active?: boolean }>`
    width: 100%;

    padding: 11px 14px;

    display: flex;
    align-items: center;

    border: none;

    background: ${({ $active }) =>
            $active
                    ? "rgba(108,77,255,.12)"
                    : "transparent"};

    color: ${({ $active }) =>
            $active
                    ? "#8d74ff"
                    : "rgba(255,255,255,.88)"};

    font-size: 13px;
    font-weight: 500;

    cursor: pointer;

    transition: .2s;

    &:hover {
        background: rgba(255,255,255,.05);
        color: white;
    }

    &:not(:last-child) {
        border-bottom: 1px solid rgba(255,255,255,.04);
    }

    @media (max-width: 480px) {
        padding: 10px 12px;
        font-size: 12px;
    }
`;