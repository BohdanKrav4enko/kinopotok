import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    position: relative;

    height: 36px;

    padding: 0 12px;

    border-radius: 10px;

    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);

    transition: all 0.2s ease;

    width: 240px;
    max-width: 240px;

    flex-shrink: 0;

    &:focus-within {
        border-color: rgba(59, 130, 246, 0.5);
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);
    }

    @media (max-width: 768px) {
        width: 100%;
        max-width: 100%;
    }
`;

export const SearchInput = styled.input`
    width: 100%;
    min-width: 0;

    padding: 10px 14px;

    border-radius: 12px;

    color: #fff;

    transition: all 0.25s ease;

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
  padding: 10px 12px;

  cursor: pointer;

  color: #e5e7eb;

  transition: all 0.2s ease;

  &:hover {
    background: rgba(59, 130, 246, 0.2);
    color: #fff;
  }
`;