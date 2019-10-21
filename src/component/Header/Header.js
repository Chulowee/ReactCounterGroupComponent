import React from 'react';

class Header extends React.Component {
 constructor (props){
      super(props)
      this.state = {number : 0,
                    numberOfCounters: 0,
                    sum: 0
                    };
     }
 render(){
  return (
    <div>
        <input onChange={event => this.setState({number : event.target.value})} />
        <p></p>
        <button onClick={() =>this.setState({numberOfCounters : this.state.number})}>Generate Indicated Counter</button>

    </div>
  );
    }
 }

export default Header;
