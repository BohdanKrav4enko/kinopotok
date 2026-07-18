import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;

    display: flex;
    align-items: center;
    gap: 10px;

    width: clamp(340px, 20vw, 440px);
    height: 48px;

    padding: 0 16px;

    border-radius: 6px;

    background: rgba(255,255,255,.03);
    border: 1px solid rgba(255,255,255,.06);

    backdrop-filter: blur(18px);

    transition: .25s;

    &:focus-within{
        border-color: rgba(124,92,255,.35);

        box-shadow:
                0 0 0 4px rgba(124,92,255,.12);
    }

    svg{
        width:18px;
        height:18px;

        color:#8b93a7;

        flex-shrink:0;

        transition:.25s;
    }

    &:focus-within svg{
        color:#fff;
    }

    @media(max-width:768px){
        width:100%;
    }
`;

export const SearchInput = styled.input`
    flex:1;

    min-width:0;

    color:#fff;

    font-size:15px;

    background:transparent;

    &::placeholder{
        color:#8b93a7;
    }
`;

export const Dropdown = styled.div`
    position:absolute;

    top:calc(100% + 10px);
    left:0;

    width:100%;

    overflow:hidden;

    border-radius: 0 0 10px 10px;

    background:#121624;

    border:1px solid rgba(255,255,255,.06);

    box-shadow:
            0 24px 60px rgba(0,0,0,.45);

    z-index:100;
`;

export const Suggestion = styled.div`
    display:flex;
    align-items:center;
    gap:14px;

    padding:12px 14px;

    cursor:pointer;

    transition:.25s;

    &:not(:last-child){
        border-bottom:1px solid rgba(255,255,255,.05);
    }

    &:hover{
        background:rgba(124,92,255,.08);
    }
`;

export const Poster = styled.img`
    width:46px;
    height:66px;

    border-radius: 2px;

    object-fit:cover;

    flex-shrink:0;
`;

export const Info = styled.div`
    flex:1;

    min-width:0;

    display:flex;
    flex-direction:column;
    gap:4px;
`;

export const Title = styled.div`
    color:#fff;

    font-size:15px;
    font-weight:600;

    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
`;

export const Meta = styled.div`
    display:flex;
    gap:8px;

    color:#8b93a7;

    font-size:13px;

    flex-wrap:wrap;
`;

export const AllResultsButton = styled.button`
    width:100%;
    height:48px;

    display:flex;
    align-items:center;
    justify-content:center;

    background:rgba(255,255,255,.03);

    border-top:1px solid rgba(255,255,255,.06);

    color:#fff;

    font-size:14px;
    font-weight:600;

    transition:.25s;

    &:hover{
        background:rgba(124,92,255,.12);

        color:#fff;
    }
`;