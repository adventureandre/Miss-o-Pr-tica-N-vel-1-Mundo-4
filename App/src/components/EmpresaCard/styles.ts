import { CaretRight } from "phosphor-react-native";
import { Image, ImageProps, TouchableOpacity } from "react-native";
import { css } from "styled-components";
import styled from "styled-components/native";


export const Container = styled(TouchableOpacity)`
width:100%;
height:90px;
background-color: ${({ theme }) => theme.COLORS.GRAY_500};
border-radius: 6px;

flex-direction: row;
justify-content: space-between;
align-items: center;
gap: 20px;

padding: 24px;
margin-bottom: 12px;
`

export const Logo = styled(Image)`
  width: 50px;
  height: 50px;
`;

export const Name =  styled.Text`
color: ${({theme})=> theme.COLORS.WHITE};
font-family: ${({theme})=> theme.FONT_FAMILY.BOLD};
font-size: ${({theme})=> theme.FONT_SIZE.MD}px;

`
export const Content =  styled.View`
flex: 1;
`

export const Desc =  styled.Text`
color: ${({theme})=> theme.COLORS.WHITE};
font-size: ${({theme})=> theme.FONT_SIZE.SM}px;

`

  export const Seta =  styled(CaretRight)`
  color: ${({theme})=> theme.COLORS.WHITE};
  right: 0;
  `