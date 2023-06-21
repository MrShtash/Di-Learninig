import React from 'react';
import './Robo.css';
import {connect} from 'react-redux';
import {searchRobots} from '../redux/actions';

class RoboFriends extends React.Component {
  state = {term: ''};

  onInputChange = (event) => {
    this.setState({term: event.target.value});
    this.props.search(event.target.value);
  };
  
  render() {
    const {list} = this.props;
    const {term} = this.state;
    console.log('term:',term);

    // const filteredRobots = list.filter((robot) => {
    //     console.log(robot.name.toLowerCase().includes(term.toLowerCase()));
    //     return robot.name.toLowerCase().includes(term.toLowerCase());
    //   });

    return (
      <div>
        <h1>ROBOFRIENDS</h1>
        <div className='pa2'>
          <input className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="search robots" onChange={this.onInputChange}/>
        </div>
        <div className='robots' style={{ overflow: 'scroll', border: '5px solid black', height: '800px' }}>
          {
            list.map((robot) => (
              <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5" key={robot.id}>
                <img src={`https://robohash.org/${robot.id}`} alt="Robot" />
                <h2>{robot.name}</h2>
                <p>{robot.email}</p>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        list: state.list,
    };
};
  
  const mapDispatchToProps = (dispatch) => {
    return {
      search: (searchTerm) => dispatch(searchRobots(searchTerm)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(RoboFriends);