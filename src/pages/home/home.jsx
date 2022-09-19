/* eslint-disable array-callback-return */
import React, { useState } from "react";
import NewsCard from "components/newsCard/newsCard";
import {
    ContainerGeneral,
    HeaderNews,
    HeaderButtons,
    SearchInput,
} from "./styles";
import { useNews } from "context";
import defaultNews from "assets/defaultNews.jpg";
import { FcNews } from "react-icons/fc";

export default function Home() {
    const { news } = useNews();
    const [search, setSearch] = useState("");

    return (
        <ContainerGeneral>
            <HeaderNews>
                <HeaderButtons
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <FcNews />
                        Suas notícias do BALACOBACO!
                        <FcNews />
                    </div>
                    <SearchInput
                        type="search"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                        placeholder="Pesquisar uma notícia..."
                    />
                </HeaderButtons>
            </HeaderNews>

            {news.length > 0 ? (
                <>
                    {news
                        .filter((value) => {
                            if (search === "") {
                                return value;
                            } else if (
                                value.title
                                    .toLocaleLowerCase()
                                    .includes(search.toLocaleLowerCase())
                            ) {
                                return value;
                            }
                        })
                        .map((content, index) => (
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
