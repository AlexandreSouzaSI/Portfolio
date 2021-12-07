import styled from "styled-components";

export const ContainerPrincipalProjetos = styled.div`
  width: 87%;
  height: 88vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`

export const CardProjeto = styled.div`
  width: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
  background-color: #dbdbdb;
  border: 1px solid #7c7878;

  img {
    width: 100%;
    height: 60%;
    background-color: tomato;
  }

  h2 {
    text-align: center;
    margin: 5 auto;
  }

  span {
    text-align: center;
    font-size: 20px;
    font-family: Arial, sans-serif;
  }

  a {
    text-align: center;
  }
`