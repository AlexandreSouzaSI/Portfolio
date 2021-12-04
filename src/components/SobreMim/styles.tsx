import styled from "styled-components";
import { fontWeight, FontWeightProps } from "styled-system";

export const ContainerPrincipalSobreMim = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  font-size: 25px;

  div#Informacoes {
    width: 400px;
    display: flex;
    flex-direction: column;

    p#linha {
      border: 1px solid #b6b5b5 ;
    }

    div#linhas {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;

      div#icones {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0 120px;
      }
    }
  }
`
type FontWeig = FontWeightProps;

export const Informacao = styled.p<FontWeig>`
  ${fontWeight}
`