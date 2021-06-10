import React, {useState, useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import {getTopNewsByCategory} from '../../services/news'
import {Article} from '../../types'
import {CountryContext} from '../../contexts/CountryContext'
import NewsList from './../NewsList/NewsList';

const CategoryTopNews = () => {
    const {category} = useParams<{ category: string }>();
    const country = useContext(CountryContext);
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        setArticles([])
        const search = async () => {
            const {data} = await getTopNewsByCategory(country.countryCode, category);
            setArticles(data.articles)
        }

        search();
    }, [country, category])

    return (
        <>
            <h1 className="ui header">Top {category} news from {country.name}:</h1>
            <NewsList articles={articles} backToPath={`/categories/${category}`} loading={!articles.length}/>
        </>
    )
}

export default CategoryTopNews