import React from "react";
import { CardContainer, CardImage, NewsButton } from "./styles";

export default function NewsCard({ newsTitle, newsImage }) {
    return (
        <CardContainer>
            <CardImage alt="new_image" src={newsImage} />
            <h2>{newsTitle}</h2>
            <NewsButton>Ver notícia completa...</NewsButton>
        </CardContainer>
    );
}
