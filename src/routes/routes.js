import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from 'pages/home/home';
import NewsPage from 'pages/newsPage/newsPage';



export default function RoutesNews() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/news" element={<NewsPage />} />
            </Routes>
        </BrowserRouter>
    );
}