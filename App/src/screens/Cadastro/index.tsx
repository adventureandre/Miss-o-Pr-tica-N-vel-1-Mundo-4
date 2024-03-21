import { useForm } from "react-hook-form";
import { Container, Content, Label, SectionContainer } from "./styles";

import uuid from "react-native-uuid";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { ControlledTextInput } from "@components/controller/ControlledTextInput";
import { SuppliersProps } from "@screens/Suppliers";
import { supplierCreate } from "src/storege/supplier/supplierCreate";
import { useNavigation } from "@react-navigation/native";
import logo from "./assets/logo";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

type SchemaCadastro = {
    nome: string,
    endereco: string,
    contato: string,
    categoria: string,
}

export function Cadastro() {

    const navigation =  useNavigation();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SchemaCadastro>({
        defaultValues: {
            nome: "",
            endereco: "",
            contato: "",
            categoria: "",
        },
    })

    async function submitForm(values: SchemaCadastro) {
        const newCadSupplier: SuppliersProps = {
            name: values.nome,
            categoria: values.categoria,
            contato: values.contato,
            endereco: values.endereco,
            id: String(uuid.v4()),
            logo: logo
        }

        await supplierCreate(newCadSupplier)
        navigation.navigate('suppliers');


    }



    return (
        <KeyboardAwareScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
        <Container>

            <Header showBackButton />
            <Highlight title="Cadastro" />

            <Content>
                <SectionContainer>
                    <Label>Nome:</Label>
                    <ControlledTextInput
                        control={control}
                        name="nome"
                        rules={{ 
                            required: 'nome obrigatório',
                            minLength: {
                                value: 3,
                                message: 'Nome deve ter pelo menos 3 caracteres'
                            }
                        }}
                        placeholder="Nome:"
                        keyboardType="web-search"
                    />
                </SectionContainer>

                <SectionContainer>
                    <Label>Endereço:</Label>
                    <ControlledTextInput
                        control={control}
                        name="endereco"
                        rules={{
                            required: 'Insira um Endereço',
                        }}
                        placeholder="Endereço"
                    />
                </SectionContainer>

                <SectionContainer>
                    <Label>Contato:</Label>
                    <ControlledTextInput
                        control={control}
                        name="contato"
                        rules={{ 
                            required: 'Insira seu Contato', 
                            minLength: {
                                value: 9,
                                message: 'Digite um telefone valído "9 digitos"'
                              }
                        }}
                        placeholder="Contato"
                        keyboardType="phone-pad"
                    />
                </SectionContainer>

                <SectionContainer>
                    <Label>Categoria:</Label>
                    <ControlledTextInput
                        control={control}
                        name="categoria"
                        rules={{
                            required: 'Insira um produto da sua categoria',
                        }}
                        placeholder="Produtos fornecidos"
                    />
                </SectionContainer>


            </Content>


            <Button title="Cadastrar"
                onPress={handleSubmit(submitForm)}
            />

        </Container>
        </KeyboardAwareScrollView>
    )
}