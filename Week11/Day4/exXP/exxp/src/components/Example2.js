import data from '../data.json';
import React from 'react';

class DataEx2 extends React.Component {
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
                    {this.state.dataJ.Skills.map((item, i) => (
                        <div key={i}>
                            <p><b>{item.Area}</b></p>
                            {item.SkillSet.map((skill, j) => (
                                skill.Hot && <p key={j}>{skill.Name}</p>
                            ))}
                        </div>
                    ))}
            </div>
        )
    }
}

export default DataEx2