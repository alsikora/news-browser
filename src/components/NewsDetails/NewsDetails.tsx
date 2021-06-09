import React from 'react'
import {Link, useLocation} from 'react-router-dom';
import {NewsDetailsState} from '../../types'
import './NewsDetails.scss'

interface LocationState {
    state: NewsDetailsState
}

const NewsDetails = () => {
    const location: LocationState = useLocation()
    const {title, urlToImage, content, backToPath} = location?.state

    return (
        <>
            <h1 className="ui header">{title}</h1>
            {urlToImage ?
                <img className="NewsDetails__img ui fluid image" src={urlToImage} alt="Article promo"/> :
                <div className="NewsDetails__no-img"><i className="image outline icon"/></div>
            }
            <p className="NewsDetails__content">{content}</p>
            <Link to={backToPath || `/news`}>
                <i className="left chevron icon"/>
                Back to list
            </Link>
        </>
    )
}

export default NewsDetails