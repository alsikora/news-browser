import React, {FC, useContext, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {CountryContext} from '../../contexts/CountryContext';
import {MAX_TOP_NEWS, NEWS_IN_CAROUSEL} from './constants'
import {getTopNewsByCategory} from '../../services/news';
import {Article} from '../../types';
import NewsList from '../NewsList/NewsList';
import './Category.scss'

type CategoryProps = {
    category: string;
}

const Category: FC<CategoryProps> = ({category}) => {
    const country = useContext(CountryContext);
    const [articles, setArticles] = useState<Article[]>([])
    const [startIndex, setStartIndex] = useState<number>(0)

    useEffect(() => {
        setArticles([])
        const search = async () => {
            const {data} = await getTopNewsByCategory(country.countryCode, category, MAX_TOP_NEWS);
            setArticles(data.articles)
        }

        search();
    }, [country, category])

    return (
        <>
            <h3 className="ui header">
                <Link to={`/categories/${category}`} className="Category__title">{category} <i
                    className="external alternate icon"/></Link>
            </h3>
            <div className="Category__carousel">
                <button className="ui icon button primary"
                        disabled={startIndex === 0}
                        onClick={() => setStartIndex(startIndex - 1)}>
                    <i className="angle left icon"/>
                </button>
                <NewsList articles={articles.slice(startIndex, startIndex + NEWS_IN_CAROUSEL)}
                          backToPath='/categories'
                          loading={!articles.length}/>
                <button className="ui icon button primary"
                        disabled={startIndex === (MAX_TOP_NEWS - NEWS_IN_CAROUSEL)}
                        onClick={() => setStartIndex(startIndex + 1)}>
                    <i className="angle right icon"/>
                </button>
            </div>
        </>
    )
}

export default Category