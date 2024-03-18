
import { BackButton, BackIcon, Container, Logo } from "./styles";


type Props = {
    showBackButton?: boolean
}

export function Header({ showBackButton = false }: Props) {

    return (
        <Container>
            {
                showBackButton &&
                <BackButton><BackIcon /></BackButton>
            }
            <Logo />
       
        </Container>
    )
}