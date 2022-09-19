import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import {
    AiFillDislike,
    AiFillLike,
    AiOutlineDislike,
    AiOutlineLike,
} from "react-icons/ai";
import {
    BackButton,
    ContainerNews,
    FeedBackButton,
    NewsContent,
    NewsMainImage,
    NewsMainTitle,
} from "./styles";

export default function NewsPage() {
    const navigate = useNavigate();
    const [like, setLike] = useState(false);

    const likeNews = like ? (
        <AiFillLike size={25} onClick={() => setLike(false)} />
    ) : (
        <AiOutlineLike size={25} onClick={() => setLike(true)} />
    );
    const dislikeNews = !like ? (
        <AiFillDislike size={25} onClick={() => setLike(false)} />
    ) : (
        <AiOutlineDislike size={25} onClick={() => setLike(false)} />
    );

    const newsInfo = {
        mainImage:
            "https://img.r7.com/images/rainha-elizabeth-jubileu-de-platina-02062022090216677?dimensions=771x420&",
        titleNews: "Morre Rainha Elizabeth",
        contentNews:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
    };

    return (
        <ContainerNews>
            <BackButton onClick={() => navigate("/")}>
                <BiArrowBack size={20} />
            </BackButton>
            <NewsMainImage alt="mainIimage" src={newsInfo.mainImage} />
            <FeedBackButton>
                {likeNews}
                {dislikeNews}
            </FeedBackButton>
            <NewsMainTitle>{newsInfo.titleNews}</NewsMainTitle>
            <NewsContent>{newsInfo.contentNews}</NewsContent>
        </ContainerNews>
    );
}
