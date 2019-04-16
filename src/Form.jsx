import React from "react";

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            globalTitle:"Titre qui change"
        };
    };

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value});
    };
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({globalTitle :"Mon formulaire - " + this.state.title});
    };


    componentDidMount() {
        console.log("Formulaire rendu");
    }

    componentDidUpdate() {
        console.log("Titre changé");
      }

    render(){
        return(
            
            <div>
            <h1>{this.state.title}</h1>
            <form onSubmit={this.handleSubmit}>
                
                <label htmlFor="title">
                    Title :
                </label>
                <input type="text" id="title" name="title" onChange={this.handleChange}/>                
                <input type="submit" value="Submit"   />
            </form>
            </div>
        )
    }
};

export default Form;