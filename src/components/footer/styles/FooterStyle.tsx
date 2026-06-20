import styled from "styled-components";

export const Container = styled.footer`
margin-top: 80px;
padding: 48px;

background: rgba(10, 15, 28, 0.85);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);

border-top: 1px solid rgba(255, 255, 255, 0.08);

box-shadow:
inset 0 1px 0 rgba(255, 255, 255, 0.04),
0 -8px 32px rgba(0, 0, 0, 0.25);
`;

export const Top = styled.div`
display: flex;
justify-content: space-between;
gap: 48px;

padding-bottom: 32px;
margin-bottom: 32px;

border-bottom: 1px solid rgba(255, 255, 255, 0.08);

@media (max-width: 768px) {
    flex-direction: column;
}
`;

export const Brand = styled.div`
max-width: 360px;
`;

export const Logo = styled.a`
display: inline-block;

margin-bottom: 16px;

font-size: 1.7rem;
font-weight: 800;
letter-spacing: -0.04em;

color: #ffffff;
text-decoration: none;

transition: transform 0.25s ease;

&:hover {
    transform: scale(1.04);
}
`;

export const Description = styled.p`
color: #94a3b8;
line-height: 1.7;
`;

export const LinksGroup = styled.div`
display: flex;
flex-direction: column;
gap: 14px;
`;

export const Title = styled.h4`
margin-bottom: 8px;

color: #ffffff;
font-size: 1rem;
`;

export const FooterLink = styled.a`
width: fit-content;

color: #94a3b8;
text-decoration: none;

transition:
    color 0.25s ease,
    transform 0.25s ease;

&:hover {
    color: #60a5fa;
    transform: translateX(4px);
}
`;

export const Bottom = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 24px;

@media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
}
`;

export const Copyright = styled.p`
color: #64748b;
font-size: 0.9rem;
`;

export const Socials = styled.div`
display: flex;
gap: 20px;
`;

export const SocialLink = styled.a`
position: relative;

color: #94a3b8;
text-decoration: none;
font-weight: 500;

transition: color 0.25s ease;

&::after {
    content: "";

    position: absolute;
    left: 0;
    bottom: -4px;

    width: 100%;
    height: 2px;

    background: linear-gradient(90deg, #3b82f6, #8b5cf6);

    transform: scaleX(0);
    transform-origin: center;

    transition: transform 0.25s ease;
}

&:hover {
    color: #ffffff;
}

&:hover::after {
    transform: scaleX(1);
}
`;