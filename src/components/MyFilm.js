import React from "react";
export default function MyFilm({film}){
    return(
        <>
            <img alt={`${film.title.title} Poster`} src={film.title.image.url}/>
        </>
    )
}