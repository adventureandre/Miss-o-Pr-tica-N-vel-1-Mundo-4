import { useForm } from "react-hook-form";
import { Container, Content, Label, Option, SectionContainer, Select } from "./styles";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { ControlledTextInput } from "@components/controller/ControlledTextInput";

type SchemaCadastro = {
    nome: string,
    desc: string,
    categoria: string,
    endereco: string,
}

export function Cadastro() {

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SchemaCadastro>({
        defaultValues: {
            nome: "",
            desc: "",
            endereco: "",
        },
    })

    function submitForm(values: SchemaCadastro) {
        console.log(values)
    }



    return (
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
                    />
                </SectionContainer>

                <SectionContainer>
                    <Label>Endereço:</Label>
                    <ControlledTextInput
                        control={control}
                        name="desc"
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
                        name="endereco"
                        rules={{ 
                            required: 'Insira seu Contato', 
                            minLength: {
                                value: 9,
                                message: 'Digite um telefone valído "9 digitos"'
                              }
                        }}
                        placeholder="Contato"
                        keyboardType="numeric"
                    />
                </SectionContainer>


            </Content>


            <Button title="Cadastrar"
                onPress={handleSubmit(submitForm)}
            />

        </Container>
    )
}