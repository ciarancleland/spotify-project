import React, {useCallback} from 'react';
import TrackList from '../trackList/trackList'
import './playlist.css'
/* Playlist function is goingt to allow the user to change the name of their created playlist.
This will re-render each time the user changes the text in this targeted area. */
const Playlist = (props) => {
    const handleNameChange = useCallback(
        (event) => {
            props.onNameChange(event.target.value);
        }, 
    [props.onNameChange]
    );

/*JSX render will have the playlist title at the top as a default text type box. 
the tracklist will render below as the user clicks on the add icon from the results bar,
if the track is on this list our BOOLEAN FLAG will read True, which will allow the user to 
have access to the remove function from this list. Finally there will be a Save to Spotify button 
available to the user onSave will be developed further down the line*/
    return (
    <div className='Playlist'>
        <input onChange={handleNameChange} defaultValue={'New Playlist'} id='NewPlaylist'/>
        <TrackList 
            tracks={props.playlistTracks}
            isRemoval={true}
            onRemove={props.onRemove}
        />
        <button className="Playlist-save" onClick={props.onSave}>
            SAVE TO SPOTIFY
        </button>
    </div>
    );
};

export default Playlist