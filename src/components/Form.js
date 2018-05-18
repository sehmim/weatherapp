import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

class Form extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.getWeather} className="text-center" >
                City: <br/>
                <input type="text" name="city" ></input><br/><br/>
                Country:<br/>
                <input type="text" name="country" ></input> <br/><br/>
                <button className="btn btn-primary"> Get Weather </button>
            </form>
        )
    }
}

export default Form;