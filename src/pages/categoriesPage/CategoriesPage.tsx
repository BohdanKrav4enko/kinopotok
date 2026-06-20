import { categoriesList } from "../../components/categoriesList";
import { useNavigate } from "react-router-dom";
import {
    Page,
    Header,
    Subtitle,
    Grid,
    Card,
    Glow,
} from "./styles/CategoriesPageStyle";
import {SectionTitle} from "../../components";

export const CategoriesPage = () => {
    const navigate = useNavigate();

    return (
        <Page>
            <Header>
                <SectionTitle>Все категории</SectionTitle>

                <Subtitle>
                    Фильмы на любой вкус — от блокбастеров до нишевого кино.
                    Выбирай жанр и погружайся в просмотр
                </Subtitle>
            </Header>

            <Grid>
                {categoriesList.map((cat) => (
                    <Card
                        key={cat}
                        onClick={() =>
                            navigate(`/category/${encodeURIComponent(cat)}`)
                        }
                    >
                        <Glow />
                        {cat}
                    </Card>
                ))}
            </Grid>
        </Page>
    );
};