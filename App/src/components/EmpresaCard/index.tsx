import { ImageSourcePropType, Text, View } from "react-native";
import { Container, Logo, Name, Desc, Seta, Content } from "./styles";
import { useNavigation } from "@react-navigation/native";



interface Props {
    logoSource: ImageSourcePropType;
    companyName: string;
    companyDesc: string;
}

export default function EmpresaCard({ logoSource, companyName, companyDesc }: Props) {
    const navigation = useNavigation();

    function handleGetPerfil() {
        navigation.navigate('perfil')

    }

    return (
        <Container onPress={handleGetPerfil}>
            <Logo source={logoSource} />
            <Content>
                <Name>{companyName}</Name>
                <Desc>{companyDesc}</Desc>

            </Content>
            <Seta />
        </Container>
    )
}