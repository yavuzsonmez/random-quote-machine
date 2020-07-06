import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) 
  {
    super(props);
    this.state = 
     {
        quote: "",
        author: ""
      };
   }


  componentDidMount() {
let random = [Math.floor(Math.random() * (5420 - 0 + 1)) + 0];
    fetch("https://raw.githubusercontent.com/JamesFT/Database-Quotes-JSON/master/quotes.json")
      .then(res => res.json())
      .then( (result) => {
 this.setState({
    quote: result[random].quoteText,
   author: result[random].quoteAuthor
          });
        },
        (error) => {
          this.setState({
            quote: "error",
            author: "error"
          });
        }
      )
  }
    
  
  render() {
    return (
    <div id="quote-box">
        <h2 id="text">" {this.state.quote} "</h2>
        <p id="author">{this.state.author}</p>
               <div class="text-center"> <button type="button" class="btn btn-primary" id="new-quote" onClick={this.componentDidMount.bind(this)}>New Quote</button>
     <button type="button" class="btn btn-primary">   <a id="tweet-quote" href="twitter.com/intent/tweet">Tweet</a></button>
                 </div>
                 <p id="por"><a id="portofolio" href="https://yavuzsonmez.com/portofolio">Return to Portofolio</a></p>
     </div>
    );
  }
  }

ReactDOM.render(
  <App />,
  document.getElementById('root')
);