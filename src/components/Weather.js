import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';


class Weather extends React.Component{



    render(){
        return(
            <div className="container text-center" > <br/>

                <div className="container">
                    { this.props.city && this.props.country && <span> Localtion : {this.props.city} , {this.props.country} </span> }
                </div>
                <div className="container">
                    { this.props.temperature && <span> Temperature : {this.props.temperature} </span> }
                </div>
                <div className="container">
                    { this.props.humidity && <span> Humidity : {this.props.humidity} </span> }
                </div>
                <div className="container">
                    { this.props.description && <span> Condition : {this.props.description} </span> }
                </div>
                <div className="container">
                    { this.props.error && <span> ERROR: { this.props.error } </span> }    
                 </div>
            </div>
        )
    }
}

const getBackground = (props) =>{
    if (props.description == "clear sky") {
        
    }
}
export default Weather;