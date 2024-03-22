import { Button } from "@components/Button";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
flex:1;

align-items: center;
width: 100%;
padding-left: 10px;
padding-right: 10px;
padding-bottom: 30px;

background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`
export const LogoContainer = styled.View`
  border: 1px;
  border-color: #cccc;
  border-style: solid;
  border-radius: '100%';
`
export const Logo = styled.Image`
  width: 150px;
  height: 150px;

`;

export const AlterImage = styled(Button)`
background-color: nome;
`