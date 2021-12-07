import objetivo from '../../assets/objetivo.png'
import { ContainerObjetivos, ContainerPrincipalObjetivos } from './styles'
import { FcCheckmark } from "react-icons/fc";
import { AiOutlineLoading3Quarters, AiOutlineRocket } from "react-icons/ai";

export const Objetivo = () => {
    return (
      <ContainerPrincipalObjetivos>
        <ContainerObjetivos>
          <img src={ objetivo } alt="Objetivo" />
          <div id="primeiroObjetivo">
          <FcCheckmark /> Formar em Sistemas de informação
          </div>
          <div id="segundoObjetivo">
          <FcCheckmark /> Estudar html, css, javaScript
          </div>
          <div id="terceiroObjetivo">
          <FcCheckmark /> Estudar React, NodeJs, PostgreSQL, API
          </div>
          <div id="quartoObjetivo">
          <AiOutlineLoading3Quarters /> Estudar TypeScript, NestJs, MongoDB
          </div>
          <div id="quintoObjetivo">
          <AiOutlineLoading3Quarters /> Desenvolvendo projetos, pessoais e para terceiros
          </div>
          <div id="sextoObjetivo">
          <AiOutlineRocket /> Ter uma oportunidade como desenvolvedor Junior, Estudar e crescer profissionalmente,
            ajudar a equipe e a empresa nos seus objetivos e me tornar um profissional de referencia na area.
          </div>
        </ContainerObjetivos>
      </ContainerPrincipalObjetivos>
    )
}