import { Component } from "react";

class Parent extends Component{

    state={
        Name:"venkat",
        Age: 23
    }

    render(){
        return(
            <>
            {/* pass the values */}
           <Child Name={this.state.Name} Age={this.state.Age}/>
            </> 
        )
    }
}
export default Parent;


class Child extends Component{
    render(){
        return(
            <>
            {/* access chesi display cheyali */}

           {/* <p> Name: {this.props.Name}</p>
           <p> Age: {this.props.Age}</p> */}

           <SubChild Name={this.props.Name} Age={this.props.Age}/>
            </>
        )
    }
}

class SubChild extends Component{

    render(){
        return(
            <>
           <p> Name: {this.props.Name}</p>
           <p>Age: {this.props.Age}</p>
            </>
        )
    }
}