import { Header } from "@components/Header"
import { Text } from "react-native"
import { Container } from "./styles"

export function PizzaTranslation() {
    return (
        <Container>
            <Header showBackButton/>
            <Text>Pizza</Text>
        </Container>
    )
}