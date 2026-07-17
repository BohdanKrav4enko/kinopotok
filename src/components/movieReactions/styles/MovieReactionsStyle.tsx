import styled from "styled-components";

export const Wrapper = styled.div`
    width:100%;

    display:flex;
    flex-direction:column;

    gap:14px;
`;
export const Header = styled.div`
    display:flex;

    align-items:center;

    justify-content:space-between;

    gap:12px;
`;

export const Button = styled.button<{ $active?: boolean }>`
    display:flex;

    align-items:center;

    justify-content:center;

    gap:8px;


    width:100%;

    padding:16px 14px;


    border-radius:14px;


    color:#fff;

    font-weight:600;

    cursor:pointer;


    background:${({$active}) =>
            $active
                    ? "rgba(124,92,255,.18)"
                    : "rgba(255,255,255,.04)"
    };


    border:1px solid ${({$active}) =>
            $active
                    ? "rgba(124,92,255,.45)"
                    : "rgba(255,255,255,.08)"
    };


    backdrop-filter:blur(10px);


    transition:.25s ease;


    svg{
        width:18px;
        height:18px;
    }


    &:hover{
        transform:translateY(-2px);

        background:
                rgba(124,92,255,.12);


        border-color:
                rgba(124,92,255,.35);
    }


    &:active{
        transform:scale(.98);
    }


    &:disabled{
        cursor:default;
        opacity:.6;
    }
`;

export const Count = styled.span`
    color:#8b93a7;

    font-size:14px;

    font-weight:500;
`;

export const RatingBar = styled.div`
    height:10px;

    width:100%;


    display:flex;


    overflow:hidden;


    border-radius:999px;


    background:
            rgba(255,255,255,.06);
`;
export const LikesFill = styled.div`
    height:100%;

    background:
            linear-gradient(
                    90deg,
                    #22c55e,
                    #4ade80
            );


    transition:
            width .3s ease;
`;

export const DislikesFill = styled.div`
    height:100%;

    background:
            linear-gradient(
                    90deg,
                    #ef4444,
                    #f87171
            );


    transition:
            width .3s ease;
`;