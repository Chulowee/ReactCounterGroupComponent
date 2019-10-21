import React from 'react';
import Counter from '../counter/Counter.js'

class GroupCounter extends React.Component{
   constructor(props) {
        super(props);
        this.state = {
            counterCount: this.props.defaultCount,
            inputValue: this.props.defaultCount,
            sum: 0
        };
    }

    handleInputChange = (event) => {
        this.setState({ inputValue: event.target.value })
    }

    generateCounters = () => {
        this.setState({ counterCount: this.state.inputValue })
    }

    onCounterValueChange = (changeNum) => {
        this.setState({ sum: this.state.sum + changeNum })
    }

    renderCounters = () => {
        let { counterCount } = this.state;
        let counters = [];
        for (let count = 0; count < counterCount; count++) {
            counters.push(<Counter
                key={count}
                onCounterValueChange={this.onCounterValueChange}
            />);
        }
        return counters;
    }

    render() {
        let counters = this.renderCounters();
        return (
            <div class="counter-group">
                <div class="regenerate">
                    <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} />
                    <button onClick={this.generateCounters}>Generate Counters</button>
                    <span>Sum: {this.state.sum}</span>
                </div>
                <div>
                    {counters}
                </div>
            </div>
        )
    }
}
export default GroupCounter;