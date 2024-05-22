import React, {useCallback, useState} from 'react';


//Track object created. This will hold all necessary functions required for the playlist generator 
const Track = (props) => {
    /* addTrack property created. Will allow user to add Tracks to their playlist, 
     will re-render each time there is a change in either props.onAdd or props.Track dependencies.*/
     const addTrack = useCallback(
        (event) => {
            props.onAdd(props.track);
        }, 
        [props.onAdd, props.track]
    );
    /* removeTrack function will work the same way as the addTrack function. Each time there is a cahnge to either of the 
    dependencies, the component will re-render*/
    const removeTrack = useCallback(
        (event) => {
            props.onRemove(props.track);
        }, 
        [props.onRemove, props.track]
    ); 
    /* renderAction will allow us to decide wether a song can be added or removed from a playlist. This will be based on the 
    BOOLEAN FLAG [props.isRemoval], depending on wether it is T/F, user will be provided with a '+' or '-' option alongisde the 
    track */
    const renderAction = () => {
        if (props.isRemoval) {
            return (
                <button className="Track-action" onClick={removeTrack}>
                    -
                </button>
            );
        }
        return (
            <button className="Track-action" onClick={addTrack}>
                +
            </button>
        );
    };

    /* JSX HTM rendering code. The different props are being used to display information for each track. 
    While renderAction function will be paired alongside to prove the user with +/- symbols*/

    return (
        <div className='Track'>
            <div className='Track-information'>
                <h3>{props.track.name}</h3>
                <p>
                    {props.track.artist} | {props.track.album}
                </p>
            </div>
            {renderAction()}
        </div>
    );
};

export default Track