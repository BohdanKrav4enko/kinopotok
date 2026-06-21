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
import {ROUTES} from "../../router/paths.ts";
import {subtitlesByType} from "./contentMeta.ts";
import {useAppSelector} from "../../hooks";

export const CategoriesPage = () => {
    const navigate = useNavigate();

    const list = categoriesList();
    const type = useAppSelector((state) => state.filter.type);

    const subtitle = subtitlesByType[type];

    return (
        <Page>
            <Header>
                <SectionTitle>Все категории</SectionTitle>

                <Subtitle>{subtitle}</Subtitle>
            </Header>

            <Grid>
                {list.map((cat) => (
                    <Card
                        key={cat}
                        onClick={() =>
                            navigate(
                                ROUTES.CATEGORY_DETAILS(type, cat)
                            )
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