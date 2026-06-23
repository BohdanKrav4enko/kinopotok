import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

import { showNotification } from "../../features/error/notificationSlice";
import { useAppSelector } from "../../hooks";

import {
    initItem,
    like,
    dislike,
} from "../../features/favorites/movieReactionsSlice";

import {
    Button,
    Count,
    DislikesFill,
    Header,
    LikesFill,
    RatingBar,
    Wrapper,
} from "./styles/MovieReactionsStyle";

type Props = {
    item: {
        type: string;
        slug: string;
        id: number;
    };
};

export const MovieReactions = ({ item }: Props) => {
    const dispatch = useDispatch();

    const key = `${item.type}:${item.slug}`;

    const reactions = useAppSelector(
        (state) => state.reactions.items[key]
    );

    const userVote = useAppSelector(
        (state) => state.reactions.userVotes[key]
    );

    useEffect(() => {
        dispatch(initItem({ type: item.type, slug: item.slug }));
    }, [item.type, item.slug, dispatch]);

    if (!reactions) return null;

    const { likes, dislikes } = reactions;

    const total = likes + dislikes;

    const likePercent = total ? (likes / total) * 100 : 50;
    const dislikePercent = total ? (dislikes / total) * 100 : 50;

    const handleLike = () => {
        if (userVote === "like") {
            dispatch(
                showNotification({
                    text: "Вы уже голосовали за это видео!",
                    type: "info",
                    duration: 1500,
                })
            );
            return;
        }

        dispatch(like({ type: item.type, slug: item.slug }));
    };

    const handleDislike = () => {
        if (userVote === "dislike") {
            dispatch(
                showNotification({
                    text: "Вы уже голосовали за это видео!",
                    type: "info",
                    duration: 1500,
                })
            );
            return;
        }

        dispatch(dislike({ type: item.type, slug: item.slug }));
    };

    return (
        <Wrapper>
            <Header>
                <Button
                    $active={userVote === "like"}
                    onClick={handleLike}
                >
                    <ThumbUpAltIcon color="success" fontSize="small" />
                    <Count>{likes}</Count>
                </Button>

                <Button
                    $active={userVote === "dislike"}
                    onClick={handleDislike}
                >
                    <ThumbDownAltIcon color="error" fontSize="small" />
                    <Count>{dislikes}</Count>
                </Button>
            </Header>

            <RatingBar>
                <LikesFill style={{ width: `${likePercent}%` }} />
                <DislikesFill style={{ width: `${dislikePercent}%` }} />
            </RatingBar>
        </Wrapper>
    );
};