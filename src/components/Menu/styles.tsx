import styled from "styled-components";
import { layout, LayoutProps } from "styled-system";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #332A2A;
  width: 100%;
  height: 100px;
`
export const ContainerPrincipal = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #f1f1f1;
  width: 100%;
  height: 88vh;
`

export const ContainerMenu = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #545766;
  width: 250px;
  height: 100%;
`

type SpanProps = LayoutProps;

export const Texto = styled.span<SpanProps>`
  margin: 0;
  padding: 10px;
  font-size: 25px;
  color: #FFF;
  display: flex;
  flex-direction: row;
  justify-content: start;
  cursor: pointer;
  transform: scale(0.8);
  transition: all 0.8s;
  width: 180px;
  ${layout}

  &:hover {
    color: #f1f1f1;
    transform: scale(1);
  }

  div#icon {
    margin-right: 30px;
  }
`

export const Nome = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: #fff;
`
