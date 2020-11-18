import React from 'react' 
import ReactDom from 'react-dom';

//JSX RULES
// return single element
// div/section/article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

// function Greeting()
// {
//   return <h4>This is alex and this is my first component</h4>
// }

// const Greeting = () => {
//   return React.createElement('h1', {}, 'Hello world');
// }

function Greeting()
{
  return(
    <div>
      <h3>hello people</h3>
      <ul>
        <li>
          <a href="#">Hello World</a>
        </li>
        <img src="" alt=""/>
        <input type="text"/>
      </ul>
    </div>
  )
}
ReactDom.render(<Greeting/>, document.getElementById('root'));

