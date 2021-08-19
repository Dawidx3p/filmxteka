import './popUp.css';
import Comments from '../Comments/Comments';
function PopUp(props) {
    let genres = '';
    if(props.clicked){
        for(let genre in props.currentFilm.genres){
            if(genre==0){
                genres = genres + props.currentFilm.genres[genre];
            }else{
                genres = genres + ', ' + props.currentFilm.genres[genre];
            }
        }
        if(props.currentFilm.plotOutline){
            return(
                <div className="vid" >
                    <div className="popup">
                        <img src={props.currentFilm.title.image.url}/>
                        <div>
                            <h1>{props.currentFilm.title.title}</h1>
                            <h4>Rok: {props.currentFilm.title.year}</h4>
                            <p>{genres}</p>
                            <p>{props.currentFilm.plotOutline.text}</p>
                            <Comments comments={props.comments[props.currentFilm.title.id]}/>
                            <button onClick={() => props.toggleClick()}>exit</button>
                        </div>
                        
                    </div>
                </div>
            );
        }else{
            return(
                <div className="vid" >
                    <div className="popup">
                        <img src={props.currentFilm.title.image.url}/>
                        <div>
                            <h1>{props.currentFilm.title.title}</h1>
                            <h4>Rok: {props.currentFilm.title.year}</h4>
                            <p>{genres}</p>
                            <button onClick={() => props.toggleClick()}>exit</button>
                        </div>
                        
                    </div>
                </div>
            );
        }
        
    }else{
        return(
            <div></div>
        )
    }
    
}

export default PopUp;