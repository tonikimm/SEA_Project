const checkIcon = '<i class="fa-solid fa-square-check" style="color: #4CAF50;"></i>';
const xIcon = '<i class="fa-solid fa-square-xmark" style="color: #f44336;"></i>';


// Save FoodSpotsList to localStorage whenever it changes
function saveFoodSpotsList() {
  localStorage.setItem('foodSpotsList', JSON.stringify(FoodSpotsList));
}

// Get unique cities from FoodSpotsList
const cities = [...new Set(FoodSpotsList.map(spot => spot.address.city))].sort();

// Get unique states from FoodSpotsList
const states = [...new Set(FoodSpotsList.map(spot => spot.address.state))].sort();

// Get unique categories from FoodSpotsList
const categories = [...new Set(FoodSpotsList.map(spot => spot.category))].sort();

// Populate filter dropdowns
function populateFilters() {
  // Populate category filter
  const categoryFilter = document.getElementById("category-filter");
  categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });

  // Populate city filter
  const cityFilter = document.getElementById("city-filter");
  cities.forEach(city => {
    const option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    cityFilter.appendChild(option);
  });

  // Populate state filter
  const stateFilter = document.getElementById("state-filter");
  states.forEach(state => {
    const option = document.createElement("option");
    option.value = state;
    option.textContent = state;
    stateFilter.appendChild(option);
  });
}

function filterFoodSpots() {
  const categoryFilter = document.getElementById("category-filter").value;
  const cityFilter = document.getElementById("city-filter").value;
  const stateFilter = document.getElementById("state-filter").value;

  const filteredList = FoodSpotsList.filter(spot => {
    const matchesCategory = !categoryFilter || spot.category === categoryFilter;
    const matchesCity = !cityFilter || spot.address.city === cityFilter;
    const matchesState = !stateFilter || spot.address.state === stateFilter;
    return matchesCategory && matchesCity && matchesState;
  });

  showFilteredCards(filteredList);
}

function showFilteredCards(filteredList) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < filteredList.length; i++) {
    let name = filteredList[i].name;
    let imageURL = filteredList[i].imageURL;
    let address = filteredList[i].address;
    let category = filteredList[i].category;
    let rating = filteredList[i].rating;
    let visited = filteredList[i].visited;

    let formattedAddress = `${address.street}, ${address.city}, ${address.state} ${address.zip}`;

    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, name, imageURL, formattedAddress, category, rating, visited);
    cardContainer.appendChild(nextCard);
  }
}

function sortFoodSpots() {
  const sortSelect = document.getElementById("sort-select");
  const sortValue = sortSelect.value;

  switch (sortValue) {
    case "rating-high":
      FoodSpotsList.sort((a, b) => {
        if (b.rating === a.rating) {
          return a.name.localeCompare(b.name);
        }
        return b.rating - a.rating;
      });
      break;
    case "rating-low":
      FoodSpotsList.sort((a, b) => {
        if (a.rating === b.rating) {
          return a.name.localeCompare(b.name);
        }
        return a.rating - b.rating;
      });
      break;
    case "name-asc":
      FoodSpotsList.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "name-desc":
      FoodSpotsList.sort((a, b) => b.name.localeCompare(a.name));
      break;
  }
  showCards();
}

function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < FoodSpotsList.length; i++) {
    let name = FoodSpotsList[i].name;
    let imageURL = FoodSpotsList[i].imageURL;
    let address = FoodSpotsList[i].address;
    let category = FoodSpotsList[i].category;
    let rating = FoodSpotsList[i].rating;
    let visited = FoodSpotsList[i].visited;

    // Format the address as a string
    let formattedAddress = `${address.street}, ${address.city}, ${address.state} ${address.zip}`;

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, name, imageURL, formattedAddress, category, rating, visited); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, name, ImageURL, address, category, rating, visited) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = name;

  const cardImage = card.querySelector("img");
  cardImage.src = ImageURL;
  cardImage.alt = name + " Poster";

  const cardAddress = card.querySelector("#address");
  cardAddress.textContent = "Addresss: " + address;

  const cardCategory = card.querySelector("#category");
  cardCategory.textContent = "Category: " + category;

  const cardRating = card.querySelector("#rating");
  cardRating.textContent = "Rating: " + rating + "/5";

  const cardVisited = card.querySelector("#visited");
  cardVisited.innerHTML = "Visited By Toni? " + (visited ? checkIcon : xIcon);

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", name, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", () => {
  populateFilters();
  showCards();
});

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
  );
}

function removeLastCard() {
  titles.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}

function handleCardAction(selectElement) {
  const action = selectElement.value;
  const card = selectElement.closest('.card');
  const name = card.querySelector('h2').textContent;
  
  if (action === 'delete') {
    if (confirm(`Are you sure you want to delete ${name}?`)) {
      // Remove the food spot from the list
      const index = FoodSpotsList.findIndex(spot => spot.name === name);
      if (index > -1) {
        FoodSpotsList.splice(index, 1);
        showCards();
      }
    }
  }
  
  // Reset the select to default option
  selectElement.value = '';
}

function toggleActionMenu(icon) {
  const menu = icon.nextElementSibling;
  const allMenus = document.querySelectorAll('.action-menu');
  
  // Close all other menus first
  allMenus.forEach(m => {
    if (m !== menu) {
      m.classList.remove('show');
    }
  });
  
  // Toggle the clicked menu
  menu.classList.toggle('show');
}

// Close menus when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.card-actions')) {
    const allMenus = document.querySelectorAll('.action-menu');
    allMenus.forEach(menu => menu.classList.remove('show'));
  }
});

function handleDelete(element) {
  const card = element.closest('.card');
  const name = card.querySelector('h2').textContent;
  
  if (confirm(`Are you sure you want to delete ${name}?`)) {
    // Remove the food spot from the list
    const index = FoodSpotsList.findIndex(spot => spot.name === name);
    if (index > -1) {
      FoodSpotsList.splice(index, 1);
      saveFoodSpotsList(); // Save changes to localStorage
      showCards(); // Refresh the display
    }
  }
}
