import { Header } from "@components/Header";
import { Container } from "./styles";
import ListaSimplesComponent from "./ListaSimplesComponent";
import { Highlight } from "@components/Highlight";

export default function ListaSimples() {
    return (
        <Container>
            <Header showBackButton />
            <Highlight
                title="Componente de Lista Simples"
                subtitle="componente de  lista simples usando FlatList" />
            <ListaSimplesComponent />
        </Container>

    )
}