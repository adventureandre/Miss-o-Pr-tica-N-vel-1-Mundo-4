import { useCallback, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RouteProp, useFocusEffect, useRoute } from "@react-navigation/native";

import * as ImagePicker from 'expo-image-picker';

import { suppliersGetById } from "src/storege/supplier/supplierGetById";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";


import { AlterImage, Container, Logo, LogoContainer } from "./styles";
import { SuppliersProps } from "@screens/Suppliers";
import { supplierSetImage } from "src/storege/supplier/supplierSetImage";

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
                </LogoContainer> 
                <AlterImage title="Alterar foto" onPress={handleSetImage} />

            </Container>
        </KeyboardAwareScrollView>
    )
}