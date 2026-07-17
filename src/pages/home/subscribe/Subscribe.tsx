import * as S from "./SubscribeStyle";

export const Subscribe = () => {
    return (
        <S.Section>

            <S.Background />

            <S.Content>

                <S.Title>
                    Будь в курсе новинок
                </S.Title>

                <S.Text>
                    Подпишись на рассылку и получай уведомления
                    <br />
                    о новых фильмах и сериалах.
                </S.Text>

                <S.Form>

                    <S.Input
                        placeholder="Введите ваш email"
                    />

                    <S.Button>
                        Подписаться
                    </S.Button>

                </S.Form>

            </S.Content>

        </S.Section>
    );
};