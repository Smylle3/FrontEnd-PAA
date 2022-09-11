import React from "react";
import "./styles.css";

export default function NewsCard({ newsTitle, newsImage }) {
    return (
        <section className="card_container">
            <img alt="news_image" className="card_image" src={newsImage} />
            <h2>{newsTitle}</h2>
            <button className='news_button'>Ver notícia completa...</button>
        </section>
    );
}
