import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Options from './Options';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component
{
    state = { 
        arrOption : [],
        selectedOption : undefined
     };

    handleClearSelectedOption = () =>{
        this.setState( () => ({
            selectedOption : undefined
        }));
    };

    handleDeleteOptions = () =>{
        this.setState(() => ({
           arrOption : []
       }));
   };

   handleDeleteOption = (optionToDelete) => {
       this.setState( (preState) => ({
           arrOption :preState.arrOption.filter( (preState) => {
            return optionToDelete !== preState; }
            )
       }));
   };
   handlePick = () => {
       const randomNum = Math.floor(Math.random() * this.state.arrOption.length);
       const option = this.state.arrOption[randomNum];
       this.setState( () => {

        return {selectedOption : option};
       });
   };

   handleAddOption = (option) =>{
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
   };


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
    
    render(){
        // we had defined Deault value of title in later function
        const subtitle='Put your decisions in the hands of a computer';
        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className= "container">
                     <Action 
                        hasOptions = {(this.state.arrOption.length) > 0}
                        handlePick = { this.handlePick}
                    />
                    <div className="widget">
                        <Options 
                                optn={this.state.arrOption}
                                handleDeleteOptions = {this.handleDeleteOptions}
                                handleDeleteOption = {this.handleDeleteOption}
                        />
                        <AddOption
                                handleAddOption = {this.handleAddOption}
                        />

                    </div>
                    
                    </div>
                        <OptionModal 
                            selectedOption = {this.state.selectedOption}
                            handleClearSelectedOption = {this.handleClearSelectedOption}
                        />
            </div>
        );
    }
}

