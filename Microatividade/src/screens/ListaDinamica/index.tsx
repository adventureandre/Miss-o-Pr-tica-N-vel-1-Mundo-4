import { Header } from "@components/Header"
import { Container } from "./styles"
import { Highlight } from "@components/Highlight"
import ListaDinamicaComponent from "./ListaDinamicaComponent"

export function ListaDinamica() {
    return (
        <Container>
            <Header showBackButton/>
            <Highlight 
            title="Componente de Lista Dinâmica" 
            subtitle="componente de lista que
            utiliza o ScrollView para rolagem vertical:"/>
            <ListaDinamicaComponent/>
        </Container>
    )
}