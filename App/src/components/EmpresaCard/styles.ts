import { Image, ImageProps, TouchableOpacity } from "react-native";
import { css } from "styled-components";
import styled from "styled-components/native";

type LogoProps = ImageProps & {
    ver?: boolean;
}

export const Container = styled(TouchableOpacity)`
width:100%;
height:90px;
background-color: ${({ theme }) => theme.COLORS.GRAY_500};
border-radius: 6px;

flex-direction: row;
align-items: center;
gap: 20;

padding: 24px;
margin-bottom:12px;

`

export const Logo = styled(Image)<LogoProps>`
  width: 50px;
  height: 50px;
`;

export const Name =  styled.Text`
color: ${({theme})=> theme.COLORS.WHITE};
font-family: ${({theme})=> theme.FONT_FAMILY.BOLD};
font-size: ${({theme})=> theme.FONT_SIZE.MD}px;

`

export const Desc =  styled.Text`
color: ${({theme})=> theme.COLORS.WHITE};
font-size: ${({theme})=> theme.FONT_SIZE.SM}px;

`

  