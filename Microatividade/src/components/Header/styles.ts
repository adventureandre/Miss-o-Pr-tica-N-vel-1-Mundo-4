import {CaretLeft } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container =  styled.View`
width: 100%;
flex-direction: row;
align-items: center;
justify-content: center;
`

export const Logo =  styled.Image`
width: 160px;
height: 40px;
`

export const BackButton =  styled.TouchableOpacity`
position: absolute;
left: 16px;
`

export const BackIcon = styled(CaretLeft).attrs(({theme})=>({
    size: 32,
    color: theme.COLORS.GRAY_700
}))``