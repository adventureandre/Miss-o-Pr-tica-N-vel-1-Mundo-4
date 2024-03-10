import { Header } from "@components/Header";
import { Text } from "react-native";
import { Container } from "./styles";

export default function Home() {
    return (
        <Container>
            <Header />
            <Text>Home</Text>
        </Container>
    )
}