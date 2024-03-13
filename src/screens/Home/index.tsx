import { useNavigation } from "@react-navigation/native";
import { Container } from "./styles";

import { Header } from "@components/Header";
import { ItemCard } from "@components/ItemCard";
import { Highlight } from "@components/Highlight";

export default function Home() {

    const navigation = useNavigation();

    return (
        <Container>
            <Header />
            <Highlight title="Trabalho Nivel 1" subtitle="Aluno: Andre Luiz - 202208604943"/>
            <ItemCard 
            title="Componente Pizza Translator" 
            onPress={()=> navigation.navigate("pizza")}
            />
            <ItemCard
            title="Componente Lista Dinâmica"
            onPress={()=> navigation.navigate("listaDinamica")}
            />
            <ItemCard
            title="Componente Lista Simples"
            onPress={()=> navigation.navigate("listaSimples")}
            />
              <ItemCard
            title="Componente Lista com Seções"
            onPress={()=> navigation.navigate("listaSection")}
            />
            <ItemCard
            title="Componentes elementos visuais"
            onPress={()=> navigation.navigate("imageItem")}
            />
        </Container>
    )
}