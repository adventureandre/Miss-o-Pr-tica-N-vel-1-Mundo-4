import { useCallback, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RouteProp, useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";

import * as ImagePicker from 'expo-image-picker';

import { suppliersGetById } from "src/storege/supplier/supplierGetById";
import { supplierSetImage } from "src/storege/supplier/supplierSetImage";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";


import { SuppliersProps } from "@screens/Suppliers";
import { Button } from "@components/Button";

import { AlterImage, Container, Logo, LogoContainer } from "./styles";
import { suppliersRemoveById } from "src/storege/supplier/supplierRemoveById";
import { Alert } from "react-native";

interface PerfilProps {
    supplierId: string;
}

export function Perfil() {
    const [supplier, setSupplier] = useState<SuppliersProps>()

    const route = useRoute<RouteProp<{ params: PerfilProps }, 'params'>>();
    const supplierId = route.params.supplierId;

    const navigation =  useNavigation();


    const findSupplier = async () => {
        const find = await suppliersGetById(supplierId)
        setSupplier(find);

    }

    const handleSetImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true
        });

        if (!result.canceled) {
            const newlogo = result.assets[0].base64
            console.log("base", newlogo);
            supplierSetImage(String(supplier?.id), String(newlogo))
            findSupplier();

        }
    };

    const handleDelete = async (supplierId: string) => {
        try {
            Alert.alert(
                'Deletar fornecedor',
                'Deseja realmente deletar esse fornecedor?',
                [
                    {
                        text: 'Cancelar',
                        onPress: () => console.log('Cancelado'),
                        style: 'cancel'
                    },
                    {
                        text: 'Confirmar',
                        onPress: async () => {
                            await suppliersRemoveById(supplierId);
                            navigation.navigate('suppliers');
                        }
                    }
                ]
            );
        } catch (error) {
            Alert.alert('Erro ao deletar fornecedor');
        }
    }
    

    useFocusEffect(useCallback(
        () => {
            findSupplier();
        }, [findSupplier]
    ))


    return (
        <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <Container>
                <Header showBackButton />
                <Highlight title="Perfil" />

                <LogoContainer>
                    <Logo source={{
                        uri: supplier?.logo
                    }} />

                    <AlterImage title="Alterar foto" onPress={handleSetImage} />
                </LogoContainer>


                <Button title="Deletar Fornecedor"
                    onPress={() => handleDelete(supplierId)}
                />
            </Container>

        </KeyboardAwareScrollView>
    )
}