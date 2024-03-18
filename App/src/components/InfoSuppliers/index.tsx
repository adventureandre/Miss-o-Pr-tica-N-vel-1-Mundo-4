import { Container, Item } from "./styles"

type Props = {
    title: string,
    quant: number,
}

export const InfoSuppliers = ({quant,title}:Props) => {
    return (
        <Container>
            <Item>{title}</Item>
            <Item>{quant}</Item>
        </Container>

    )
}