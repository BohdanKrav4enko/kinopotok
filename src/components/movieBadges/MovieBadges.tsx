import * as S from './MovieBadgesStyle';

type Props = {
    rating: number;
    year: number | string;
};

export const MovieBadges = ({ rating, year }: Props) => {
    return (
        <S.CardBadges>
            <S.RatingBadge> ⭐ {rating.toFixed(1)} </S.RatingBadge>
            <S.YearBadge> {year} </S.YearBadge>
        </S.CardBadges>
    );
};

