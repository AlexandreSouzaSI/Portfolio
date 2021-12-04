import styled from "styled-components";
import { fontSize, FontSizeProps } from "styled-system";

export const ContainerPrincipalFormacao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  
  div {
    width: 700px;
    text-align: center;
    border: 0.1px solid #b1b1b1;
    border-radius: 5px;
  }
`

type FontS = FontSizeProps;

export const InformacoesFormado = styled.p<FontS>`
  font-size: 30px;
  font-family: Arial, sans-serif;
  ${fontSize}
`