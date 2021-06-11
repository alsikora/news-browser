import React, {useState, useEffect, useContext} from 'react'
import NewsList from '../NewsList/NewsList'
import {CountryContext} from '../../contexts/CountryContext';
import {getTopNews} from '../../services/news';
import {Article} from '../../types';
import './Search.scss'

const Search = () => {
    const country = useContext(CountryContext);
    const [term, setTerm] = useState<string>('');
    const [debouncedTerm, setDebouncedTerm] = useState<string>('');
    const [results, setResults] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    /**
     * Optimization of requests to the server.
     * Prevent sending requests while user is typing.
     */
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term)
        }, 500)
        term ? setLoading(true) : setLoading(false)

        return () => {
            clearTimeout(timerId)
        };
    }, [term])

    useEffect(() => {
        const search = async () => {
            const {data} = await getTopNews(country.countryCode, debouncedTerm)
            setLoading(false)
            setResults(data.articles)
        };
        if (debouncedTerm) {
            search()
        }
    }, [debouncedTerm, country.countryCode])

    return (
        <>
            <h1 className="ui header">Search top news from {country.name} by term:</h1>
            <div className="Search__container">
                <div className="Search__input ui icon input">
                    <i className="search icon"/>
                    <input type="text"
                           placeholder="Search term..."
                           value={term}
                           onChange={(e) => setTerm(e.target.value)}/>
                </div>
            </div>
            {!results.length && !loading && term ? <p className="Search__no-result">No results found <i className="frown outline icon"/></p> : null}
            <NewsList articles={results} backToPath='/search' loading={loading}/>
        </>
    )
}

export default Search