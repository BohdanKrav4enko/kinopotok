import styled from "styled-components";


export const CardBadges = styled.div`
    position: absolute;

    top: 10px;
    left: 10px;
    right: 10px;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    pointer-events: none;
`;
export const RatingBadge = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;

    padding: 2px 6px;

    border-radius: 8px;

    background: rgba(0, 0, 0, 0.75);

    backdrop-filter: blur(10px);

    color: #facc15;

    font-size: 13px;
    font-weight: 700;

    border: 1px solid rgba(255, 255, 255, 0.08);

    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
`;
export const YearBadge = styled.div`
    padding: 2px 6px;

    border-radius: 8px;

    background: rgba(0, 0, 0, 0.75);

    backdrop-filter: blur(10px);

    color: #fff;

    font-size: 13px;
    font-weight: 600;

    border: 1px solid rgba(255, 255, 255, 0.08);

    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
`;