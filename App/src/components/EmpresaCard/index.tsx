import { ImageSourcePropType, Text, View } from "react-native";
import { Container, Logo, Name, Desc, Seta, Content } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { SuppliersProps } from "@screens/Suppliers";

interface EmpresaCardProps {
    supplier: SuppliersProps;
}

export default function EmpresaCard({ supplier }: EmpresaCardProps) {
    const navigation = useNavigation();

    const supplierId =  supplier.id

    function handleGetPerfil() {
        navigation.navigate("perfil",{supplierId});
    }

    return (
        <Container onPress={handleGetPerfil}>
            <Logo source={{
                uri:supplier.logo
            }} />
            <Content>
                <Name>{supplier.name}</Name>
                <Desc>{supplier.categoria}</Desc>

            </Content>
            <Seta />
        </Container>
    )
}