import { Header } from "@components/Header"
import { Container } from "./styles"
import PizzaTranslator from "./PizzaTranslator"
import { Highlight } from "@components/Highlight"

export function PizzaTranslation() {
    return (
        <Container>
            <Header showBackButton/>
            <Highlight title="Pizza Translator" subtitle="Tradutor para pizza! =D"/>
            <PizzaTranslator/>
        </Container>
    )
}