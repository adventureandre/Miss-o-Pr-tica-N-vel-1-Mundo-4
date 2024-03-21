import { FlatList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { Container } from "./styles";
import ImgLogo from "@assets/favicon.png"

import { InfoSuppliers } from "@components/InfoSuppliers";
import { Header } from "@components/Header";
import EmpresaCard from "@components/EmpresaCard";
import { Button } from "@components/Button";
import { ListEmpty } from "@components/ListEmpty";
import { useCallback, useEffect, useState } from "react";
import { supplierGetAll } from "src/storege/supplier/supplierGetAll";


export type SuppliersProps = {
    id: string | number;
    name: string;
    logo: string;
    endereco: string;
    contato: string;
    categoria: string;
}



export function Suppliers() {
    const [suppliers, setSuppliers] = useState<SuppliersProps[]>([]);

    const navigation = useNavigation();

    function handleGetCadastro() {
        navigation.navigate('cadastro')

    }

    async function fetchSuppliers() {
        try {
            const data = await supplierGetAll();
            setSuppliers(data);


        } catch (error) {
            console.log("error", error)
        }
    }

    useFocusEffect(useCallback(() => {
        fetchSuppliers();
    }, []))


    return (
        <Container>
            <Header />
            <InfoSuppliers title="Fornecedores" quant={suppliers.length} />
            <FlatList
                data={suppliers}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <EmpresaCard
                        supplier={item}
                    />

                )}
                contentContainerStyle={suppliers.length === 0 && { flex: 1 }}
                ListEmptyComponent={() => <ListEmpty message='Cadastre o primeiro fornecedor!' />}
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