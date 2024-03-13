import { Header } from "@components/Header";
import { Container } from "./styles";
import { Highlight } from "@components/Highlight";
import DisplayAnImageComponent from "./DisplayAnImageComponent";

export default function DisplayAnImage(){
    return(
        <Container>
            <Header showBackButton/>
            <Highlight
            title="Exibindo Imagens de Diferentes Fontes"
            subtitle="imagens de diferentes fontes,
            incluindo armazenamento local, rede e um esquema 'data:':"
            />
            <DisplayAnImageComponent/>
        </Container>
    )
}