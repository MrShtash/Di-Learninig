import React from 'react';

// class VoteC extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             languages : [
//                 {name: "Php", votes: 0},
//                 {name: "Python", votes: 0},
//                 {name: "JavaSript", votes: 0},
//                 {name: "Java", votes: 0}
//             ]
//         }
//     }

//     handleClick0 = () => {
//         const newVotes = [...this.state.languages];
//         newVotes[0].votes += 1;
//         this.setState({languages: newVotes});
//     }

//     handleClick1 = () => {
//         const newVotes = [...this.state.languages];
//         newVotes[1].votes += 1;
//         this.setState({languages: newVotes});
//     }

//     handleClick2 = () => {
//         const newVotes = [...this.state.languages];
//         newVotes[2].votes += 1;
//         this.setState({languages: newVotes});
//     }

//     handleClick3 = () => {
//         const newVotes = [...this.state.languages];
//         newVotes[3].votes += 1;
//         this.setState({languages: newVotes});
//     }

//     render(){
//         return (
//             <div>
//                 <h1>Vote Your Language!</h1>
//                 <h2>{this.state.languages[0].name} {this.state.languages[0].votes} <button onClick={this.handleClick0}>Vote PHP</button></h2>
//                 <h2>{this.state.languages[1].name} {this.state.languages[1].votes} <button onClick={this.handleClick1}>Vote Python</button></h2>
//                 <h2>{this.state.languages[2].name} {this.state.languages[2].votes} <button onClick={this.handleClick2}>Vote JavaScript</button></h2>
//                 <h2>{this.state.languages[3].name} {this.state.languages[3].votes} <button onClick={this.handleClick3}>Vote Java</button></h2>
//             </div>
//         )
//     }
// }


// or:
class VoteC extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            languages : [
                {name: "Php", votes: 0},
                {name: "Python", votes: 0},
                {name: "JavaSript", votes: 0},
                {name: "Java", votes: 0}
            ]
        }
    }

    addVote = (index) => {
        this.setState((prevState) => {
        const updatedLanguages = [...prevState.languages];
        updatedLanguages[index] = {
        ...updatedLanguages[index],
        votes: updatedLanguages[index].votes + 1
        };

        return {
        languages: updatedLanguages
        };
    });
    };

    render() {
    return (
        <>
        {this.state.languages.map((language, index) => (
            <div key={index}>
            {language.votes} {language.name} <button onClick={() => this.addVote(index)}>Click here!</button>
            </div>
        ))}
        </>
    );
    }   }

export default VoteC