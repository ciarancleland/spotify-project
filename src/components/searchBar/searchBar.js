import React, {useCallback, useState} from 'react';



function SearchBar(props) {

    const [term, setTerm] = useState('')

    //handleTermChange - used to input text into the empty useState string, to be used alongside search once finalized
    const handleTermChange = useCallback((event) => { 
        setTerm(event.target.value);
    }, [])

    //search - will be used to access previously input property in hTC event.
    //useCallback - is a hook which will stop unnecessary re-renderings of the page, unless one of the dependancies has been altered the page will not request a re-render
    const search = useCallback(() => {
        props.onSearch(term);
    }, [props.onSearch, term]);
    
    return (
        <div id='SearchBar'>
            <input placeholder='Search Here' onChange={handleTermChange}/>
            <button className = 'SearchButton' onClick={search}>
                Search Song
            </button>

        </div>
    )
}

export default SearchBar