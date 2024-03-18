import { Header } from "@components/Header";
import { Container } from "./styles";
import { InfoSuppliers } from "@components/InfoSuppliers";
import EmpresaCard from "@components/EmpresaCard";
import ImgLogo from "@assets/favicon.png"
import { Button } from "@components/Button";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { useNavigation } from "@react-navigation/native";

const fornecedores = [
    {
        id: "1",
        companyName: 'alfa',
        companyDescription: 'vivendo na roça',
        companyLogo: 'logo'
    },
    {
        id: "2",
        companyName: 'Milly',
        companyDescription: 'artezanato',
        companyLogo: 'logo'
    },
    {
        id: "3",
        companyName: 'Milly',
        companyDescription: 'artezanato',
        companyLogo: 'logo'
    }
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
                        logoSource={ImgLogo}
                        companyName={item.companyName}
                        companyDesc={item.companyDescription}
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