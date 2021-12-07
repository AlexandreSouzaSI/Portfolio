import netflix from "../../assets/netflix.png"
import { CardProjeto, ContainerPrincipalProjetos } from "./styles"

export const Projetos = () => {
    return (
      <ContainerPrincipalProjetos>
        <CardProjeto>
            <img src={netflix} alt="Netflix" />
            <h2>Clone NetFlix</h2>
            <span>Desenvolvido em ReactJs, </span>
            <span>usando a api do site Themoviedb.org</span>
            <a href="https://suspicious-banach-f98450.netlify.app/" target="_blank" rel="noreferrer"><p>Clique aqui para ter acesso</p></a>
        </CardProjeto>
        <CardProjeto>

        </CardProjeto>
        <CardProjeto>

        </CardProjeto>
        <CardProjeto>

        </CardProjeto>
        <CardProjeto>

        </CardProjeto>
        <CardProjeto>

        </CardProjeto>
      </ContainerPrincipalProjetos>
    )
}