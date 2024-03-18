import { ImageSourcePropType, Text, View } from "react-native";
import { Container, Logo, Name, Desc } from "./styles";


interface Props {
    logoSource: ImageSourcePropType;
    companyName: string;
    companyDesc: string;
}

export default function EmpresaCard({ logoSource, companyName,companyDesc }: Props) {
    return (
        <Container>
            <Logo source={logoSource} />
            <View>
                <Name>{companyName}</Name>
                <Desc>{companyDesc}</Desc>
            </View>
        </Container>
    )
}