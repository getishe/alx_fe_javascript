       ////////////////////////////  code 1 ///////////////////////////////

       
// // Get DOM elements
// const form = document.getElementById('quoteForm');
// const quoteInput = document.getElementById('newQuoteText');
// const authorInput = document.getElementById('newQuoteCategory');
// const newQuoteBtn = document.getElementById('newQuote');
// const quoteDisplay = document.getElementById('quoteDisplay');
// const quoteText = document.querySelector('.quote');
// const quoteCategory = document.querySelector('.quoteCategory');

// // Initial quotes array with sample data
// const quotes = [
//     {
//         quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
//         author: "Nelson Mandela"
//     },
//     {
//         quote: "The way to get started is to quit talking and begin doing.",
//         author: "Walt Disney"
//     }
// ];

// // Function to display all quotes in the DOM
// function displayQuotes() {
//     // Clear existing quotes
//     quoteDisplay.innerHTML = '';
    
//     // Create and append new quote elements
//     quotes.forEach((quoteObj) => {
//         const quoteElement = document.createElement('p');
//         quoteElement.textContent = `"${quoteObj.quote}" - ${quoteObj.author}`;
//         quoteDisplay.appendChild(quoteElement);
//     });
    
//     // Show the quotes container
//     quoteDisplay.style.display = 'block';
// }

// // Function to add a new quote to the quotes array
// function addQuote() {
//     // Create new quote object from form inputs
//     const newQuote = {
//         quote: quoteInput.value.trim(),
//         author: authorInput.value.trim()
//     };

//     // Validate and add the new quote
//     if (newQuote.quote && newQuote.author) {
//         quotes.push(newQuote);
//         // Clear form inputs
//         quoteInput.value = '';
//         authorInput.value = '';
//         // Update display with new quote
//         displayQuotes();
//     }
// }

// // Event Listeners for user interactions
// // Display quotes when button is clicked
// newQuoteBtn.addEventListener('click', displayQuotes);

// // Handle form submission
// form.addEventListener('submit', (event) => {
//     event.preventDefault();  // Prevent form from submitting
//     addQuote();  // Add the new quote
// });


////////////////////////////  code 2 ///////////////////////////////




// Array to store quotes
// let quotes = [
//     { text: "The best way to predict the future is to create it.", category: "Inspirational" },
//     { text: "Life is what happens when you're busy making other plans.", category: "Life" }
//   ];
  
//   // Function to display a random quote
//   function showRandomQuote() {
//     let randomIndex = Math.floor(Math.random() * quotes.length);
//     let quote = quotes[randomIndex];
//     document.getElementById('quoteDisplay').innerText = `${quote.text} - ${quote.category}`;
//   }
  
//   // Function to add a new quote
//   function addQuote() {
//     let newQuoteText = document.getElementById('newQuoteText').value;
//     let newQuoteCategory = document.getElementById('newQuoteCategory').value;
//     if (newQuoteText && newQuoteCategory) {
//       quotes.push({ text: newQuoteText, category: newQuoteCategory });
//       alert("Quote added successfully!");
//     } else {
//       alert("Please fill in both fields.");
//     }
//   }
  
//   document.getElementById('newQuote').addEventListener('click', showRandomQuote);
  



////////////////////////////  code 3 ///////////////////////////////

// Array to store quotes
let quotes = [
    { text: "The best way to predict the future is to create it.", category: "Inspirational" },
    { text: "Life is what happens when you're busy making other plans.", category: "Life" }
  ];
  
  // Function to display a random quote
  function showRandomQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let quote = quotes[randomIndex];
    document.getElementById('quoteDisplay').innerText = `${quote.text} - ${quote.category}`;
  }
  
  // Function to create the form for adding new quotes
  function createAddQuoteForm() {
    let formContainer = document.getElementById('quoteFormContainer');
    formContainer.innerHTML = `
      <div>
        <input id="newQuoteText" type="text" placeholder="Enter a new quote" />
        <input id="newQuoteCategory" type="text" placeholder="Enter quote category" />
        <button id="addQuoteButton">Add Quote</button>
      </div>
    `;
  
    document.getElementById('addQuoteButton').addEventListener('click', addQuote);
  }
  
  // Function to add a new quote
  function addQuote() {
    let newQuoteText = document.getElementById('newQuoteText').value;
    let newQuoteCategory = document.getElementById('newQuoteCategory').value;
    if (newQuoteText && newQuoteCategory) {
      quotes.push({ text: newQuoteText, category: newQuoteCategory });
      alert("Quote added successfully!");
      document.getElementById('newQuoteText').value = '';
      document.getElementById('newQuoteCategory').value = '';
    } else {
      alert("Please fill in both fields.");
    }
  }
  
  document.getElementById('newQuote').addEventListener('click', showRandomQuote);
  
  // Call createAddQuoteForm to display the form on page load
  createAddQuoteForm();
  