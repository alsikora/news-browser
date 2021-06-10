import React, {useContext} from 'react'
import Category from './Category'
import {CountryContext} from '../../contexts/CountryContext';
import {MAX_TOP_NEWS, categories} from './constants'
import './Category.scss'

const Categories = () => {
    const country = useContext(CountryContext);

    return (
        <>
            <h1 className="ui header">Top {MAX_TOP_NEWS} news by categories from {country.name}:</h1>
            <div className="Category__wrapper">
                {categories.map(category => <Category category={category}/>)}
            </div>
        </>
    )
}

export default Categories