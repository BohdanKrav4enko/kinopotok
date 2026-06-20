import {useNavigate, useParams} from "react-router-dom";
import {Crumb, Separator, Wrapper} from "./styles/BreadcrumbsStyle";
import type {Movie} from "../../type/type";

type Props = {
    movies: Movie[];
};

export const Breadcrumbs = ({ movies }: Props) => {
    const navigate = useNavigate();
    const { slug } = useParams();

    const movie = movies?.find(
        (m) => m.slug?.toLowerCase() === slug?.toLowerCase()
    );

    return (
        <Wrapper>
            <Crumb onClick={() => navigate("/")}>
                Главная
            </Crumb>

            {movie && (
                <>
                    <Separator>/</Separator>

                    <Crumb $active>
                        {movie.title}
                    </Crumb>
                </>
            )}
        </Wrapper>
    );
};