import React, {Component} from 'react';


class Result extends Component{

    constructor(props){
        super(props);
        this.state = {
            result : this.props.result
        }
    }

    render(){
        return(
        <div className="result">
          <p>{this.state.result}</p>
        </div>
        );
    }
}

export default Result;