import React from "react";
import data from './../posts.json';

class Postlist extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts: data
            }
        }
    render(){
        return(
            
            <div>
                <h1>Hi This Is A Title</h1>
                {this.state.posts.map(post => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        )
    }
}
export default Postlist