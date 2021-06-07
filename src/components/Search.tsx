import React from 'react'

const Search = () => {
    return (
        <>
            <h1 className="ui header">Search top news from Great Britain by term:</h1>
            <div className="ui icon input centered card">
                <i className="search icon"></i>
                <input type="text" placeholder="Search term..." />
            </div>
        </>
    )
}

export default Search