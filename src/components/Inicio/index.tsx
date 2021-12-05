import { ContainerConteudoPrincipal, Imagem, Info } from "./styles"
import imagem from '../../assets/fotoAlexandre.png'
import { GrGithub, GrLinkedin, GrMail } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";

export const Inicio = () => {
  return (
    <ContainerConteudoPrincipal>
      <Imagem src={imagem} alt="AlexandreIMG" />
      <Info fontSize="25px" marginBottom="50px" marginTop="50px"> Desenvolvedor Full Stack </Info>
      <Info><div id="link"><GrGithub /></div>  <a href="https://github.com/AlexandreSouzaSI" target="_blank" rel="noreferrer">https://github.com/AlexandreSouzaSI</a> </Info>
      <Info><div id="link"><GrLinkedin /></div> <a href="https://www.linkedin.com/in/alexandre-moura-s/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/alexandre-moura-s/</a> </Info>
      <Info><div id="link"><GrMail /></div> <a href="mailto:alemoura23@hotmail.com" target="_blank" rel="noreferrer">alemoura23@hotmail.com</a> </Info>
      <Info><div id="link"><BsWhatsapp /></div> <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5531975805400" target="_blank" rel="noreferrer">(31)975805400</a></Info>
    </ContainerConteudoPrincipal>
  )  
}