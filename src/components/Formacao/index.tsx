import { ContainerPrincipalFormacao, InformacoesFormado } from "./styles"

export const Formacao = () => {
    return (
      <ContainerPrincipalFormacao>
        <div>
          <InformacoesFormado>Curso Superior Completo</InformacoesFormado>
          <InformacoesFormado>Título: Bacharel em Sistemas de Informação</InformacoesFormado>
          <InformacoesFormado>Período: Janeiro de 2015 a Dezembro de 2018 </InformacoesFormado>
          <InformacoesFormado>Instituição: Centro Universitário Una</InformacoesFormado>
        </div>
      </ContainerPrincipalFormacao>
    )
}