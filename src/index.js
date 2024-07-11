/* //first component
function Greeting(){
    return <h2>My First Component</h2>;
}
//by arrow function
const Greeting = ()=>{
    return <h2>My First Component</h2>;
}

// export default Greeting;//so that rest parts of application can use this component.

import React from 'react';
import ReactDOM from 'react-dom/client';
function Greeting(){
    return <h2>My First Component</h2>;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);


//using React.createElement()
//take 3 arguments - type of element , optional prop and attributes , content of the element
const Greeting = () => {
    React.createElement('h2' , {} ,'hello world');
};
//nested
const Greeting = () => {
    React.createElement('div' , {} ,
        React.createElement('h2' , {} ,'hello world')
    );
   
};
//can also be written as in jsx
const Greeting = () => {
    return (
    <div>
        <h2>hello world</h2>
    </div>
    )
   
};

//jsx rules
//return only 1 parent element. 1 parent element can have multiple child elements
const Greeting = () => {
    return (
    <div>
        <h2>hello world</h2>
        <p>hi sneha</p>
    </div>
    )
   
};

//fragments - allow to grp elements without adding extra <div> or any other element around these elements in DOM <React.Fragment>
const Greeting = () => {
    return (
    <>
        <h2>hello world</h2>
        <p>hi sneha</p>
    </>
    )
   
};
*/
//camelCase like onClick , htmlFor , myFunction
//css - use className instead of class as class is reserved keyword in javascript so JSX uses className to avoid conflict
//close every element <img />
//formatting eg return(
//nest components 
function Greeting(){
    return(
       <div>
        <Person />;
        <Message />
       </div>
    );
}
const Person = () => <h2>sneha</h2>;
const Message = () =>{
    return <p> this is a message</p>;
}
