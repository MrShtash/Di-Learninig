import React from 'react';
import './Robo.css';
import {connect} from 'react-redux';
import {searchRobots, getUsers, setUsers} from '../redux/actions';

class Robo extends React.Component {
  constructor (props) {
    super(props);
    this.state = {term: ''};
  }

  componentDidMount() {
    this.props.getUsers();
  }

  onInputChange = (event) => {
    this.setState({term: event.target.value});
    this.props.search(event.target.value);
  };
  
  render() {
    const {list, loading} = this.props;
    const {term} = this.state;
    const varName = this.props.filteredList.length == 0 ? this.props.list : this.props.filteredList; 

    if (loading) {
      return <h1>LOADING...</h1>
    }
  
    return (
      <div>
        <h1>ROBO_CHARACTERS</h1>
        <div className='pa2'>
          <input 
            className="pa3 ba b--green bg-lightest-blue" 
            type="search" 
            placeholder="search robots" 
            onChange={this.onInputChange}
          />
        </div>
        <div className='robots' style={{overflow: 'scroll', border: '5px solid black', height: '800px'}}>
          {
            varName.map((robot) => (
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
  console.log('mapStateToProps', state)
  return {
    list: state.list,
    filteredList: state.filteredList,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    search: (searchTerm) => dispatch(searchRobots(searchTerm)),
    getUsers: () => dispatch(getUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Robo);
