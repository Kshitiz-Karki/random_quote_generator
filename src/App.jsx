import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'
//import { fa-solid fa-quote-left } from '@fortawesome/free-solid-svg-icons'

import './App.scss'
import COLORS from './colorsArray'

function App() {

  const [allQuotes, setAllQuotes] = React.useState('')
  const [accentColor, setAccentColor] = React.useState('')

  const getQuote = () => {
    
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(res => res.json())
      .then(data => {
        const randomNumber = Math.floor(Math.random() * data.quotes.length)
        setAllQuotes(data.quotes[randomNumber])
        setAccentColor(COLORS[randomNumber])
        })
  }
  
  React.useEffect(() => getQuote(), [])

  return (
    <div className='App'>
      <header 
        className='App-header'
        style={{backgroundColor : accentColor}}>
        <div 
        id='quote-box'
        style={{color : accentColor}}>
          <h3 id='text'>
          <i class="fa-solid fa-quote-left"></i>
            {` ${allQuotes.quote}`}
          </h3>
          <h6 id='author'>
            <cite>
              - {allQuotes.author}
            </cite>
          </h6>
          <div className='d-flex justify-content-between'>
            <a 
              className='btn btn-primary btn-sm'
              id='tweet-quote'
              href={encodeURI(`https://www.twitter.com/intent/tweet?text=${allQuotes.quote} - ${allQuotes.author}`)}
              target="_blank"
              style={{backgroundColor : accentColor}}>
                <FontAwesomeIcon icon={faTwitter} /><i>Tweet</i>
            </a>
            <button 
              className='btn btn-primary btn-sm'
              id='new-quote'
              style={{backgroundColor : accentColor}}
              onClick={getQuote}
            >
              New Quote
            </button>
          </div>
        </div>
      </header> 
    </div>
    /*<div className='App'>
      <header 
        className='App-header'
        style={{backgroundColor : accentColor}}>
        <div 
        id='quote-box'
        style={{color : accentColor}}>
          <p id='text'>
            {`"${allQuotes.quote}"`}
          </p>
          <p id='author'>
            - {allQuotes.author}
          </p>
          <div className='button'>
            <a 
              id='tweet-quote'
              href={encodeURI(`https://www.twitter.com/intent/tweet?text=${allQuotes.quote} - ${allQuotes.author}`)}
              target="_blank"
              style={{backgroundColor : accentColor}}>
                <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          <button 
            id='new-quote'
            style={{backgroundColor : accentColor}}
            onClick={getQuote}
          >
            New Quote
          </button>
          
        </div>
      </header> 
    </div>*/  
  )
}

export default App



