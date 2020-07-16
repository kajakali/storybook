import React from 'react';
import BookImage from './BookImage';
import { withRouter } from 'react-router-dom';

function Library(props) {



    return(
        <>
        <h3>I'm the library! I hold all the possible stories. They're passed down to me as props from App. 
        Here's my props: {JSON.stringify(props)}</h3>
        {JSON.stringify(props.bookList)}
        {props.bookList.map(book => <BookImage key={book.id} history={props.history} book={book}/>)}
        </>
    )
}

export default withRouter(Library);