import React from 'react';
import {InputGroup, FormControl, Button} from 'react-bootstrap';

class NewTruck extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            truck:{
                name: '',
                style: '',
                rating: 0
            }
        }
    }

    // TODO: implement create API inside this component
    // TODO: redirect back to dashboard after completion

    handleChange = (e) => {
        e.preventDefault();
        
        this.setState({truck: {[e.target.name]: e.target.value}});
        console.log(this.state.truck[e.target.name]);
    }

    render(){
        return (
            <div className="foodtrucks-newtruck">
                <h1>NewTruck</h1>
                <InputGroup>
                    <InputGroup.Prepend><InputGroup.Text>Name</InputGroup.Text></InputGroup.Prepend>
                    <FormControl size='lg' name='name' type="text" placeholder="Input name" value={this.state.truck.name} onChange={this.handleChange}/>
                </InputGroup>
                <InputGroup>
                    <InputGroup.Prepend><InputGroup.Text>Style</InputGroup.Text></InputGroup.Prepend>
                    <FormControl size='lg' name='style' type="text" placeholder="Input style" value={this.state.truck.style} onChange={this.handleChange}/>
                </InputGroup>
                <InputGroup>
                    <InputGroup.Prepend><InputGroup.Text>Rating</InputGroup.Text></InputGroup.Prepend>
                    <FormControl size='lg' name="rating" type="number" value={this.state.truck.rating} onChange={this.handleChange} />
                    <FormControl.Feedback type="invalid"></FormControl.Feedback>
                </InputGroup>
                <Button onClick={this.props.onSubmit}>Create Truck</Button>
            </div>
        )
    }
}

export default NewTruck;