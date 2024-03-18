import { styled } from 'styled-components/native';
import { CaretLeft, UsersThree } from "phosphor-react-native";
export const Container =  styled.View`
width: 100%;
margin-top: 20px;

flex-direction: row;
align-items: center;
justify-content: center;
`

export const Logo = styled(UsersThree).attrs(({theme})=>({
size:56,
color: theme.COLORS.GREEN_800 ,
}))``

export const BackButton =  styled.TouchableOpacity`
position: absolute;
left: 16px;
`

export const BackIcon =  styled(CaretLeft).attrs(({theme})=>({
    size: 32,
    color: theme.COLORS.WHITE,
}))`
`