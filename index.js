


var quoteArray = [
  {author : "--jim Rohn",
    quote : "Beware of what you become in pursuit of what you want."
  },
  {
    author: '--Epictetus', 
    quote: 'It\'s not what happens to you, but how you react to it that matters.'
  },
  {author: '--Steve Jobs', 
    quote: '"The only way to do great work is to love what you do."'
  },
  {author: '--Robert Frost', 
    quote: "In three words I can sum up everything I've learned about life: it goes on."
  },
  {author: '--Ralph Waldo Emerson', 
    quote: "The only person you are destined to become is the person you decide to be."
  },
  {author: '--Confucius', 
    quote:"It does not matter how slowly you go as long as you do not stop."
  },
  {author: '--Frank Sinatra', 
    quote: 'The best revenge is massive success.'
  },
  {author: '--Eleanor Roosevelt', 
    quote: "The future belongs to those who believe in the beauty of their dreams."
  }
];
var theQuote = document.getElementById('quote');
var theAuthor = document.getElementById("author");
function getRandomQuote(){
  
  
  var randomIndex = Math.floor(Math.random() * quoteArray.length);
  theQuote.innerHTML = quoteArray[randomIndex].quote;
  theAuthor.innerHTML = quoteArray[randomIndex].author;

  console.log(quoteArray[randomIndex]);









}







































