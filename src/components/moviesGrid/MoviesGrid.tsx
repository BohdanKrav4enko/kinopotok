import styled from "styled-components";

const mockMovies = [
    { id: 1, title: "Interstellar", year: 2014 },
    { id: 2, title: "Inception", year: 2010 },
    { id: 3, title: "The Batman", year: 2022 },
    { id: 4, title: "Dune", year: 2021 },
];

export const MoviesGrid = () => {
    return (
        <Grid>
            {mockMovies.map((movie) => (
                <Card key={movie.id}>
                    <Poster />
                    <Title>{movie.title}</Title>
                    <Year>{movie.year}</Year>
                </Card>
            ))}
        </Grid>
    );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border-radius: 14px;
  padding: 12px;

  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-6px);
  }
`;

const Poster = styled.div`
  width: 100%;
  height: 240px;
  border-radius: 10px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-weight: 600;
  margin-bottom: 4px;
`;

const Year = styled.div`
  color: #94a3b8;
  font-size: 0.9rem;
`;