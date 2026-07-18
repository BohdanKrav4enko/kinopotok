import styled, {css, keyframes} from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 20px;

    margin-top: 10px;
    margin-bottom: 32px;

    position: relative;

    @media (max-width: 992px) {
        flex-direction: column;
        align-items: stretch;
    }

    @media (max-width: 768px) {
        flex-direction: row;
        align-items: center;
    }

    @media (max-width: 550px) {
        flex-wrap: wrap;
    }
`;

export const Filters = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;

    @media (max-width: 1080px) {
        display: none;
    }
`;

export const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    @media (max-width: 992px) {
        justify-content: space-between;
    }

    @media (max-width: 1080px) {
        width: 100%;
    }
`;


const glow = keyframes`
    0%,100%{
        box-shadow:
            0 0 4px rgba(108,77,255,.12),
            0 0 10px rgba(59,130,246,.08);

        filter:
            drop-shadow(0 0 2px #6c4dff)
            drop-shadow(0 0 4px #3b82f6);
    }

    50%{
        box-shadow:
            0 0 6px rgba(108,77,255,.18),
            0 0 14px rgba(59,130,246,.12);

        filter:
            drop-shadow(0 0 3px #6c4dff)
            drop-shadow(0 0 6px #3b82f6);
    }
`;

export const MobileFiltersButton = styled.button<{
    $active?: boolean;
}>`
    display: none;

    height: 52px;
    padding: 0 20px;

    align-items: center;
    justify-content: center;

    border: 1px solid rgba(255, 255, 255, .08);
    border-radius: 6px;

    background: #121624;
    color: white;

    cursor: pointer;

    transition: .25s;

    svg {
        width: 20px;
        height: 20px;
        transition: .25s;
    }

    &:hover {
        background: rgba(255, 255, 255, .05);
        border-color: rgba(108, 77, 255, .45);
    }

    &:active {
        transform: scale(.97);
    }

    ${({ $active }) =>
            $active &&
            css`
                color: #8b5cf6;
                border-color: rgba(139,92,246,.35);
                background: rgba(108,77,255,.08);

                animation: ${glow} 2.8s ease-in-out infinite;

                svg{
                    color:#8b5cf6;
                }
            `}
}
    @media (max-width:1080px){
        display:flex;

        height:44px;
        padding:0 14px;
        font-size:13px;
    }

    @media (max-width:480px){
        height:40px;
        padding:0 12px;
        font-size:12px;
    }
`;
export const FiltersBackdrop = styled.div`
    position: fixed;
    inset: 0;

    background: rgba(0,0,0,.65);

    backdrop-filter: blur(8px);

    z-index: 998;
`;

export const FiltersModal = styled.div`
    position: fixed;

    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1001;

    padding: 24px;

    display: flex;
    flex-direction: column;
    gap: 16px;

    background: #121624;

    border-top: 1px solid rgba(255,255,255,.08);
    border-radius: 24px 24px 0 0;


    max-height: 80vh;

    overflow-y: auto;

    box-shadow:
            0 -20px 60px rgba(0,0,0,.45);

    animation: slideUp .25s ease;

    scrollbar-width: thin;
    scrollbar-color: rgba(108,77,255,.5) transparent;

    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-thumb {
        background: rgba(108,77,255,.5);
        border-radius: 999px;
    }

    @keyframes slideUp {
        from {
            transform: translateY(100%);
        }

        to {
            transform: translateY(0);
        }
    }
`;

export const ModalTitle = styled.h3`
    color: white;

    font-size: 24px;
    font-weight: 700;

    margin-bottom: 8px;
`;

export const CloseButton = styled.button`
    height: 54px;

    margin-top: 8px;

    border: none;
    border-radius: 6px;

    background: #6c4dff;

    color: white;

    font-size: 15px;
    font-weight: 700;

    cursor: pointer;

    transition: .25s;

    box-shadow:
        0 10px 25px rgba(108,77,255,.35);

    &:hover {
        background: #7b5dff;
        transform: translateY(-2px);
    }

    &:active {
        transform: scale(.98);
    }
`;