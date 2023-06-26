import React, {useEffect, useState} from 'react';

function Scriptum_test() {
    const [message, setMessage] = useState('');
    useEffect(() => {
        fetch(`/api/data`)
        .then(response => {console.log(response)
            return response.json()})
        .then(data => {console.log(data)
            setMessage(data.message)
        })
        .catch(error => console.log(error));
        
    }, [])

    return(
        <div>
            <h1>{message}</h1>
        </div>
    )
}

export default Scriptum_test