import React, { useState } from "react";

// Simple function component
const CompA = (props) => {
  return (
    <>
      <h1>Hi Comp A</h1>
      {/* jsx returned by prop jsxChild have to be
      displayed in that way :
      {<props.jsxChild />} */}
      {props.isDisplayed && <props.jsxChild />}
      <props.propComp />
    <hr></hr>
    </>
  );
};

// Class component with state
class CompC extends React.Component {
  constructor() {
    super();
    this.state = {
      classValue: 15,
    };
  }

  incValue(inc) {
    let newValue = this.state.classValue + inc;
    this.setState({
      classValue: newValue,
    });
  }

  render() {
    // State value destructured
    const { classValue } = this.state;
    // Prop value destructured -- As a component 'propComp' must be upper cased
    const { propValue, propComp: PropComp } = this.props;

    return (
      <>
        <h1>Comp C propValue = {propValue}</h1>
        <h1>Comp C Value : {classValue}</h1>
        <button type="button" onClick={() => this.incValue(+1)}>
          Incrementer
        </button>
        <button type="button" onClick={() => this.incValue(-1)}>
          Decrementer
        </button>
        <hr></hr>
        <PropComp />
      </>
    );
  }
}

const NewComponent = () => {
  return (
    <h1>New component !</h1>
  )
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
      <hr></hr>
      <CompC propValue={value} propComp={NewComponent} />
      <CompA
        isDisplayed={true}
        // props can contain function
        // here it return a jsx child
        jsxChild={() => <p>Hi, Jsx Child...!</p>}
        // Same for components
        propComp = {NewComponent}
      />
    </>
  );
}
