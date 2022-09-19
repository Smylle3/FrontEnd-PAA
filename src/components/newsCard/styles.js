import styled from "styled-components";

export const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1em;

    width: 40%;

    background-color: #fff;
    box-sizing: border-box;
    padding: 1em;
    box-shadow: 3px 3px 20px -10px #000;
    border-radius: 7px;
    transition: .3s all;

    cursor: default;

    @media (max-width: 930px) {
        width: 80%;
    }
    :hover {
        transform: scale(1.1);
    }
`

export const CardImage = styled.img`
    border-radius: 7px;
    width: 100%;
    height: 12em;
    object-fit: cover;
    object-position: center;
    cursor: pointer;
`

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
    cursor: pointer;
`

export const NewsButton = styled.button`
    border: 1px solid transparent;
    border-radius: 5px;
    background-color: var(--main-button-color);

    box-sizing: border-box;
    padding: .5em;

    font-weight: 900;
    font-size: .9em;
    width: 100%;

    cursor: pointer;
    transition: all .5s;

    :hover{
        background-color: transparent;
        border: 1px solid var(--main-button-color);

    }
`