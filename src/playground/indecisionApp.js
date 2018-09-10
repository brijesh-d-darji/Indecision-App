class IndecisionApp extends React.Component
{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            arrOption : []
        };
    }

    componentDidMount(){
        
        try{
            const json = localStorage.getItem('options');
            const option= JSON.parse(json);

            if(option){
                this.setState(() => ({ arrOption: option }));
        }    
        }
         catch(e){
            //Do Nothing At All
        }
        
        
        
    }

    componentDidUpdate(preProps,preState){
        if (preState.arrOption.length !== this.state.arrOption.length )
        {
            const json=JSON.stringify(this.state.arrOption);
            localStorage.setItem('options',json);
        }
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    handleDeleteOptions(){
         this.setState(() => ({
            arrOption : []
        }));
    }

    handleDeleteOption(optionToDelete){
        this.setState( (preState) => ({
            arrOption :preState.arrOption.filter( (preState) => {
             return optionToDelete !== preState; }
             )
        }));
    }
    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.arrOption.length);
        const option = this.state.arrOption[randomNum];
        alert(" You Should Choose : " + option );
    }

    handleAddOption(option){
        if(!option){
            return "Please provide valid input";
        }
        else if(this.state.arrOption.indexOf(option) > -1 ) {
            return 'option already exists';
        } 

       this.setState( (preState) => 
       ({ arrOption : preState.arrOption.concat([option])
           })
        ); 
    }

    

    render(){
        // we had defined Deault value of title in later function
        const subtitle='Put your decisions in the hands of a computer';
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions = {(this.state.arrOption.length) > 0}
                    handlePick = { this.handlePick}
                />
                <Options 
                    optn={this.state.arrOption}
                    handleDeleteOptions = {this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        );
    }
}

const Header = (props) => {
    return (
            <div>
            <h1> {props.title}</h1>
            { props.subtitle && <h2> {props.subtitle} </h2> }
            </div>

        );
    
};

Header.defaultProps = {
    title: 'Indecision Application'
};

const Action = (props) => {
    return(
        <div>
            <button 
            onClick = {props.handlePick}
            disabled = {!(props.hasOptions)}
            >
            What should I do?</button>
            
        </div>
    );
};



const Options = (props) => {
        return(

            <div> <br></br>
                 <button onClick={props.handleDeleteOptions}>Remove All</button>
                 {props.optn.length === 0 && <p> Please enter some options to get srated !</p>}
                {
                 props.optn.map((optnVariable) => 
                 <Option 
                    key= {optnVariable} 
                    OptionText= {optnVariable}
                    handleDeleteOption = {props.handleDeleteOption}
                  />)
                 } 
            </div>
        );
    
};


const Option = (props) => {
        return(
            <div> <br></br>
                {props.OptionText} 
                <button onClick = { (e) => {
                    props.handleDeleteOption(props.OptionText);
                 }}
                >
                Remove
                </button>
            </div>
        );
    
};

class AddOption extends React.Component{

    constructor (props){ 
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error:undefined
        };
    }

    handleAddOption(e){
        e.preventDefault();
        const option=e.target.elements.optionName.value.trim();
        const error = this.props.handleAddOption (option);
        this.setState ( () => ({ error }) );

        if (!error){
            e.target.elements.optionName.value = '';
        }
    }
    render(){
        return(
            <div>  <br></br> 
                    { this.state.error && (<p> { this.state.error }</p>) }
                    <form onSubmit={this.handleAddOption}>
                    <input type="text" name="optionName"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
} 

ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));

