import React from 'react';
import {Button, Container, Col, Row, FormControl, InputGroup} from 'react-bootstrap';
import Axios from 'axios';

class EditTruck extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            truckArr: [],
            truckObj: {}
        }
        this.getTruck(this.props.match.params.id);
        console.log(this.state.truck);
    }


    handleChange = (e) => {
        e.preventDefault();
        // this.setState({truckArr: [...this, truckArr.[e.target.name]]})
        let newObj = this.state.truckObj;
        newObj[e.target.name] = e.target.value;
        this.setState({truckObj: newObj});
        console.log(newObj); 
        
    }


    getTruck(_id){
        Axios.get(`http://localhost:8000/foodtrucks/${_id}`)
          .then(res => {
            // Array method
            
            // let dataArr = [];
            // for (var key in res.data){
            //     dataArr.push(res.data[key]);
            //     console.log(res.data[key]);
            // }
            // this.setState({truck: dataArr})
            // console.log(res.data);
            // console.log(this.state.truckArr);

            // Object Method

            this.setState({truckObj: res.data});

          })
          .catch(err => {
            console.log(err);
            this.setState({truck: {error: err}});
          })
    }

    onEdit = () => {
        Axios.put(`http://localhost:8000/foodtrucks/${this.state.truckObj._id}`, {
            truck: this.state.truckObj
            })
            .then(res => {
                console.log(res);
            })    
            .catch(err => {
                console.log(err);
            })
    }

    render(){
        return(
            <Container>
                <Row>
                    <Col className="edittruck-header"> <img src=".\my-icons-collection\png\001-icecream.png"  /> <h1>Edit this truck: {this.props.nameVal}</h1></Col>
                </Row>
                <Row>
                    <Col>
                    <InputGroup>
                        <InputGroup.Prepend><InputGroup.Text>Name</InputGroup.Text></InputGroup.Prepend>
                        <FormControl size='lg' name='name' type="text" placeholder="Edit name" value={this.state.truckObj.name} onChange={this.handleChange}/>
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Prepend><InputGroup.Text>Style</InputGroup.Text></InputGroup.Prepend>
                        <FormControl size='lg' name='style' type="text" placeholder="Edit style" value={this.state.truckObj.style} onChange={this.handleChange}/>
                    </InputGroup>
                    <InputGroup>
                    <InputGroup.Prepend><InputGroup.Text>Rating</InputGroup.Text></InputGroup.Prepend>
                        <FormControl size='lg' name="avgrating" type="number" value={this.state.truckObj.avgrating} onChange={this.handleChange} />
                        <FormControl.Feedback type="invalid"></FormControl.Feedback>
                    </InputGroup>
                    <Button onClick={this.onEdit}>Edit Truck</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default EditTruck;