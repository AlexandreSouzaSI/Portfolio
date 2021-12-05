import { GrGamepad, GrContactInfo, GrBook } from "react-icons/gr";
import { ContainerPrincipalSobreMim, Informacao } from "./styles";
import { SiJavascript, SiTypescript, SiNodedotjs, SiReact, SiVuedotjs, SiJava } from "react-icons/si";
import { MdHistoryEdu } from "react-icons/md";

export const SobreMim = () => {
    return (
      <ContainerPrincipalSobreMim>
        <div id="Informacoes">
          <Informacao fontWeight="bold"><div><GrContactInfo fontSize="50px"/></div>Informações Pessoais</Informacao>
          <Informacao>Idade: 33 anos</Informacao>
          <Informacao>Endereço: Contagem - MG</Informacao>
          <Informacao>Estado Civil: Solteiro</Informacao>
          <Informacao>Formado em Sistemas de Informação</Informacao>
          <p id="linha"></p>
          <Informacao fontWeight="bold"><div><GrGamepad fontSize="50px"/></div>Hobby</Informacao>
          <Informacao>Jogos Digitais</Informacao>
          <Informacao>Futebol</Informacao>
        </div>
        <div id="Informacoes">
          <Informacao fontWeight="bold"><div><MdHistoryEdu fontSize="50px"/></div>Um Pouco sobre mim</Informacao>
          <Informacao>Moro com minha noiva e com nosso filho de 1 ano e 3 meses. Sou uma pessoa caseira, divertida, brincalhona, honesta e justa.
            Gosto de fazer a diferença, e agregar sempre.</Informacao>
          <Informacao>Gosto de Ambientes colaborativos, e agradáveis. Acredito que o crescimento coletivo, mesmo que demore mais, seja mais rentável que o individual.</Informacao>
          <Informacao>Respeito acima de tudo, tento fazer o melhor pra que todos se sintam bem.</Informacao>
        </div>      
        <div id="Informacoes">
          <Informacao fontWeight="bold"><div><GrBook fontSize="50px"/></div>Conhecimentos</Informacao>
          <div id="linhas">
            <div id="icones"><SiJavascript /><Informacao>JavaScript</Informacao></div>
            <div id="icones"><SiTypescript /><Informacao>TypeScript</Informacao></div>
            <div id="icones"><SiNodedotjs /><Informacao>NodeJs</Informacao></div>
            <div id="icones"><SiReact /><Informacao>React</Informacao></div>
            <div id="icones"><SiVuedotjs /><Informacao>VueJs</Informacao></div>
            <div id="icones"><SiJava /><Informacao>Java</Informacao></div>
          </div>
        </div>
      </ContainerPrincipalSobreMim>
    )
}