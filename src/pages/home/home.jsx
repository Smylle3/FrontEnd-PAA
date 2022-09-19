import React from "react";
import NewsCard from "components/newsCard/newsCard";
import { ContainerGeneral, HeaderNews, HeaderButtons } from "./styles";
import { useNews } from "context";
import defaultNews from "assets/defaultNews.jpg";
import { FcNews } from "react-icons/fc";

export default function Home() {
    const { news } = useNews();

    return (
        <ContainerGeneral>
            <HeaderNews>
                <HeaderButtons
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                >
                    <FcNews />
                    Suas notícias TOP!
                    <FcNews />
                </HeaderButtons>
            </HeaderNews>

            {news.length > 0 ? (
                <>
                    {news.map((content, index) => (
                        <NewsCard
                            key={index}
                            newsTitle={content.title}
                            newsSubtitle={content.subTitle}
                            newsImage={
                                content.image.length > 0
                                    ? content.image
                                    : defaultNews
                            }
                            id={content.id}
                        />
                    ))}
                </>
            ) : (
                <h1>Carregando...</h1>
            )}
        </ContainerGeneral>
    );
}
