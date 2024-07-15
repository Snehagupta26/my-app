/*  //first component
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

/*
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
/*function Greeting(){
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

*/
/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
function Display(){
    return(
    <section className='booklist'>
        <Book />
        <Book />
        <Book />
        <Book />
    </section>
    );
};

function Book(){
    return(
        <article className='book'>
            <Title />
            <Author />
            <Img />
        </article>
    );
};

const Title = ()=>{
    return <h2>Onyx Storm</h2>;
}
const Author = ()=>{
    return <p> Rebecca Yarros</p>;
}
const Img = ()=>{
     return <img src  = "https://m.media-amazon.com/images/I/9101MLPcFTL._SY466_.jpg" alt = "The image of Onyx Storm"></img>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Display />);
*/

//props
// const author = "Rebecca Yarros";
// const title = "Onyx Storm";
// const img = "https://m.media-amazon.com/images/I/9101MLPcFTL._SY342_.jpg";
// function Display(){
//     return
//     <section className="booklist">
//         <Book />
//         <Book />
//     </section>
// }
// function Book(){
//     return
//     <article className="book">
//         <img src = {img} alt = {title}></img>
//         <h2>{title}</h2>
//         <h4>{author}</h4>
//     </article>
// }

 /*function abc(para1, para2){
    
    return
}*/
// const somefun = (para1 , para2)=>{
//     console.log(para1 , para2);
// }
// somefun('sneha' , 'gupta');

import React from 'react';
import ReactDOM from 'react-dom/client';
/*const Greeting = (props)=>{
          return(
            <h4>Hello {props.name}</h4>
          );
}
const App = ()=>{
       return(
        <>
           <Greeting name = "Achal !" />
           <Greeting name = "Sneha !" />
        </>
       );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
*/

// const title = "Storm Book";
// const author = "Sneha G";
// const img = "https://m.media-amazon.com/images/I/51JEvuZ6mPL._SY445_SX342_.jpg";

// const Book = (props)=>{
//       return (
//       <article>
//         <h1>{title}</h1>
//         <h4>{author}</h4>
//         <img src = {img} alt = "title"></img>
//         <p>{props.job}</p>
//         <p>{props.salary}</p>
//         <p>{props.location}</p>

//       </article>
//       );
// }
// const App = ()=>{
//     return(
//         <section>
//             <Book job = "developer" />
//             <Book salary = "600000"  location = "mumbai" />
//             <Book />
//         </section>
// );
// }


/*const Book = (props)=>{
    
         return(
            <section>
                
                <h1>{props.author}</h1>
                
                <h1>{props.title}</h1>
                <img src = {props.img} alt = {props.title}></img>
                {console.log(props)}
               
            </section>
         );
}
const App = ()=>{
    return(
        <section>
            <Book author = {author} />
            <Book title = {title} img = {img} />
            <Book />
        </section>
);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
*/
/*const firstBook =  {
    title : "Play Along",
    author : " Liz Tomforde",
    image : "https://m.media-amazon.com/images/I/71WHmmsmo+L._SY342_.jpg"
}
const secondBook = {
    title : "The Nightingale",
    author : "Kristin Hannah",
    image : "https://m.media-amazon.com/images/I/81OkWjcf4WL._SY342_.jpg"
}
const Book = (props)=>{
        return (
            <article>
                <h1>{props.title}</h1>
                <h2>{props.author}</h2>
                <img src = {props.image} alt = {props.title}></img>
            </article>
        );
}
const App = ()=>{
      return(
        <section>
            <Book  author = {firstBook.author} title = {firstBook.title} image = {firstBook.image} />
            <Book  author = {secondBook.author} title = {secondBook.title} image = {secondBook.image} />
        </section>
      );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

//destructuring - extract values from objects or arrays into distinct variable
const someObject = {
    name: "sneha",
    job: "sde",
    location: "gurgaon"
};
console.log(someObject.name);
const {job , location} = someObject;
console.log(job);
//so in function u can destructure
const Book = (props)=>{
    const {title , author , image} = props;
    return (
        <article>
            <h1>{title}</h1>
            <h2>{author}</h2>
            <img src = {image} alt = {title}></img>
        </article>
    );
}
//more better way
const Book = ({title , author , image})=>{
    
    return (
        <article>
            <h1>{title}</h1>
            <h2>{author}</h2>
            <img src = {image} alt = {title}></img>
        </article>
    );
} 
*/
// const firstBook =  {
//     title : "Play Along",
//     author : " Liz Tomforde",
//     image : "https://m.media-amazon.com/images/I/71WHmmsmo+L._SY342_.jpg"
// }
// const secondBook = {
//     title : "The Nightingale",
//     author : "Kristin Hannah",
//     image : "https://m.media-amazon.com/images/I/81OkWjcf4WL._SY342_.jpg"
// }
// const Book = ({title , author , image, children})=>{
//     console.log(children);
//         return (
//             <article>
//                 <h1>{title}</h1>
//                 <h2>{author}</h2>
//                 <img src = {image} alt = {title}></img>
//                 {children}
//             </article>
//         );
// }
// const App = ()=>{
//       return(
//         <section>
//             <Book
//             author = {firstBook.author} 
//             title = {firstBook.title} 
//             image = {firstBook.image}
//             >
//                 {/*children begin*/}
//             <p>hi this is sneha</p> 
//             <button>click me</button>  
//                 {/*children end*/}
//             </Book>
//             <Book  
//             author = {secondBook.author} 
//             title = {secondBook.title} 
//             image = {secondBook.image} />
//         </section>
//       );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);


const novels = [
    {
        author : 'sneha',
        title : 'myHome',

    },
    {
        author : 'achal',
        title : "myFlat"
    },
];

const Novel = (props)=>{
    const {author , title} = props;
    return
    <article>
        <h1>{author}</h1>
        <p>{title}</p>
    </article>
}

function novelList(){
    return <section>{novels}</section>
}
console.log("hey");

const names = ['sneha' , 'achal' , 'vidit'];

const newNames = names.map(
    (names) => {
        console.log(names);
      return <h1>{names}</h1>;
}
);
function List(){
    return <section>{newNames}</section>
}


function List1(){
    return(
         <section>
      {novels.map(
            (novel)=>
            {
                console.log(novel);

                return(
                    <div>
                        {novel.author}
                    </div>
                );
            }
      )

    }
    </section>
    );
}