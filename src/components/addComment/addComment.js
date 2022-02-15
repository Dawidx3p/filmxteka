import React, { useState } from 'react';
import './addComment.css';

export default function AddComment(props){
    console.log(props)
    const [comment, setComment] = useState('');
    return(
    <div className="addComment">
        <div className="img inline" style={{backgroundImage: 'url("' + props.user.picture + '")' }}></div>
            <form onSubmit={(event) => {
            event.preventDefault();
            props.addComment({comment: comment, id: props.currentFilm, user: props.user});
            setComment('');
            }}>                  
            <input className="addComment inline" value={comment} type="text" onChange={(event) => {setComment(event.target.value)}}></input>
            <input type="submit"></input>
            </form>
    </div>
    )
}