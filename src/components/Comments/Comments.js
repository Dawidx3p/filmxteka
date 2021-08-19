function Comments(props) {
    if(props.comments){
        return(
            props.comments.map(comment => {
                return <p>{comment}</p>
            })
        );
    }else{
        return(
            <div></div>
        )
    }
    
}
export default Comments;