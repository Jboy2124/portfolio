// let tasks = [
//     {
//         title: "Programming Languages",
//         text: "The quick brown fox jump over the",
//     },
//     {
//             title: "Front-End",
//             text: "The The Lazy dog",
//     },
//     {
//         title: "Back-End",
//         text: "The The Lazy dog asdjashdjashddsafsafadf",
//     },
// ];

// let cardContainer;
// let createTaskCard = (task) => {

// let card = document.createElement("div");
// card.className = "card";

// let cardBody = document.createElement("div");
// cardBody.className = "card-body";

// let title = document.createElement("h5");
// title.innerText = task.title;
// title.className = "card-title";

// let cText = document.createElement('p');
// cText.innerText = task.text;
// cText.className = 'card-text';

// cardBody.appendChild(title);
// cardBody.appendChild(cText);
// card.appendChild(cardBody);
// cardContainer.appendChild(card);

// }

// let initListOfTasks = () => {
// if (cardContainer) {
//     document.getElementById('card-container').replaceWith(cardContainer);
//     return;
// }

// cardContainer = document.getElementById('card-container');
// tasks.forEach((task) => {
//     createTaskCard(task);
//     });
// };

// initListOfTasks();