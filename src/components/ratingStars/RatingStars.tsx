import {Container, Star, Value} from "./styles/RatingStarsStyle.tsx";

type RatingStarsProps = {
    rating: number;
};

export const RatingStars = ({ rating }: RatingStarsProps) => {
    const filledStars = Math.round(rating);

    return (
        <Container>
            {Array.from({ length: 10 }, (_, index) => (
                <Star key={index} $active={index < filledStars}>
                    ★
                </Star>
            ))}
            <Value>{rating.toFixed(1)}</Value>
        </Container>
    );
};

