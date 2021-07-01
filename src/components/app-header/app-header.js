import React from 'react';

import './app-header.css'

const AppHeader = ({liked, allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>English Dictionary</h1>
            <h2>{allPosts} words, already studied {liked}</h2>
        </div>
    )
}

export default AppHeader;
