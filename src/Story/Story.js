//This will be the story component. It will be arrived at by a match param

import React, { Component} from 'react';
import { withRouter } from 'react-router-dom';
import Choice from '../Story/Choice';

class Story extends Component {

state = {
    currentPage: 0,
    pages: [`this is page 1. I live in space. Do you want to visit my --bedroom-- or my --kitchen--?`, "this is page 2. This is my bedroom. Do you want to go to my kitchen, or my dance studio, or my space shuttle?", "this is page 3. It's my kitchen. Head to the dance studio from here", "this is page 4, the dance studio."]
}
 prepareStory = (str) => {
     //if there's a -- in the str, please wrap the thing with the -- in the 
    return str;

}


    render(){
        return(
            <>
                <h3>This is one story. It will comtain lots of possible pages and lots of outsomes controlled by its state
                its match param is:
                {JSON.stringify(this.props.match.params.id)}</h3>
                {JSON.stringify(this.state.pages[this.state.currentPage])}
                {this.state.pages.map(lineItem => (
                    <>
                    <p>prepareStory({lineItem})</p>
                    <p>{lineItem.replace(/--/g, "replacement!!!")}</p>
                    </>))}
          
                    
            </>
        )
    }
}

export default withRouter(Story);