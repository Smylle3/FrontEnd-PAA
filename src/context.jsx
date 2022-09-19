/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect, createContext } from "react";
import api from "api/api";

const NewsContext = createContext({});

export const useNews = () => useContext(NewsContext);

export const NewsProvider = ({ children }) => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = () => {
        api.get("/articles", {})
            .then((res) => {
                setNews(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const value = {
        news
    };

    return (
        <NewsContext.Provider value={value}>{children}</NewsContext.Provider>
    );
};
