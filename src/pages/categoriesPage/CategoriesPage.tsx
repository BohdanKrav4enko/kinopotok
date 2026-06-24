import { categoriesList } from "../../components/categoriesList";
import { useNavigate, useParams } from "react-router-dom";
import {
    Page,
    Header,
    Subtitle,
    Grid,
    Card,
    Glow,
} from "./styles/CategoriesPageStyle";
import { SectionTitle } from "../../components";
import { ROUTES } from "../../router/paths.ts";
import { subtitlesByType } from "./contentMeta.ts";

type ContentType = keyof typeof subtitlesByType;

const validTypes: ContentType[] = [
    "movie",
    "series",
    "cartoon",
    "all",
];

export const CategoriesPage = () => {
    const navigate = useNavigate();
    const { type } = useParams();

    const safeType: ContentType = validTypes.includes(
        type as ContentType
    )
        ? (type as ContentType)
        : "all";

    const list = categoriesList(safeType);

    const subtitle =
        subtitlesByType[safeType] ?? subtitlesByType.all;

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
                                ROUTES.CATEGORY_DETAILS(
                                    safeType,
                                    cat
                                )
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