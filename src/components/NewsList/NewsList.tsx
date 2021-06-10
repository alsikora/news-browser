import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import {Article} from '../../types';
import './NewsList.scss'

type NewsListProps = {
    articles: Article[];
    backToPath: string;
    loading?: boolean;
}

const NewsList: FC<NewsListProps> = ({articles, backToPath, loading = false}) => {
    return (
        <div className="ui three stackable cards NewsList">
            <div className={`ui ${loading ? 'active ' : ''}inverted dimmer`}>
                <div className="ui text loader">Loading</div>
            </div>
            {articles.map(((news, index) => (
                <div className="card" key={index}>
                    <div className="content">
                        <div className="header">{news.title}</div>
                    </div>
                    <div className="NewsList__img image">
                        {news.urlToImage ?
                            <img src={news.urlToImage} alt=""/> :
                            <i className="image outline icon"/>
                        }
                    </div>
                    <div className="content">
                        <div className="description">
                            {news.description}
                        </div>
                    </div>
                    <div className="extra content">
                        <Link to={{
                            pathname: `/news/${index}`,
                            state: {
                                title: news.title,
                                urlToImage: news.urlToImage,
                                content: news.content,
                                backToPath: backToPath
                            }
                        }} className="ui right floated">More
                            <i className="right chevron icon"/>
                        </Link>
                    </div>
                </div>
            )))}
        </div>
    )
}

export default NewsList