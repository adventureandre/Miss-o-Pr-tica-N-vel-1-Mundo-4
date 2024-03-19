import { Picker } from "@react-native-picker/picker";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
flex:1;

width: 100%;
padding-left: 30px;
padding-right: 30px;
padding-bottom: 30px;

background-color: ${({theme})=>theme.COLORS.GRAY_600};
`

export const Content = styled.View`
flex: 1;
gap: 15px;
min-height: 400px;
`


export const Select = styled(Picker)`
flex: 1;
min-height: 56px;
max-height: 56px;

${({theme})=> css`

    background-color: ${theme.COLORS.GRAY_700};
    color: ${theme.COLORS.WHITE};

    font-size: ${theme.FONT_SIZE.MD}px;
`}

border-radius: 6px;
padding: 16px;
`

export const Option = styled(Picker.Item)``;

export const SectionContainer = styled.View`
  margin-top: 20px; 
  min-height: 100px;
`;

export const Label =  styled.Text`
color: ${({theme})=> theme.COLORS.WHITE};
margin-bottom: 5px;
`