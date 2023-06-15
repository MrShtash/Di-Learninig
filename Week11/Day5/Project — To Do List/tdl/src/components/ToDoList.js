import React from 'react';
import {useState} from 'react';

const ToDoList = props => {
    const [arr, setArr] = useState([]);
    const [toAdd, setToAdd] = useState('')

    const deleteItem = (i) => {
        const updated = [...arr];
        updated.splice(i, 1);
        setArr(updated);
    }

    const add = (e) =>{
        e.preventDefault();
        
        if (toAdd !== '') {
            console.log(toAdd);
            const updated = [...arr];
            updated.push(toAdd);
            setArr(updated)
            console.log(updated);
        }
    }

    return (
        <div>
            <form className='addToList' onSubmit={e=> add(e)}>
                <input type='text' onChange={e=>setToAdd(e.target.value)}/>
                <button type='submit'>add</button>
            </form>

            <div className='list'>
                {
                    arr.map((item, i)=> {
                        return (
                            <p key={i} onClick={e=> deleteItem(i)}>{item}</p>
                        )
                    })
                }
            </div>
        </div>
    )
}




// class ToDoList extends React.Component{
//     constructor(){
//         super();
//     }
//     render(){
//         return(
//             <div>
//                 <h1>Todo's</h1>
//                 <form>

//                 </form>
//             </div>
//         )
//     }
// }

export default ToDoList