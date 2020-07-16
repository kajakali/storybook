import React from 'react';



export default function BookImage(props) {
 const goToBook = () => {
    console.log('this book is', props.book.id ); 
    props.history.push(`/story/${props.book.id}`);
 }


    return(
        <>
        <h3 onClick={goToBook}>I'm the image of one book. Click on me to go to that story</h3>
        <p>{props.book.id}</p>
        <img src={require(`../images/${props.book.name}.png`)} alt={props.book.name}/>
        <p>{props.book.name}</p>
        </>
    )
}