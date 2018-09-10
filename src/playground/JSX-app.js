const app = {
    title:'Indecision App',
    subtitle:'Put your hands on computer',
    optionArr : []
};

const onFormSubmit = (e) => {
     e.preventDefault();
     const option = e.target.elements.optionName.value;

     if(option)
     {
         app.optionArr.push(option);
         e.target.elements.optionName.value='';
         render();
     }
};



const removeAll = () =>
{
    app.optionArr = [];
    render();
};

const makeDecision = () =>
{

    
    const randomNum = Math.floor(Math.random() * app.optionArr.length);
    const option = app.optionArr[randomNum];
    alert("You can Choose : " + option );

};

const appRoot = document.getElementById("app");

const render = () =>
{
    const template = (
        <div>
         <h1>{app.title}</h1>
           <h2> { app.subtitle && <p>{app.subtitle}</p>} </h2>
           { app.optionArr && <p> {app.optionArr} </p>}
           { app.optionArr.length > 0 ? 'Here are your options' : 'No Options' }
          <br></br>   <br></br>    <br></br>
           <button disabled = {app.optionArr.length === 0} onClick= {makeDecision}> What Should I choose ? </button>
           <button onClick = {removeAll} >Remove All</button>   

         <ol> { app.optionArr.map((option) => <li key= {option}> { option }</li> ) }  </ol>

         <form onSubmit = {onFormSubmit} >
             <input type="text" name="optionName"></input>
             <button> Add Option</button>
         </form>
        
        </div>
        );
        ReactDOM.render(template,appRoot);      
};

render();
