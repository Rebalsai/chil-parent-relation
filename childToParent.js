import { Component } from "react";

class ParentTOChild extends Component{

    state={

    }

    //getData is a call back function and name,age is parameter
    getData = (Name,Age) => {
       // console.log(Name,Age)
       this.setState({
        Name:Name,
        Age:Age
       })

    }

    render(){
        return(
            <>
            <p>Name: {this.state.Name}</p>
            <p>Age: {this.state.Age}</p>
            {/* onchange is a key--if you use any one  */}
           <Child onChange={this.getData}/>
            </>
        )
    }
}
export default ParentTOChild;


class Child extends Component{

    state={
        Name: "venkat",
       Age: 23
    }

    onSubmit = () => {
        // onchange is use in key above 
      this.props.onChange(this.state.Name,this.state.Age)
    }

    render(){
        return(
            <>
             
            <button onClick={this.onSubmit}>Send Data</button>
            </>
        )
    }
}