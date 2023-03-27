import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    //picking up the properties from this.props so that it clears the code
    //so anywhere where theres is this.props.someproperty can be replaced by someproperty
    //e.g. this.props.onReset is replaced by onReset
    const { onReset, onIncrement, onDelete, counters } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onDelete={onDelete}
            counter={counter}>
            {" "}
            {/* <h2>Counter #{counter.id}</h2> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;