#如何优雅地在React中处理事件响应
1. 
  `render() {
    return (
      <button onClick={()=>{console.log('button clicked');}}>
        Click
      </button>
    );
  }`
2. 
`class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {number: 0};
  }

  handleClick() {
    this.setState({
      number: ++this.state.number
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.number}</div>
        <button onClick={()=>{this.handleClick();}}>
          Click
        </button>
      </div>
    );
  }
}`

3. 
`class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {number: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      number: ++this.state.number
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.number}</div>
        <button onClick={this.handleClick}>
          Click
        </button>
      </div>
    );
  }
}`