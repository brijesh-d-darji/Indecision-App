//...............operator use program...............

const person ={
    name:'Brijesh Darji',
    age:20,
    location:'Dehgam'
   };
   
   function getLocation(location)
   {
       return <p>Location : {location}</p>;
   }
   const template2 = (
   <div>
       <h1> { person.name ? person.name : 'undefined'}</h1>
       <h3> { ( person.age && person.age >=18) && <p>Age : {person.age} </p>}</h3>
       <h3> {getLocation(person.location)}</h3>
    </div>   
   );
   