import styled from "styled-components";

export const ContainerNews = styled.div`
    min-height: 100vh;
    width: 100%;

    background-color: var(--main-background-color);

    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2em;
    box-sizing: border-box;
    padding: 0 15em 5em 15em;
    @media (max-width: 930px) {
        padding: 0 0 5em 0;
    }
`

export const NewsMainImage = styled.img`
    width: 100%;
    height: 20em;
    object-fit: cover;
    object-position: center;
`

export const NewsMainTitle = styled.h1`
`

export const NewsContent = styled.p`
    margin: 0;
    padding: 0 5em;
    text-align: justify;
`

export const BackButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5em;
    height: 5em;
    border-radius: 50%;
    border: 0 none;
    outline: 0;
    box-shadow: 3px 3px 15px -3px black;
    position: fixed;
    left: 10%;
    top: 25%;
    transition: all 0.3s;
    cursor: pointer;

    :hover{
        box-shadow: 0px 0px 5px 0px black;
    }
`

export const FeedBackButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
    border: 0 none;
    outline: 0;
    cursor: pointer;

`