import React from 'react';

export default function Library(props) {



    return(
        <>
        <h3>I'm the library! I hold all the possible stories. They'll be passed down to me as props from App</h3>
        {JSON.stringify(props.library)}
        </>
    )
}