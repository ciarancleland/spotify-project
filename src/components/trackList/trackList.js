import React from 'react';
import Track from '../track/track'


/*Tracklist variable map out the properties of all tracks, and return each track item with the 
the following properties*/
const TrackList = (props) => {
    return (
        <div className="TrackList">
            {props.tracks.map((track) => {
                return (
                    <Track
                    track={track}
                    key={track.id}
                    onAdd={props.onAdd}
                    isRemoval={props.isRemoval}
                    onRemove={props.onRemove}
                    />

                )
            })}
        </div>
    );
};

export default TrackList