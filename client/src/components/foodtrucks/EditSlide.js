import React from 'react';
import {Button} from 'react-bootstrap';
import Axios from 'axios';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

class EditSlide extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nameVal = "",
            styleVal = "",
            ratingVal = 0
        };

    }

    render(){
        return (
            <CSSTransition
                timeout={500}
                classNames="editInput"
                unmountOnExit
            >
            
            </CSSTransition>
            
        );
    }
}

export default EditSlide;