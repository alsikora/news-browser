import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import {getTopNews} from '../services/news';

interface Article {
    source: { id: string; name: string; };
    author: string;
    title: string;
    url: string;
    urlToImage: string;
    content: string;
    description: string;
    publishedAt: string;
}

const News = () => {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        const search = async () => {
            const {data} = await getTopNews('pl');
            setArticles(data.articles)
        }

        search();
    }, [])

    return (
        <>
            <h1 className="ui header">Top news from Great Britain:</h1>
            <div className="ui three column grid">
                {articles.map(((news, index) => (
                    <div className="column" key={index}>
                        <div className="ui fluid card">
                            <div className="content">
                                <div className="header">{news.title}</div>
                            </div>
                            <div className="image">
                                <img src={news.urlToImage} alt="Article image"/>
                            </div>
                            <div className="content">
                                <div className="description">
                                    {news.description}
                                </div>
                            </div>
                            <div className="extra content">
                                <Link to={{
                                    pathname: `/news/${index}`,
                                    state: {title: news.title, urlToImage: news.urlToImage, content: news.content}
                                }} className="ui right floated">More
                                    <i className="right chevron icon"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                )))}
            </div>
        </>
    )
}

export default News