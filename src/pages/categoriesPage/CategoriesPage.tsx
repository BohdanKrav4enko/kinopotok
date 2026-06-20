import {Card, Container, Grid, Title} from "./styles/CategoriesPageStyle.tsx";
import {categoriesList} from "../../components/categoriesList.tsx";

export const CategoriesPage = () => {
    return (
        <Container>
            <Title>🎬 Все категории</Title>

            <Grid>
                {categoriesList.map((cat, i) => (
                    <Card key={i} to={`/category/${cat}`}>
                        {cat}
                    </Card>
                ))}
            </Grid>
        </Container>
    );
};

