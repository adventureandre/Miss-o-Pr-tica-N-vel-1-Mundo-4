
import { useNavigation } from "@react-navigation/native";
import { BackButton, BackIcon, Container, Logo } from "./styles";


type Props = {
    showBackButton?: boolean
}

export function Header({ showBackButton = false }: Props) {

    const navigation =  useNavigation();

    function handleGoBack(){
    navigation.navigate('suppliers')
        
    }

    return (
        <Container>
            {
                showBackButton &&
                <BackButton onPress={handleGoBack}><BackIcon /></BackButton>
            }
            <Logo />
       
        </Container>
    )
}