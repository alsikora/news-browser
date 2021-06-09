import React from 'react'
import {Link, useLocation} from 'react-router-dom';
import {NewsDetailsState} from '../types'

interface LocationState {
    state: NewsDetailsState
}

const NewsDetails = () => {
    const location: LocationState = useLocation()
    const {title, urlToImage, content} = location.state

    return (
        <>
            <h1 className="ui header">{title}</h1>
            <img className="ui fluid image" src={urlToImage} alt="Article promo"/>
            <p>{content}</p>
            <Link to={`/news`}>
                <i className="left chevron icon"/>
                Back to list
            </Link>
        </>
    )
}

export default NewsDetails