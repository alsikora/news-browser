import React, {useState, useEffect, useContext} from 'react'
import {Link} from "react-router-dom"
import {getTopNews} from '../services/news'
import {Article} from '../types'
import {CountryContext} from '../contexts/CountryContext'

const News = () => {
    const country = useContext(CountryContext);
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        setArticles([])
        const search = async () => {
            const {data} = await getTopNews(country.countryCode);
            setArticles(data.articles)
        }

        search();
    }, [country])

    return (
        <>
            <h1 className="ui header">Top news from {country.name}:</h1>
            <div className="ui three column grid">
                <div className={`ui ${!articles.length ? 'active ' : ''}inverted dimmer`}>
                    <div className="ui text loader">Loading</div>
                </div>
                {articles.map(((news, index) => (
                    <div className="column" key={index}>
                        <div className="ui fluid card">
                            <div className="content">
                                <div className="header">{news.title}</div>
                            </div>
                            <div className="image">
                                <img src={news.urlToImage} alt="Article promo"/>
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
                                    <i className="right chevron icon"/>
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