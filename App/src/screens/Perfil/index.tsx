import { Text } from "react-native";

import { Container } from "./styles";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { RouteProp, useFocusEffect, useRoute } from "@react-navigation/native";
import { suppliersGetById } from "src/storege/supplier/supplierGetById";
import { useCallback, useState } from "react";
import { SuppliersProps } from "@screens/Suppliers";

interface PerfilProps {
    supplierId: string;
}

export function Perfil() {

    const [supplier, setSupplier] = useState<SuppliersProps>()

    const route = useRoute<RouteProp<{ params: PerfilProps }, 'params'>>();
    const supplierId = route.params.supplierId;

    const findSupplier = async () => {
        const find = await suppliersGetById(supplierId)
        setSupplier(find);

    }

    useFocusEffect(useCallback(
        () => {
            findSupplier();
        }, []
    ))

    return (
        <Container>
            <Header showBackButton />
            <Highlight title="Perfil" subtitle={supplier?.name} />
        </Container>

    )
}