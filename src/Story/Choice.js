import React from 'react';
import { withRouter } from 'react-router-dom';

function Choice(props) {



    return(
        <>
            <h3>I'm the choice button. Eventually I'll be a button</h3>
            <h4>{JSON.stringify(props.choice)}</h4>
        </>
    )
}

export default withRouter(Choice);