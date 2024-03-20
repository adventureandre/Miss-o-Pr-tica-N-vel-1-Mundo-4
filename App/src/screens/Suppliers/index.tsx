import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Container } from "./styles";
import ImgLogo from "@assets/favicon.png"

import { InfoSuppliers } from "@components/InfoSuppliers";
import { Header } from "@components/Header";
import EmpresaCard from "@components/EmpresaCard";
import { Button } from "@components/Button";
import { ListEmpty } from "@components/ListEmpty";


export type SuppliersProps = {
    id: string;
    name: string;
    logo: string;
    endereco: string;
    contato: string;
    categoria: string;
}

const fornecedores: SuppliersProps[] = [
    {
        id: "1",
        name: 'alfa',
        categoria: 'vivendo na roça',
        logo: 'logo',
        contato:'15589',
        endereco:'rua 2'
    },
    {
        id: "2",
        name: 'Mylli',
        categoria: 'artesanato',
        logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        contato:'15589',
        endereco:'rua 2'
    },
]

export function Suppliers() {

    const navigation =  useNavigation();

    function handleGetCadastro() {
        navigation.navigate('cadastro')

    }

    return (
        <Container>
            <Header />
            <InfoSuppliers title="Fornecedores" quant={fornecedores.length} />
            <FlatList
                data={fornecedores}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <EmpresaCard
                    supplier={item}
                    />

                )}
                contentContainerStyle={fornecedores.length === 0 && {flex: 1}}
                ListEmptyComponent={()=> <ListEmpty message='Cadastre o primeiro fornecedor!' />}
                showsVerticalScrollIndicator={false}
            />
            <Button 
            onPress={handleGetCadastro}
            title="Cadastrar Fornecedor" 
            type="PRIMARY"

            />
        </Container>
    )
}