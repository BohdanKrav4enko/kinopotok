import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;

    gap: 8px;

    position: relative;

    height: 38px;

    padding: 0 12px;

    border-radius: 10px;

    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);

    width: clamp(220px, 18vw, 320px);

    flex-shrink: 1;

    transition: all 0.2s ease;

    &:focus-within {
        border-color: rgba(59, 130, 246, 0.5);
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const SearchInput = styled.input`
    width: 100%;
    min-width: 0;

    padding: 10px 14px;

    border-radius: 12px;

    color: #fff;

    transition: all 0.25s ease;

    font-size: clamp(14px, 1vw, 16px);

    &::placeholder {
        color: #9ca3af;
    }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 110%;
  left: 0;

  width: 100%;

  margin-top: 6px;

  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(10px);

  border-radius: 12px;

  overflow: hidden;

  border: 1px solid rgba(255, 255, 255, 0.08);

  z-index: 50;
`;

export const Suggestion = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    padding: 10px 12px;

    cursor: pointer;

    color: #e5e7eb;

    transition: all 0.2s ease;

    border-bottom: 1px solid rgba(255, 255, 255, 0.06);

    &:last-child {
        border-bottom: none;
    }

    &:hover {
        background: rgba(59, 130, 246, 0.15);
        transform: translateX(2px);
    }
`;
export const Poster = styled.img`
    width: 42px;
    height: 60px;

    border-radius: 6px;

    object-fit: cover;

    flex-shrink: 0;

    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
`;
export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;

    min-width: 0;
`;
export const Title = styled.div`
    font-size: 14px;
    font-weight: 600;
    color: #fff;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
export const Meta = styled.div`
    font-size: 12px;
    color: #9ca3af;

    display: flex;
    gap: 6px;

    flex-wrap: wrap;
`;
export const AllResultsButton = styled.button`
    width: 100%;

    padding: 12px 14px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    background: rgba(59, 130, 246, 0.12);

    color: #e5e7eb;

    font-size: 13px;
    font-weight: 500;

    border: none;
    border-top: 1px solid rgba(255, 255, 255, 0.08);

    transition: all 0.2s ease;

    &:hover {
        background: rgba(59, 130, 246, 0.25);
        color: #fff;
    }

    &:active {
        transform: scale(0.98);
    }
`;