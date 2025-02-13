// Get DOM elements
const form = document.getElementById('quoteForm');
const quoteInput = document.getElementById('newQuoteText');
const authorInput = document.getElementById('newQuoteCategory');
const newQuoteBtn = document.getElementById('newQuote');
const quoteDisplay = document.getElementById('quoteDisplay');
const quoteText = document.querySelector('.quote');
const quoteCategory = document.querySelector('.quoteCategory');

// Initial quotes array with sample data
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

// Function to display all quotes in the DOM
function displayQuotes() {
    // Clear existing quotes
    quoteDisplay.innerHTML = '';
    
    // Create and append new quote elements
    quotes.forEach((quoteObj) => {
        const quoteElement = document.createElement('p');
        quoteElement.textContent = `"${quoteObj.quote}" - ${quoteObj.author}`;
        quoteDisplay.appendChild(quoteElement);
    });
    
    // Show the quotes container
    quoteDisplay.style.display = 'block';
}

// Function to add a new quote to the quotes array
function addQuote() {
    // Create new quote object from form inputs
    const newQuote = {
        quote: quoteInput.value.trim(),
        author: authorInput.value.trim()
    };

    // Validate and add the new quote
    if (newQuote.quote && newQuote.author) {
        quotes.push(newQuote);
        // Clear form inputs
        quoteInput.value = '';
        authorInput.value = '';
        // Update display with new quote
        displayQuotes();
    }
}

// Event Listeners for user interactions
// Display quotes when button is clicked
newQuoteBtn.addEventListener('click', displayQuotes);

// Handle form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();  // Prevent form from submitting
    addQuote();  // Add the new quote
});