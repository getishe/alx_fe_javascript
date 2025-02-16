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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Get DOM ELEMNTS specfic 
// const form = document.getElementById('quoteForm');
// const quoteInput = document.getElementById('newQuoteText');
// const authorInput = document.getElementById('newQuoteCategory');
// const newQuoteBtn = document.getElementById('newQuote');
// const quoteDisplay = document.getElementById('quoteDisplay');
// const categoriesFilter = document.getElementById('categoriesFilter');
// // Initial quotes array with sample data or from localStorage
// const quotes = JSON.parse(localStorage.getItem('quotes')) || [
//     { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
//     { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" }
// ]; 

// function displayQuotes() {
//     // Clear existing quotes
//     quoteDisplay.innerHTML = '';

//     // Display each quote with a remove button
//     quotes.forEach((quoteObj, index) => {
//         const quoteElement = document.createElement('p');
//         quoteElement.textContent = `"${quoteObj.quote}" - ${quoteObj.author}`;

//         const removeBtn = document.createElement('button');
//         removeBtn.textContent = 'Remove';
//         removeBtn.addEventListener('click', () => removeQuote(index));

//         quoteElement.appendChild(removeBtn);
//         quoteDisplay.appendChild(quoteElement);
//     });

//     // Show the quotes container
//     quoteDisplay.style.display = 'block';
// }

// // Function to remove a specific quote
// function removeQuote(index) {
//     quotes.splice(index, 1); // Remove the quote at the specified index
//     localStorage.setItem('quotes', JSON.stringify(quotes)); // Update localStorage
//     displayQuotes(); // Update the display
// }



// // Other functions and event listeners remain the same
// function addQuote() {
//     const newQuote = {
//         quote: quoteInput.value.trim(),
//         author: authorInput.value.trim()
//     };

//     if (newQuote.quote && newQuote.author) {
//         quotes.push(newQuote);
//         localStorage.setItem('quotes', JSON.stringify(quotes));
//         quoteInput.value = '';
//         authorInput.value = '';
//         displayQuotes();
//     }
// }

// newQuoteBtn.addEventListener('click', displayQuotes());

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     addQuote();
// });

// // Display quotes on page load
// displayQuotes();


// // Export the Json file
// exportquotes.addEventListener('click', function() {
//    const quoteJson =  JSON.stringify(quotes);
//    const blob = new Blob([quoteJson], { type: 'application/json' });
//    const url = URL.createObjectURL(blob);
//    const a = document.createElement('a');
//    a.href = url;
//    a.download = 'quotes.json';
//    a.click();
// });

// //Import the Json file

// // function importFromJsonFile(event){
// //  const fileReader = new FileReader();
// //  fileReader.onload = function(event){
// //     const jsonString = event.target.result;
// //     const importedQuotes = JSON.parse(jsonString);
// //     quotes.push(...importedQuotes);
// //     localStorage.setItem('quotes', JSON.stringify(quotes));
// //     displayQuotes();
// //  };
// //   fileReader.readAsText(event.target.files[0]);

// // }

// //Import the Json file anther method

// document.getElementById('importFile').addEventListener('change', function(event) {
//  const file = event.target.files[0];
//  const reader = new FileReader();
//  reader.onload = function(event) {
//     const jsonString = event.target.result;
//     const importedQuotes = JSON.parse(jsonString);
//     quotes.push(...importedQuotes);
//     localStorage.setItem('quotes', JSON.stringify(quotes)); 
//     displayQuotes();
//  }
//  reader.readAsText(file);
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







//  Creating a Dynamic Content Filtering System Using Web Storage and JSON

//Populate Categories Dynamically:
// const form = document.getElementById('quoteForm');
// const quoteInput = document.getElementById('newQuoteText');
// const authorInput = document.getElementById('newQuoteCategory');
// const quoteDisplay = document.getElementById('quoteDisplay');
// const categoryFilter = document.getElementById('categoryFilter');
// const newQuoteBtn = document.getElementById('newQuote');
// const quotes = JSON.parse(localStorage.getItem('quotes')) || [
//     { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
//     { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" }
// ];

// function displayQuotes(quotesToDisplay = quotes) {
//     quoteDisplay.innerHTML = '';
//     quotesToDisplay.forEach((quoteObj, index) => {
//         const quoteElement = document.createElement('p');
//         quoteElement.textContent = `"${quoteObj.quote}" - ${quoteObj.author}`;

//         const removeBtn = document.createElement('button');
//         removeBtn.textContent = 'Remove';
//         removeBtn.addEventListener('click', () => removeQuote(index));

//         quoteElement.appendChild(removeBtn);
//         quoteDisplay.appendChild(quoteElement);
//     });

//     quoteDisplay.style.display = 'block';
// }

// function removeQuote(index) {
//     quotes.splice(index, 1);
//     localStorage.setItem('quotes', JSON.stringify(quotes));
//     displayQuotes();
// }

// function addQuote() {
//     const newQuote = {
//         quote: quoteInput.value.trim(),
//         author: authorInput.value.trim()
//     };

//     if (newQuote.quote && newQuote.author) {
//         quotes.push(newQuote);
//         localStorage.setItem('quotes', JSON.stringify(quotes));
//         quoteInput.value = '';
//         authorInput.value = '';
//         displayQuotes();
//         populateCategories();
//     }
// }

// function populateCategories() {
//     const categories = [...new Set(quotes.map(quote => quote.author))];
//     categoryFilter.innerHTML = '<option value="all">All Categories</option>';
//     categories.forEach(category => {
//         const option = document.createElement('option');
//         option.value = category;
//         option.textContent = category;
//         categoryFilter.appendChild(option);
//     });
// }

// function filterQuotes() {
//     const selectedCategory = categoryFilter.value;
//     const filteredQuotes = selectedCategory === 'all'
//         ? quotes
//         : quotes.filter(quote => quote.author === selectedCategory);
//     displayQuotes(filteredQuotes);
// }

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     addQuote();
// });

// document.getElementById('exportquotes').addEventListener('click', () => {
//     const quotesJson = JSON.stringify(quotes);
//     const blob = new Blob([quotesJson], { type: 'application/json' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'quotes.json';
//     a.click();
// });

// // Export the Json file
// // exportquotes.addEventListener('click', function() {
// //    const quoteJson =  JSON.stringify(quotes);
// //    const blob = new Blob([quoteJson], { type: 'application/json' });
// //    const url = URL.createObjectURL(blob);
// //    const a = document.createElement('a');
// //    a.href = url;
// //    a.download = 'quotes.json';
// //    a.click();
// // });


// document.getElementById('importFile').addEventListener('change', (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onload = function(event) {
//         const importedQuotes = JSON.parse(event.target.result);
//         quotes.push(...importedQuotes);
//         localStorage.setItem('quotes', JSON.stringify(quotes));
//         displayQuotes();
//         populateCategories();
//     };
//     reader.readAsText(file);
// });

// window.onload = () => {
//     displayQuotes();
//     populateCategories();
// };


// // Step 1: Simulate Server Interaction

// const serverURL = 'https://jsonplaceholder.typicode.com/posts';

// // Fetch existing quotes from server
// async function fetchQuotesFromServer() {
//     try {
//         const response = await fetch(serverURL);
//         const serverQuotes = await response.json();
//         return serverQuotes;
//     } catch (error) {
//         console.error('Error fetching quotes from server:', error);
//     }
// }

// // Post new quotes to server
// async function postQuoteToServer(quote) {
//     try {
//         const response = await fetch(serverURL, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(quote)
//         });
//         const newQuote = await response.json();
//         return newQuote;
//     } catch (error) {
//         console.error('Error posting quote to server:', error);
//     }
// }
// // Implement Periodic Data Fetching:

// async function syncQuotesWithServer() {
//     const serverQuotes = await fetchQuotesFromServer();
//     const updatedQuotes = resolveConflicts(quotes, serverQuotes);
//     quotes.length = 0; // Clear current quotes
//     quotes.push(...updatedQuotes);
//     localStorage.setItem('quotes', JSON.stringify(quotes));
//     displayQuotes();
// }

// // Periodically sync quotes every 5 minutes
// setInterval(syncQuotesWithServer, 5 * 60 * 1000);

// // Step 2: Implement Data Syncing

// function resolveConflicts(localQuotes, serverQuotes) {
//     const localQuoteMap = new Map(localQuotes.map((q, index) => [index, q]));
//     serverQuotes.forEach(serverQuote => {
//         if (localQuoteMap.has(serverQuote.id)) {
//             // Resolve conflict (server data takes precedence)
//             localQuoteMap.set(serverQuote.id, serverQuote);
//         } else {
//             // Add new server quote to local quotes
//             localQuoteMap.set(serverQuote.id, serverQuote);
//         }
//     });
//     return Array.from(localQuoteMap.values());
// }


// // Post New Quotes:

// async function addQuote() {
//     const newQuote = {
//         quote: quoteInput.value.trim(),
//         author: authorInput.value.trim()
//     };

//     if (newQuote.quote && newQuote.author) {
//         const savedQuote = await postQuoteToServer(newQuote);
//         quotes.push(savedQuote);
//         localStorage.setItem('quotes', JSON.stringify(quotes));
//         quoteInput.value = '';
//         authorInput.value = '';
//         displayQuotes();
//         populateCategories();
//     }
// }


// // Step 3: Handling Conflicts
// function showNotification(message) {
//     const notification = document.createElement('div');
//     notification.textContent = message;
//     notification.className = 'notification';
//     document.body.appendChild(notification);
//     setTimeout(() => notification.remove(), 3000);
// }

// async function syncQuotesWithServer() {
//     const serverQuotes = await fetchQuotesFromServer();
//     const updatedQuotes = resolveConflicts(quotes, serverQuotes);
//     quotes.length = 0;
//     quotes.push(...updatedQuotes);
//     localStorage.setItem('quotes', JSON.stringify(quotes));
//     displayQuotes();
//     showNotification('Quotes synced with server.');
// }

// // Manual Conflict Resolution:

// function resolveConflicts(localQuotes, serverQuotes) {
//     const localQuoteMap = new Map(localQuotes.map((q, index) => [index, q]));
//     const conflicts = [];

//     serverQuotes.forEach(serverQuote => {
//         if (localQuoteMap.has(serverQuote.id)) {
//             // Detect conflict
//             conflicts.push({ local: localQuoteMap.get(serverQuote.id), server: serverQuote });
//         } else {
//             localQuoteMap.set(serverQuote.id, serverQuote);
//         }
//     });

//     // Handle conflicts
//     conflicts.forEach(conflict => {
//         // Here you can add your conflict resolution logic, such as user prompts
//         localQuoteMap.set(conflict.server.id, conflict.server); // Default to server quote
//     });

//     return Array.from(localQuoteMap.values());
// }

// Populate Categories Dynamically:
const form = document.getElementById('quoteForm');
const quoteInput = document.getElementById('newQuoteText');
const authorInput = document.getElementById('newQuoteCategory');
const quoteDisplay = document.getElementById('quoteDisplay');
const categoryFilter = document.getElementById('categoryFilter');
const newQuoteBtn = document.getElementById('newQuote');
const serverURL = 'https://jsonplaceholder.typicode.com/posts';

const quotes = JSON.parse(localStorage.getItem('quotes')) || [
    { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" }
];

function displayQuotes(quotesToDisplay = quotes) {
    quoteDisplay.innerHTML = '';
    quotesToDisplay.forEach((quoteObj, index) => {
        const quoteElement = document.createElement('p');
        quoteElement.textContent = `"${quoteObj.quote}" - ${quoteObj.author}`;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => removeQuote(index));

        quoteElement.appendChild(removeBtn);
        quoteDisplay.appendChild(quoteElement);
    });

    quoteDisplay.style.display = 'block';
}

function removeQuote(index) {
    quotes.splice(index, 1);
    localStorage.setItem('quotes', JSON.stringify(quotes));
    displayQuotes();
}

async function addQuote() {
    const newQuote = {
        quote: quoteInput.value.trim(),
        author: authorInput.value.trim()
    };

    if (newQuote.quote && newQuote.author) {
        const savedQuote = await postQuoteToServer(newQuote);
        quotes.push(savedQuote);
        localStorage.setItem('quotes', JSON.stringify(quotes));
        quoteInput.value = '';
        authorInput.value = '';
        displayQuotes();
        populateCategories();
    }
}

function populateCategories() {
    const categories = [...new Set(quotes.map(quote => quote.author))];
    categoryFilter.innerHTML = '<option value="all">All Categories</option>';
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
}

function filterQuotes() {
    const selectedCategory = categoryFilter.value;
    const filteredQuotes = selectedCategory === 'all'
        ? quotes
        : quotes.filter(quote => quote.author === selectedCategory);
    displayQuotes(filteredQuotes);
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    addQuote();
});

document.getElementById('exportquotes').addEventListener('click', () => {
    const quotesJson = JSON.stringify(quotes);
    const blob = new Blob([quotesJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'quotes.json';
    a.click();
});

document.getElementById('importFile').addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
        const importedQuotes = JSON.parse(event.target.result);
        quotes.push(...importedQuotes);
        localStorage.setItem('quotes', JSON.stringify(quotes));
        displayQuotes();
        populateCategories();
    };
    reader.readAsText(file);
});

async function fetchQuotesFromServer() {
    try {
        const response = await fetch(serverURL);
        const serverQuotes = await response.json();
        return serverQuotes;
    } catch (error) {
        console.error('Error fetching quotes from server:', error);
    }
}

async function postQuoteToServer(quote) {
    try {
        const response = await fetch(serverURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(quote)
        });
        const newQuote = await response.json();
        return newQuote;
    } catch (error) {
        console.error('Error posting quote to server:', error);
    }
}

function resolveConflicts(localQuotes, serverQuotes) {
    const localQuoteMap = new Map(localQuotes.map((q, index) => [index, q]));
    const conflicts = [];

    serverQuotes.forEach(serverQuote => {
        if (localQuoteMap.has(serverQuote.id)) {
            conflicts.push({ local: localQuoteMap.get(serverQuote.id), server: serverQuote });
        } else {
            localQuoteMap.set(serverQuote.id, serverQuote);
        }
    });

    conflicts.forEach(conflict => {
        localQuoteMap.set(conflict.server.id, conflict.server);
    });

    return Array.from(localQuoteMap.values());
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.className = 'notification';
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

async function syncQuotesWithServer() {
    const serverQuotes = await fetchQuotesFromServer();
    const updatedQuotes = resolveConflicts(quotes, serverQuotes);
    quotes.length = 0;
    quotes.push(...updatedQuotes);
    localStorage.setItem('quotes', JSON.stringify(quotes));
    displayQuotes();
    showNotification('Quotes synced with server!');
}

setInterval(syncQuotesWithServer, 5 * 60 * 1000);

window.onload = () => {
    displayQuotes();
    populateCategories();
};


