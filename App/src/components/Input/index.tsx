import { TextInput, TextInputProps } from "react-native";

import { Container, Error } from './styles';
import { useTheme } from "styled-components/native";

export type InputProps = TextInputProps & {
    inputRef?: React.RefObject<TextInput>;
    errorMessage?: string;
}

export function Input({ inputRef, errorMessage, ...rest }: InputProps) {

    const { COLORS } = useTheme();



    return (
        <>
            <Container
                ref={inputRef}
                placeholderTextColor={COLORS.GRAY_300}
                {...rest} />
                <Error>{errorMessage && errorMessage}</Error>
        </>
    )

}