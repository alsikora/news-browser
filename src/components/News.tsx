import React, {useState, useEffect, useContext} from 'react'
import {getTopNews} from '../services/news'
import {Article} from '../types'
import {CountryContext} from '../contexts/CountryContext'
import NewsList from './NewsList/NewsList';

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
            <NewsList articles={articles} backToPath='/news' loading={!articles.length}/>
        </>
    )
}

export default News