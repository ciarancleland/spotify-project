import React from 'react';
import Tracklist from '../trackList/trackList'

/*Search Results component will present all sounds found, they will be created within a Tracklist element, 
with an + function avaiable for user to add to a new playlist*/
const SearchResults = (props) => {
    return (
    <div className='SearchResults'>
        <h2>Results</h2>
        <Tracklist tracks={props.searchResults} onAdd={props.onAdd}/>   
    </div>
    );
};

export default SearchResults