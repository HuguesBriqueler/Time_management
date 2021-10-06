import React, { useState } from "react";

// Simple function component
const CompA = () => {
  return (
    <>
      <h1>Hi Comp A</h1>
      <CompC />
    </>
  );
};

// Class component with state
class CompC extends React.Component {
  state = {
    classValue: 15,
  };

  incValue(inc) {
    let newValue = this.state.classValue + inc;
    this.setState({
      classValue: newValue,
    });
  }

  render() {
    return (
      <>
        <h1>Comp C</h1>;<h1>Current Value : {this.state.classValue}</h1>
        <button type="button" onClick={() => this.incValue(+1)}>
          Incrementer
        </button>
        <button type="button" onClick={() => this.incValue(-1)}>
          Decrementer
        </button>
      </>
    );
  }
}

export default function Home() {
  const [value, setValue] = useState(0);

  const incValue = (inc) => setValue((value) => value + inc);

  return (
    <>
      <h1>Current Value : {value}</h1>
      <button type="button" onClick={() => incValue(+1)}>
        Incrementer
      </button>
      <button type="button" onClick={() => incValue(-1)}>
        Decrementer
      </button>
      <CompC />
    </>
  );
}
