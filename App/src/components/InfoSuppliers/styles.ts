
import styled, { css } from "styled-components/native";

export const Container =  styled.View`
width: 100%;
margin-top: 30px;
margin-bottom: 20;
padding: 0 30px 0 30px;

flex-direction: row;
align-items: center;
justify-content: space-between;
`

export const Item =  styled.Text`

${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
  `};
`