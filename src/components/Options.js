import React from 'react';
import Option from './Option';

const Options = (props) => (
            <div> 
                <div className = "widget-header">
                    <h3 className = "widget-header__title"> Your Options</h3>
                    <button 
                        className="button button--link"
                        onClick={props.handleDeleteOptions}
                    >
                    Remove All
                    </button>
                </div>
            

             {props.optn.length === 0 && <p className = "widget__message"> Please enter some options to get started !</p>}
            
            {
             props.optn.map((optnVariable , index) => 
             <Option 
                key= {optnVariable} 
                OptionText= {optnVariable}
                count = {index + 1}
                handleDeleteOption = {props.handleDeleteOption}
              />)
             }

        </div>
    );

export default Options;