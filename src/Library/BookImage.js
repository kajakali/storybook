import React from 'react';



export default function BookImage(props) {
 const goToBook = () => {
    console.log('this book is', props.book.id ); 
    props.history.push(`/story/${props.book.id}`);
 }



    return(
        <>
        <h3>{props.book.name.replace(/_/g, " ")}</h3>
        <p>{props.book.id}</p>
        <img onClick={goToBook} src={require(`../images/${props.book.name}.png`)} alt={props.book.name}/>
     
        </>
    )
}