import { useNavigate } from "react-router-dom";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Wrapper, Card, Icon, Title, Text, Button } from "./styles/NotFoundStyle";

export const NotFound = () => {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Card>
                <Icon>
                    <SentimentVeryDissatisfiedIcon />
                </Icon>

                <Title>404</Title>
                <Text>Такой страницы не существует</Text>

                <Button onClick={() => navigate("/")}>
                    Вернуться на главную
                </Button>
            </Card>
        </Wrapper>
    );
};