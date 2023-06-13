import React from 'react';

class MyForm extends React.Component {
    constructor(props){
        console.log('props:', props);
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            age: '',
            Gen: '',
            Dest: '',
            Diet: '',
            };
        }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {firstname, lastname, age, Gen, Dest, Diet} = this.state;
    };
    
    handleGen = (e) => {
        this.setState({Gen: e.target.value});
    };

    handleDest = (e) => {
        this.setState({Dest: e.target.value});
    };

    handleDiet = (e) => {
        this.setState({Diet: e.target.value});
    };

    render(){
        const {firstname, lastname, age, Gen, Dest, Diet} = this.state;

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Form</h2>
                        <input type="text" name="firstname" placeholder="First Name" value={firstname} onChange={this.handleChange}/><br/>
                        <input type="text" name="lastname" placeholder="Last Name" value={lastname} onChange={this.handleChange}/><br/>
                        <input type="text" name="age" placeholder="Age" value={age} onChange={this.handleChange}/><br/><br/>

                        <input type="radio" name="male" value="male" id="male" onChange={this.handleGen} checked={Gen === 'male'}/>
                        <label htmlFor="male">Male</label><br/>
                        <input type="radio" name="female" value="female" id="female" onChange={this.handleGen} checked={Gen === 'female'}/>
                        <label htmlFor="male">Female</label><br/><br/>

                    <label htmlFor="destination">Select your Destination</label><br/>

                        <select name="destination" id="destination" value={Dest} onChange={this.handleDest}>
                            <option value="">--Please choose a destination--</option>
                            <option value="israel">Israel</option>
                            <option value="brazil">Brazil</option>
                            <option value="england">England</option>
                        </select><br/><br/>

                    <label htmlFor="destination">Dietary restrictions</label><br/>
                        <input type="checkbox" name="restrictions" value="NutsFree" id="nuts" onChange={this.handleDiet} checked={Diet === 'NutsFree'}/>
                        <label htmlFor="nuts">Nuts free</label><br/>

                        <input type="checkbox" name="restrictions" value="LactoseFree" id="lactose" onChange={this.handleDiet} checked={Diet === 'LactoseFree'}/>
                        <label htmlFor="lactose">Lactose free</label><br/>

                        <input type="checkbox" name="restrictions" value="Vegan" id="vegan" onChange={this.handleDiet} checked={Diet === 'Vegan'}/>
                        <label htmlFor="vegan">Vegan</label><br/><br/>

                        <input type="submit" value="Submit"></input><br/><br/>
                </form>
                <div id="enteredInfo">
                    <h2>Entered information</h2>
                    <p>Your name: {firstname}</p>
                    <p>Your age: {age}</p>
                    <p>Your gender: {Gen}</p>
                    <p>Your destination: {Dest}</p>
                    <p>Your dietary restrictions: {Diet}</p>
                </div>
            </div>
        )
    }
}

export default MyForm