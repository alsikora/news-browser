import React from 'react'
import {Link, useLocation} from "react-router-dom";

interface LocationState {
    state: {
        title: string;
        urlToImage: string;
        content: string;
    }
}

const NewsDetails = () => {
    const location: LocationState = useLocation()
    const {title, urlToImage, content} = location.state

    return (
        <>
            <h1 className="ui header">{title}</h1>
            <img className="ui fluid image" src={urlToImage} alt="Article image"/>
            <p>{content}</p>
            <Link to={`/news`}>
                <i className="left chevron icon"></i>
                Back to list
            </Link>
        </>
    )
}

export default NewsDetails