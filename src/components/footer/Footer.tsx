import {ActionButton, Actions, Bottom, Container, Dot, Hero, Socials, Subtitle, Title} from "./styles/FooterStyle.tsx";

export const Footer = () => {
  return (
      <Container>
          <Hero>
              <Title>КиноПоток</Title>
              <Subtitle>
                  Твой персональный кинотеатр. Фильмы, избранное и рекомендации без лишнего шума.
              </Subtitle>

              <Actions>
                  <ActionButton $primary to="/">Смотреть фильмы</ActionButton>
                  <ActionButton to="/favorites">Избранное</ActionButton>
                  <ActionButton to="/login">Войти</ActionButton>
              </Actions>
          </Hero>

          <Bottom>
              <span>© {new Date().getFullYear()} КиноПоток</span>

              <Socials>
                  <Dot />
                  <Dot />
                  <Dot />
              </Socials>
          </Bottom>
      </Container>
  );
};

