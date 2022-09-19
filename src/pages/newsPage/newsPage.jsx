/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BiArrowBack, BiLinkExternal } from "react-icons/bi";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import {
    AncorNews,
    AnimationBox,
    BackButton,
    ContainerNews,
    FeedBackButton,
    ListNews,
    NewsContent,
    NewsMainImage,
    NewsMainTitle,
    NewsSubTitle,
} from "./styles";
import defaultNews from "assets/defaultNews.jpg";
import api from "api/api";

export default function NewsPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [newsInfo, setNewsInfo] = useState([]);
    const [loading, setloading] = useState(false);
    const [liked, setliked] = useState(false);

    console.log(newsInfo[1]);
    useEffect(() => {
        setloading(true);
        api.get(`/articles/${id}`, {})
            .then((res) => {
                setNewsInfo(res.data);
                setloading(false);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [liked]);

    const sendLike = () => {
        api.post(`/articles/${id}`, {})
            .then((res) => {
                setliked(!liked);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const likeNews =
        newsInfo[0]?.like === "1" ? (
            <AiFillLike size={25} onClick={() => sendLike("0")} />
        ) : (
            <AiOutlineLike size={25} onClick={() => sendLike("1")} />
        );

    if (loading)
        return (
            <ContainerNews>
                <AnimationBox>
                    <h2>Carregando notícia...</h2>
                </AnimationBox>
            </ContainerNews>
        );
    else
        return (
            <ContainerNews>
                <BackButton onClick={() => navigate("/")}>
                    <BiArrowBack size={20} />
                </BackButton>
                <NewsMainImage
                    alt={newsInfo?.titulo}
                    src={
                        newsInfo[0]?.image?.length > 0
                            ? newsInfo[0]?.image
                            : defaultNews
                    }
                />
                <FeedBackButton>{likeNews}</FeedBackButton>
                <NewsMainTitle>{newsInfo[0]?.title}</NewsMainTitle>
                <NewsSubTitle>{newsInfo[0]?.subTitle}</NewsSubTitle>
                <NewsContent>{newsInfo[0]?.paragraph}</NewsContent>

                {newsInfo[0]?.like === "1" && (
                    <>
                        <NewsSubTitle>Notícias recomendadas</NewsSubTitle>
                        {newsInfo[1]?.map((content, index) => (
                            <ListNews>
                                <AncorNews href={`/news/${content[1]}`}>
                                    <BiLinkExternal />
                                    {content[2]}
                                </AncorNews>
                                <p>
                                    Grau de semelhança: {content[0].toFixed(2)}%
                                </p>
                            </ListNews>
                        ))}
                    </>
                )}
            </ContainerNews>
        );
}
