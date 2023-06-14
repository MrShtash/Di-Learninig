import data from '../data.json';
import React from 'react';

class DataEx1 extends React.Component {
    constructor() {
        super()
        this.state = {
            dataJ: data
        }
    }

    render() {
        return (
            <div>
                <h1>Data</h1>
                    {this.state.dataJ.SocialMedias.map((item, i) => (
                        <div key={i}>
                            <p><b>{item}</b></p>
                        </div>
                    ))}
            </div>
        )
    }
}

export default DataEx1