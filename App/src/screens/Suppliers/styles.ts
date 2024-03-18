import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
flex:1;

width: 100%;
padding-left: 10px;
padding-right: 10px;
padding-bottom: 30px;

background-color: ${({theme})=>theme.COLORS.GRAY_600};
`