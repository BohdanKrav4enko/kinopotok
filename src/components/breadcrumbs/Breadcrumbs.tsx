import { useNavigate, useParams } from "react-router-dom";
import { Crumb, Separator, Wrapper } from "./styles/BreadcrumbsStyle";
import { allContent } from "../allContent.ts";
import {setType} from "../../features/filterSlice/filterSlice.ts";
import {useAppDispatch} from "../../hooks";

export const Breadcrumbs = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { type, slug } = useParams();

    const item = allContent.find(
        (i) =>
            i.type === type &&
            i.slug?.toLowerCase() === slug?.toLowerCase()
    );

    return (
        <Wrapper>
            <Crumb onClick={() => {
                navigate("/")
                dispatch(setType('all'))
            }}>
                Главная
            </Crumb>

            <Separator>/</Separator>

            <Crumb onClick={() => navigate(`/${type}`)}>
                {type === "movie"
                    ? "Фильмы"
                    : type === "series"
                        ? "Сериалы"
                        : "Мультфильмы"}
            </Crumb>

            {item?.category && (
                <>
                    <Separator>/</Separator>

                    <Crumb
                        onClick={() =>
                            navigate(
                                `/${type}/category/${encodeURIComponent(
                                    item.category
                                )}`
                            )
                        }
                    >
                        {item.category}
                    </Crumb>
                </>
            )}

            {item && (
                <>
                    <Separator>/</Separator>

                    <Crumb $active>
                        {item.title}
                    </Crumb>
                </>
            )}
        </Wrapper>
    );
};