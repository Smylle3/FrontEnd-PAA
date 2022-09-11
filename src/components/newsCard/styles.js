import styled from "styled-components";

export const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1em;

    width: 30%;

    background-color: #fff;
    box-sizing: border-box;
    padding: 1em;
    box-shadow: 3px 3px 20px -10px #000;
    border-radius: 7px;
    transition: .3s all;

    cursor: pointer;

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
`

export const NewsButton = styled.button`
    border: 0 none;
    border-radius: 5px;
    background-color: var(--main-button-color);

    box-sizing: border-box;
    padding: .5em;

    font-weight: 900;
    font-size: .9em;

    cursor: pointer;
`