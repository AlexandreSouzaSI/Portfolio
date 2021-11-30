import { Container, ContainerMenu, ContainerPrincipal, Nome, Texto } from "./styles"
import { FcHome, FcGraduationCap, FcVoicePresentation, FcBullish, FcContacts, FcOpenedFolder, FcBriefcase } from "react-icons/fc";


export const Menu = () => {
  return (
    <div>
      <Container>
        <Nome>Alexandre Moura de Souza</Nome>
      </Container>
      <ContainerPrincipal>
        <ContainerMenu>
          <Texto><div id="icon"><FcHome /></div>Inicio</Texto>
          <Texto><div id="icon"><FcVoicePresentation /></div>Sobre Mim</Texto>
          <Texto><div id="icon"><FcBullish /></div>Objetivo</Texto>
          <Texto><div id="icon"><FcBriefcase /></div>Experiencia</Texto>
          <Texto><div id="icon"><FcGraduationCap /></div>Formação</Texto>
          <Texto><div id="icon"><FcOpenedFolder /></div>Projetos</Texto>
          <Texto><div id="icon"><FcContacts /></div>Contato</Texto>
        </ContainerMenu>
      </ContainerPrincipal>
    </div>
  )
}