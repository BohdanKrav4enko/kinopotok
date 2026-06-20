import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { showNotification } from "../../features/error/notificationSlice";
import { useAppSelector } from "../../hooks";
import {dislike, initMovie, like,} from "../../features/favorites/movieReactionsSlice";
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
    movieId: number;
};

export const MovieReactions = ({ movieId }: Props) => {
    const dispatch = useDispatch();

    const reactions = useAppSelector(
        (state) => state.reactions.items[movieId]
    );

    const userVote = useAppSelector(
        (state) => state.reactions.userVotes[movieId]
    );

    useEffect(() => {
        dispatch(initMovie(movieId));
    }, [movieId, dispatch]);

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

        dispatch(like(movieId));
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

        dispatch(dislike(movieId));
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