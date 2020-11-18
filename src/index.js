import React from 'react' 
import ReactDom from 'react-dom';


function BookList()
{
  return <section> 
          <Book/>
        
     </section>
  
}

const Book = () => {
  return <article>
         <Image/>
         <Title/>
         <Author/>
  </article>
}

const Image = () => <img src="https://images.thenile.io/r1000/9781848690691.jpg" alt=""/>

const Title = () => 
<h1>I Love You To The Moon & Back</h1>
const Author = () => <h4>Amelia Hepworth</h4>
ReactDom.render(<BookList/>, document.getElementById('root'));

