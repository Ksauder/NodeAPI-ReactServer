import React from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';

class Truck extends React.Component{
    constructor(props){
        super(props);
    }

    axiosPing = () => {
        Axios.get('http://localhost:8000/foodtrucks')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (err){
                console.log(err);
            })
    }

    render(){
        return(
            
            <div className="foodtrucks-truck">
                <img src=".\my-icons-collection\png\001-icecream.png"  />
                <div className="foodtrucks-truck-textbox">
                    <h2>{this.props.name}</h2>
                    <h5>Style: {this.props.style}</h5>
                    <h5>Average Rating: {this.props.avgrating}</h5>
                </div>
                <div className="foodtrucks-truck-buttons">
                    <Link className="btn bg-danger mr-4" to={`/edit/${this.props._id}`}>Edit</Link>
                    <Link className="btn bg-success">Review</Link>
                </div> 
            </div>
               
            
        );
    }
}

export default Truck;

