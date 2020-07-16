//This will be the story component. It will be arrived at by a match param

import React, { Component} from 'react';
import { withRouter } from 'react-router-dom';

class Story extends Component {
    render(){
        return(
            <>
                <h3>This is one story. It will comtain lots of possible pages and lots of outsomes controlled by its state
                {JSON.stringify(this.props)}</h3>
            </>
        )
    }
}

export default withRouter(Story);