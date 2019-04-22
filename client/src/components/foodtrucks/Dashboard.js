import React from 'react';
import Axios from 'axios';

import {Button, Container, Col, Row} from 'react-bootstrap';
import Truck from './Truck';

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            trucks: []
        }
        this.loadTrucks();
    }

    componentDidMount = () => {
        Axios.get("http://localhost:8000/foodtrucks")
          .then(res => {
            let truckArr = [];
            let data = res.data;
            for (var key in data){
              truckArr.push(data[key]);
            }
            this.setState({trucks: truckArr});
          })
          .catch(err => {
            console.log(err);
          })
      }

    loadTrucks(){
        Axios.get("http://localhost:8000/foodtrucks")
          .then(res => {
            let truckArr = [];
            let data = res.data;
            for (var key in data){
              truckArr.push(data[key]);
            }
            console.log(truckArr);
            return truckArr;
          })
          .catch(err => {
            console.log(err);
            return err;
          })
    }

    render(){
        return(
            <div className="foodtrucks-dashboard">
                <h1>Dashboard</h1>
                
                {this.state.trucks.map((truck) => {
                    return <Truck name={truck.name} style={truck.style} avgrating={truck.avgrating} _id={truck._id}/>;
                })}
            </div>
            
        )
    }
}

export default Dashboard;