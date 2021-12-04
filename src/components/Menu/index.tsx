import { Container, ContainerMenu, ContainerPrincipal, Nome, Texto } from "./styles"
import { FcHome, FcGraduationCap, FcVoicePresentation, FcBullish, FcOpenedFolder, FcBriefcase } from "react-icons/fc";
import { useState } from "react";
import { SobreMim } from "../SobreMim";
import { Formacao } from "../Formacao";
import { Inicio } from "../Inicio";
import { Objetivo } from "../Objetivo";
import { Experiencia } from "../Experiencia";
import { Projetos } from "../Projetos";


export const Menu = () => {

  const [stage, setStage] = useState("");

  const handleHome = () => {
    setStage("Home")
  }

  const handleSobreMim = () => {
    setStage("SobreMim")
  }

  const handleFormacao = () => {
    setStage("Formacao")
  }

  const handleObjetivo = () => {
    setStage("Objetivo")
  }

  const handleExperiencia = () => {
    setStage("Experiencia")
  }

  const handleProjetos = () => {
    setStage("Projetos")
  }

  return (
    <div>
      <Container>
        <Nome>Alexandre Moura de Souza</Nome>
      </Container>
      <ContainerPrincipal>
        <ContainerMenu>
          <Texto onClick={handleHome}><div id="icon"><FcHome /></div>Início</Texto>
          <Texto onClick={handleSobreMim}><div id="icon"><FcVoicePresentation /></div>Sobre Mim</Texto>
          <Texto onClick={handleObjetivo}><div id="icon"><FcBullish /></div>Objetivo</Texto>
          <Texto onClick={handleExperiencia}><div id="icon"><FcBriefcase /></div>Experiência</Texto>
          <Texto onClick={handleFormacao}><div id="icon"><FcGraduationCap /></div>Formação</Texto>
          <Texto onClick={handleProjetos}><div id="icon"><FcOpenedFolder /></div>Projetos</Texto>
        </ContainerMenu>
        {stage === "Home" && (
          <Inicio />
        )}
        {stage === "SobreMim" && (
          <SobreMim />
        )}
        {stage === "Objetivo" && (
          <Objetivo />
        )}
        {stage === "Experiencia" && (
          <Experiencia />
        )}
        {stage === "Formacao" && (
          <Formacao />
        )}
        {stage === "Projetos" && (
          <Projetos />
        )}
        
      </ContainerPrincipal>
    </div>
  )
}