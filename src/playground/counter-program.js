class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.handleAddOne = this.handleAddOne.bind(this);
      this.handleMinusOne = this.handleMinusOne.bind(this);
      this.handleReset = this.handleReset.bind(this);
      this.state = {
        count: 0
      };
    }

    componentDidMount(){
      const getNumber = localStorage.getItem('number');
      const getnum = parseInt(getNumber,10);

      if(!isNaN(getnum))
      {
        this.setState ( () => ({count:getnum}));
    }
  }


    componentDidUpdate(){
  
      localStorage.setItem('number', this.state.count);
    }

    handleAddOne() {
      this.setState((prevState) => ({count: prevState.count + 1}));
    }
    handleMinusOne() {
      this.setState((prevState) => {
        return {
          count: prevState.count - 1
        };
      });
    }
    handleReset() {
      this.setState(() => {
        return {
          count: 0
        };
      });
    }
    render() {
      return (
        <div>
          <h1>Count: {this.state.count}</h1>
          <button onClick={this.handleAddOne}>+1</button>
          <button onClick={this.handleMinusOne}>-1</button>
          <button onClick={this.handleReset}>reset</button>
        </div>
      );
    }
  }
  
  
  ReactDOM.render(<Counter />, document.getElementById('app'));



/*.....counter program with JSX .........

let count=0;
const addOne = (
    () => {
        count+=1;
        renderCountApp();
    }
);

const subOne = (
    () => {
        count-=1;
        renderCountApp();
    }
);

const reset = (
    () => {
        count = 0;
        renderCountApp();
    
    }
);

const appRoot = document.getElementById("app");

const renderCountApp = () =>{

    const template2 = (
        <div>
            <h1>count = {count}</h1>
            <button onClick ={addOne}> +1 </button>
            <button onClick ={subOne}> -1 </button>
            <button onClick ={reset}> Reset </button>
        </div>
        );
        ReactDOM.render(template2,appRoot);   
    };

renderCountApp();
*/