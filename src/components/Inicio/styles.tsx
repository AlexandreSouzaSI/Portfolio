import styled from "styled-components";
import { fontSize, FontSizeProps } from "styled-system";

export const ContainerConteudoPrincipal = styled.div`
  width: 99%;
  height: 88vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const Imagem = styled.img`
    width: 250px;
    padding: 5px;
    border-radius: 50%;
    border: 0.1px solid #cfcfcf;
`
type SpanProps = FontSizeProps;

export const Info = styled.span<SpanProps>`
  font-size: 18px;
  width: 450px;
  font-family: Arial, sans-serif;
  align-items: center;
  display: flex;
  justify-content: start;
  margin-left: 150px;
  ${fontSize}

  div#link {
    margin-right: 20px;
  }
`
