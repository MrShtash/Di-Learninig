import data from '../data.json';
import React from 'react';

class DataEx3 extends React.Component {
    constructor() {
        super()
        this.state = {
            dataJ: data,

        }
    }

    render() {
        return (
            <div>
                <h1>Data</h1>
                    {this.state.dataJ.Experiences.map((item, i) => (
                        <div key={i}>
                            <p><b>{item.companyName}</b></p>
                            {/* <p><b>{item.logo}</b></p> */}
                            <img src={item.logo}></img>
                            <p><b>{item.url}</b></p>
                            {item.roles.map((item2, j) => (
                                <div key={j}>
                                    <p key={j}>{item2.title}</p>
                                    <p key={j}>{item2.description}</p>
                                    <p key={j}>{item2.startDate}</p>
                                    <p key={j}>{item2.endDate}</p>
                                    <p key={j}>{item2.location}</p>
                                </div>
                            ))}
                        </div>
                    ))}
            </div>
        )
    }
}

export default DataEx3