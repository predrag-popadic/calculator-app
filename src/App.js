import React from 'react';
import './App.css';
import Button from './components/button';
import Display from './components/display';
import './style/layout.scss'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputs : [
        { "7" : "number" } ,
        { "8" : "number" } ,
        { "9" : "number" } ,
        { "x" : "operator" } ,
        { "4" : "number" } ,
        { "5" : "number" } ,
        { "6" : "number" } ,
        { "-" : "operator" } ,
        { "1" : "number" } ,
        { "2" : "number" } ,
        { "3" : "number" } ,
        { "+" : "operator" } ,
        { "0" : "number" } ,
        { "." : "number" } ,
        { "=" : "equals" } ,
        { "/" : "operator" }],

      equation: ''
    }

  }

  renderButtonComponents() {
    let elements = [];
    this.state.inputs.forEach((value) => {
      const key = Object.keys(value)[0];
      elements.push(<Button  classes={value[key]} handleClick={(e)=> (
        value[key] == 'equals' ? this.calculate(e) : this.addToEquation(e)

      )} text={key}/>)
    });
    return elements;

}

  addToEquation(e) {

    let value = e.target.innerText;
    let operators = ['+', '-', '/', 'x'];
    let equation = this.state.equation;
    if (e.target.classList.contains('operator') && operators.includes(equation[equation.length - 1])) {
      equation = equation.substring(0, equation.length - 1);
      equation += value;
      this.setState({equation: equation});
    }
    else {
      equation = this.state.equation + value;
      this.setState({equation: equation});
    }

  }

  calculate(e){
    let equation = this.state.equation;
    equation = equation.replace('x', '*');
    console.log(equation);
    let result = eval(equation);
    this.setState({equation: result});
  }

  render () {


    return (
        <div className={"wrapper"}>
          <div className={"calculator"}>
            <Display equation={this.state.equation ? this.state.equation : '0'}/>
          {
            this.renderButtonComponents()
          }
          <Button classes="clear" handleClick={() => {this.setState({equation: ''})}} text='Clear'/>
          </div>

        </div>


    )





  }

}