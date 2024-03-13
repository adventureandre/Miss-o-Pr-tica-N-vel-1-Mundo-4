import { Header } from "@components/Header";
import { Container } from "./styles";
import ListaSectionComponent from "./ListaSectionComponent";
import { Highlight } from "@components/Highlight";

export default function ListaSection(){
    return(
        <Container>
            <Header showBackButton/>
            <Highlight
                title="Componente de Lista com Seções"
                subtitle="renderizar uma lista com seções lógicas, talvez com
                cabeçalhos de seção, então um SectionList " />
            <ListaSectionComponent/>
        </Container>
    )
}