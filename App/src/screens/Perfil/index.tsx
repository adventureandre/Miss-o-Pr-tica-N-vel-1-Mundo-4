import { Text } from "react-native";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";

export function Perfil() {
    return (
        <Container>
            <Header showBackButton />
            <Highlight title="Perfil" subtitle="MillyArtesanato"/>
            <Text>Perfil</Text>
        </Container>

    )
}