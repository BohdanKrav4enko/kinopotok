import {
    Bottom,
    Brand,
    Container, Copyright,
    Description,
    FooterLink,
    LinksGroup,
    Logo, SocialLink, Socials,
    Title,
    Top
} from "./styles/FooterStyle.tsx";

export const Footer = () => {
  return (
    <Container>
      <Top>
        <Brand>
          <Logo href="/">🎬 КиноПоток</Logo>
          <Description>
            Смотри фильмы, сохраняй избранное и открывай для себя новый контент каждый день.
          </Description>
        </Brand>

        <LinksGroup>
          <Title>Навигация</Title>

          <FooterLink href="/videos">Видео</FooterLink>
          <FooterLink href="/gifs">Гифки</FooterLink>
          <FooterLink href="/models">Модели</FooterLink>
          <FooterLink href="/blog">Блог</FooterLink>
        </LinksGroup>

        <LinksGroup>
          <Title>Аккаунт</Title>

          <FooterLink href="/bookmarks">Мои закладки</FooterLink>
          <FooterLink href="/login">Вход</FooterLink>
          <FooterLink href="/register">Регистрация</FooterLink>
        </LinksGroup>
      </Top>

      <Bottom>
        <Copyright>
          © {new Date().getFullYear()} КиноПоток. Все права защищены.
        </Copyright>

        <Socials>
          <SocialLink href="#">Telegram</SocialLink>
          <SocialLink href="#">Discord</SocialLink>
          <SocialLink href="#">YouTube</SocialLink>
        </Socials>
      </Bottom>
    </Container>
  );
};

