const quote = document.getElementById('newQuoteText');
const author = document.getElementById('newQuoteCategory');
const btn = document.getElementById('newQuote');
const display = document.getElementById('quoteDisplay');

const quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    }
    ];

    function addQuote(){
        const displayQuoteA = document.createElement('p');
        displayQuoteA.innerHTML = `<p>${quotes[0].quote}</p> <p>${quotes[0].author}</p>`;
        display.appendChild(displayQuoteA);

        document.getElementById('newQuoteText').value = " ";
        document.getElementById('newQuoteCategory').value = " ";


// document.getElementById('quoteDisplay').style.display = 'block';

    }
   
    document.addEventListener('click', btn);

