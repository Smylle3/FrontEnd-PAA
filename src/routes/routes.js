import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from 'pages/home/home';
import NewsPage from 'pages/newsPage/newsPage';
import Footer from 'components/footer/footer';



export default function RoutesNews() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/news/:id" element={<NewsPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}