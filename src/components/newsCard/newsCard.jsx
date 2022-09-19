import React from "react";
import { useNavigate } from "react-router-dom";
import {
    ButtonsContainer,
    CardContainer,
    CardImage,
    NewsButton,
} from "./styles";

export default function NewsCard({ newsTitle, newsSubtitle, newsImage, id }) {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/news/${id}`);
    };

    return (
        <CardContainer>
            <CardImage
                onClick={handleNavigate}
                alt={newsTitle}
                src={newsImage}
                loading="lazy"
            />
            <h2 onClick={handleNavigate}>{newsTitle}</h2>
            <p onClick={handleNavigate}>{newsSubtitle}</p>
            <ButtonsContainer>
                <NewsButton onClick={handleNavigate}>
                    Ver notícia completa...
                </NewsButton>
            </ButtonsContainer>
        </CardContainer>
    );
}
