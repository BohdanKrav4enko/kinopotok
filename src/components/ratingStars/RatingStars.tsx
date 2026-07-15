import { Container, Star, Value } from "./styles/RatingStarsStyle.tsx";

type RatingStarsProps = {
    rating: number;
};

export const RatingStars = ({ rating }: RatingStarsProps) => {
    return (
        <Container>
            <Star>★</Star>
            <Value>{rating.toFixed(1)}</Value>
        </Container>
    );
};