import { Container, Content, Option, Select } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useState } from "react";
import { ControlledTextInput } from "@components/controller/ControlledTextInput";
import { useForm } from "react-hook-form";

type SchemaCadastro ={
    nome:   string,
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
        },
    })

    function submitForm ( values: SchemaCadastro){

    }



    return (<>
        <Container>
            <Content>
                <Header showBackButton />
                <Highlight title="Cadastro" />

                <ControlledTextInput
                    control={control}
                    name="nome" 
                    rules={{required:'nome obrigatório'}}
                    placeholder="Nome:"
                                 />


                <Input placeholder="Nome" />







                <Input placeholder="Descrição" />

                {/* <Select
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedValue(String(itemValue))
                    }>
                    <Option label="Categoria 1" value="categoria1" />
                    <Option label="Categoria 2" value="categoria2" />
                    <Option label="Categoria 3" value="categoria3" />
                </Select> */}

                <Input placeholder="Endereco" />

            </Content>
            <Button title="Cadastrar" 
            onPress={handleSubmit(submitForm)}
            />
        </Container>

    </>
    )
}