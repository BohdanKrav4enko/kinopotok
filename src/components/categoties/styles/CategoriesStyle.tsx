import styled from "styled-components";
import {Link} from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;

  padding: 14px 24px;

  overflow-x: auto;
  white-space: nowrap;

  background: rgba(255, 255, 255, 0.02);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Chip = styled(Link)`
  padding: 8px 14px;

  border-radius: 999px;

  background: rgba(255, 255, 255, 0.04);
  color: #cbd5e1;

  font-size: 0.9rem;
  white-space: nowrap;

  transition: all 0.2s ease;

  &:hover {
    background: rgba(59, 130, 246, 0.2);
    color: #ffffff;
    transform: translateY(-1px);
  }

  &:active {
    transform: scale(0.96);
  }
`;