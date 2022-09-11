import styled from "styled-components";

export const ContainerGeneral = styled.div`
    min-height: 100vh;
    width: 100%;

    background-color: var(--main-background-color);

    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2em;
    box-sizing: border-box;
    padding: 2em 0;
`

export const HeaderNews = styled.header`
    display: flex;
    gap: .5em;
`

export const HeaderButtons = styled.button`
    border: 1px solid transparent;
    font-size: large;
    padding-bottom: .1em;
    cursor: pointer;
    transition: .5s all;

    :hover{
        border-bottom: 1px solid #000;
    }
`