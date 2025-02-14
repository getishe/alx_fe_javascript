//        ////////////////////////////  code 1 ///////////////////////////////

       
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




// //Array to store quotes
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

   //Array to store quotes
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
  
//   // Function to create the form for adding new quotes
//   function createAddQuoteForm() {
//     let formContainer = document.getElementById('quoteFormContainer');
//     formContainer.innerHTML = `
//       <div>
//         <input id="newQuoteText" type="text" placeholder="Enter a new quote" />
//         <input id="newQuoteCategory" type="text" placeholder="Enter quote category" />
//         <button id="addQuoteButton">Add Quote</button>
//       </div>
//     `;
  
//     document.getElementById('addQuoteButton').addEventListener('click', addQuote);
//   }
  
//   // Function to add a new quote
//   function addQuote() {
//     let newQuoteText = document.getElementById('newQuoteText').value;
//     let newQuoteCategory = document.getElementById('newQuoteCategory').value;
//     if (newQuoteText && newQuoteCategory) {
//       quotes.push({ text: newQuoteText, category: newQuoteCategory });
//       alert("Quote added successfully!");
//       document.getElementById('newQuoteText').value = '';
//       document.getElementById('newQuoteCategory').value = '';
//     } else {
//       alert("Please fill in both fields.");
//     }
//   }
  
//   document.getElementById('newQuote').addEventListener('click', showRandomQuote);
  
//   // Call createAddQuoteForm to display the form on page load
//   createAddQuoteForm();
  

       ////////////////////////////  code 1 ///////////////////////////////

       
// // Get DOM elements this for add
// const form = document.getElementById('quoteForm');
// const quoteInput = document.getElementById('newQuoteText');
// const authorInput = document.getElementById('newQuoteCategory');
// const newQuoteBtn = document.getElementById('newQuote');
// const quoteDisplay = document.getElementById('quoteDisplay');
// const quoteText = document.querySelector('.quote');
// const quoteCategory = document.querySelector('.quoteCategory');

// // // Initial quotes array with sample data
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

//     //convert the array to a JSON string
//     let userJSON = JSON.stringify(quotes);

//     //Save the JSON string from to localStorage
//     localStorage.setItem('quotes', userJSON);

//     // Retrieve the JSON string from localStorage
//     let retrievedUsersJSON  = localStorage.getItem('quotes');

//     //Convert the JSON string back to an array
//     let retrievedUsers = JSON.parse(retrievedUsersJSON);
    
//     retrievedUsers.forEach((quoteObj) => {
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


// Get DOM elements remove all 
// const form = document.getElementById('quoteForm');
// const quoteInput = document.getElementById('newQuoteText');
// const authorInput = document.getElementById('newQuoteCategory');
// const newQuoteBtn = document.getElementById('newQuote');
// const quoteDisplay = document.getElementById('quoteDisplay');

// // Retrieve quotes from localStorage or initialize with sample data
// const quotes = JSON.parse(localStorage.getItem('quotes')) || [
//     { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
//     { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" }
// ];

// // Function to display all quotes in the DOM
// function displayQuotes() {
//     // Clear existing quotes
//     quoteDisplay.innerHTML = '';

//     // Display each quote
//     quotes.forEach(quoteObj => {
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

//         // Save updated quotes to localStorage
//         localStorage.setItem('quotes', JSON.stringify(quotes));

//         // Clear form inputs
//         quoteInput.value = '';
//         authorInput.value = '';

//         // Update display with new quote
//         displayQuotes();
//     }
// }

// // Event Listeners for user interactions
// newQuoteBtn.addEventListener('click', displayQuotes);
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     addQuote();
// });

// // Display quotes on page load
// displayQuotes();

// //Remove
//  function clearStoredQuotes() {
//     localStorage.removeItem('quotes');
//     quotes.length = 0; //clear the quotes array
//     alert('Stored quotes are removed');
//     displayQuotes(); //update the
//  }

//  const clearQuotes = document.getElementById('clearQuotes');

//  clearQuotes.addEventListener('click', clearStoredQuotes);
//  displayQuotes();

// Get DOM elements removes a specfic 

// Function to display all quotes in the DOM


    // Get DOM ELEMNTS specfic 
const form = document.getElementById('quoteForm');
const quoteInput = document.getElementById('newQuoteText');
const authorInput = document.getElementById('newQuoteCategory');
const newQuoteBtn = document.getElementById('newQuote');
const quoteDisplay = document.getElementById('quoteDisplay');
// Initial quotes array with sample data or from localStorage
const quotes = JSON.parse(localStorage.getItem('quotes')) || [
    { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" }
]; 

function displayQuotes() {
    // Clear existing quotes
    quoteDisplay.innerHTML = '';

    // Display each quote with a remove button
    quotes.forEach((quoteObj, index) => {
        const quoteElement = document.createElement('p');
        quoteElement.textContent = `"${quoteObj.quote}" - ${quoteObj.author}`;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => removeQuote(index));

        quoteElement.appendChild(removeBtn);
        quoteDisplay.appendChild(quoteElement);
    });

    // Show the quotes container
    quoteDisplay.style.display = 'block';
}

// Function to remove a specific quote
function removeQuote(index) {
    quotes.splice(index, 1); // Remove the quote at the specified index
    localStorage.setItem('quotes', JSON.stringify(quotes)); // Update localStorage
    displayQuotes(); // Update the display
}



// Other functions and event listeners remain the same
function addQuote() {
    const newQuote = {
        quote: quoteInput.value.trim(),
        author: authorInput.value.trim()
    };

    if (newQuote.quote && newQuote.author) {
        quotes.push(newQuote);
        localStorage.setItem('quotes', JSON.stringify(quotes));
        quoteInput.value = '';
        authorInput.value = '';
        displayQuotes();
    }
}

newQuoteBtn.addEventListener('click', displayQuotes());

form.addEventListener('submit', (event) => {
    event.preventDefault();
    addQuote();
});

// Display quotes on page load
displayQuotes();
