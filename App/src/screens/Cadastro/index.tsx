import { Text } from "react-native";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";

export function Cadastro() {
    return (
        <Container>
            <Header showBackButton />
            <Highlight title="Cadastro" subtitle="MillyArtesanato"/>
            <Text>cadastro</Text>
        </Container>

    )
}