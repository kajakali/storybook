//This will be the story component. It will be arrived at by a match param

import React, { Component} from 'react';
import { withRouter } from 'react-router-dom';
import Choice from '../Story/Choice';

class Story extends Component {

state = {
    currentPage: 0,
    story: {pages: ["This is the welcome page. From here you can go to my 1", "This is page 1. We are in my bedroom. You can go to my 2 or 3", "This is page 2. It's my kitchen. From here you can go to my 1 or my 3", "this is page 3. It's my living room. From here you can go to my 1 or my 2", ], 
            actions: ["welcome", "bedroom", "kitchen", "living_room"]}
}
 prepareStory = (str) => {
     for( let i = 0; i<this.state.story.actions; i++){
         console.log("this story action", this.state.story.actions, i)
     };
     return <li>{str} this story action nothing</li>;

}


    render(){
        return(
            <>
                <h3>This is one story. It will comtain lots of possible pages and lots of outsomes controlled by its state
                its match param is:
                {JSON.stringify(this.props.match.params.id)}</h3>
                {JSON.stringify(this.state.story.pages[this.state.currentPage])}
   
                <h3> hard coded story in one place follows</h3>
                <h1>Welcome</h1>
                    <p>This is the welcome page. From here you can go to the <button onClick={() => this.setState({currentPage:1})}>Bedroom</button> page</p>
                <h1>Bedroom</h1>
                    <p>This is the bedroom page. From here you can go to the <button onClick={() => this.setState({currentPage:2})}>Kitchen</button> or <button onClick={() => this.setState({currentPage:3})}>Living Room</button> page</p>
                <h1>Kitchen</h1>
                    <p>This is the kitchen page. From here you can go to the <button onClick={() => this.setState({currentPage:1})}>Bedroom</button> or <button onClick={() => this.setState({currentPage:3})}>Living Room</button> page</p>
                <h1>Living Room</h1>
                    <p>This is the living room page. From here you can go to the <button onClick={() => this.setState({currentPage:2})}>Kitchen</button> or <button onClick={() => this.setState({currentPage:1})}>Bedroom</button> page</p>
          
                    
            </>
        )
    }
}

export default withRouter(Story);