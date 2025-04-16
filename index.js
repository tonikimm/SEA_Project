const checkIcon = '<i class="fa-solid fa-square-check" style="color: #4CAF50;"></i>';
const xIcon = '<i class="fa-solid fa-square-xmark" style="color: #f44336;"></i>';

var showingList;

//Get unique cities from FoodSpotsList
const cities = [...new Set(FoodSpotsList.map(spot => spot.address.city))].sort();

//Get unique states from FoodSpotsList
const states = [...new Set(FoodSpotsList.map(spot => spot.address.state))].sort();

//Get unique categories from FoodSpotsList
const categories = [...new Set(FoodSpotsList.map(spot => spot.category))].sort();

//Populate filter dropdowns
function populateFilters() {
  //Populate category filter
  const categoryFilter = document.getElementById("category-filter");
  categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });

  //Populate city filter
  const cityFilter = document.getElementById("city-filter");
  cities.forEach(city => {
    const option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    cityFilter.appendChild(option);
  });

  //Populate state filter
  const stateFilter = document.getElementById("state-filter");
  states.forEach(state => {
    const option = document.createElement("option");
    option.value = state;
    option.textContent = state;
    stateFilter.appendChild(option);
  });
}

//Filter the food spots based on the selected category, city, and state
function filterAction() {
  const categoryFilter = document.getElementById("category-filter").value;
  const cityFilter = document.getElementById("city-filter").value;
  const stateFilter = document.getElementById("state-filter").value;

  showingList = FoodSpotsList.filter(spot => {
    const matchesCategory = !categoryFilter || spot.category === categoryFilter;
    const matchesCity = !cityFilter || spot.address.city === cityFilter;
    const matchesState = !stateFilter || spot.address.state === stateFilter;
    return matchesCategory && matchesCity && matchesState;
  });

  sortFoodSpots();
  showCards();
}

//Sort the food spots based on the selected option
function sortFoodSpots() {
  const sortSelect = document.getElementById("sort-select");
  const sortValue = sortSelect.value;

  switch (sortValue) {
    case "rating-high":
      showingList.sort((a, b) => {
        if (b.rating === a.rating) {
          return a.name.localeCompare(b.name);
        }
        return b.rating - a.rating;
      });
      break;
    case "rating-low":
      showingList.sort((a, b) => {
        if (a.rating === b.rating) {
          return a.name.localeCompare(b.name);
        }
        return a.rating - b.rating;
      });
      break;
    case "name-asc":
      showingList.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "name-desc":
      showingList.sort((a, b) => b.name.localeCompare(a.name));
      break;
  }
}

//Show the cards based on the selected option
function sortAction(){
  filterAction();
}


function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < showingList.length; i++) {
    let name = showingList[i].name;
    let imageURL = showingList[i].imageURL;
    let address = showingList[i].address;
    let category = showingList[i].category;
    let rating = showingList[i].rating;
    let visited = showingList[i].visited;

    // Format the address as a string
    let formattedAddress = `${address.street}, ${address.city}, ${address.state} ${address.zip}`;

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, name, imageURL, formattedAddress, category, rating, visited, i+1); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

//Edit the card content
function editCardContent(card, name, ImageURL, address, category, rating, visited, index) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = index+ ". " + name;

  const cardImage = card.querySelector("img");
  cardImage.src = ImageURL;
  cardImage.alt = name + " Poster";

  const cardAddress = card.querySelector("#address");
  cardAddress.innerHTML = "<strong>Address:</strong> " + address;

  const cardCategory = card.querySelector("#category");
  cardCategory.innerHTML = "<strong>Category:</strong> " + category;

  const cardRating = card.querySelector("#rating");
  cardRating.innerHTML = "<strong>Rating:</strong> " + rating + "/5";

  const cardVisited = card.querySelector("#visited");
  cardVisited.innerHTML = "<strong>Visited By Toni?</strong> " + (visited ? checkIcon : xIcon);

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", name, "- html: ", card);
}

//This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", () => {
  //Load food spots from localStorage if available
  const savedFoodSpots = localStorage.getItem('foodSpotsList');
  if (savedFoodSpots) {
    FoodSpotsList = JSON.parse(savedFoodSpots);
  }
  
  showingList = [...FoodSpotsList];
  populateFilters();
  showCards();
});

//Toggle the action menu
function toggleActionMenu(icon) {
  const menu = icon.nextElementSibling;
  const allMenus = document.querySelectorAll('.action-menu');
  
  allMenus.forEach(m => {
    if (m !== menu) {
      m.classList.remove('show');
    }
  });
  
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
  const fullText = card.querySelector('h2').textContent;
  const name = fullText.substring(fullText.indexOf('.') + 1).trim();
  
  if (confirm(`Are you sure you want to delete ${name}?`)) {
    // Remove from both lists
    const index = FoodSpotsList.findIndex(spot => spot.name === name);
    if (index > -1) {
      FoodSpotsList.splice(index, 1);
      showingList.splice(index, 1);
      
      // Update localStorage
      localStorage.setItem('foodSpotsList', JSON.stringify(FoodSpotsList));
      
      // Refresh the display
      showCards();
    }
  }
}

function resetCatalog() {
  if (confirm('Are you sure you want to reset the catalog? This will remove all changes and restore the original list.')) {
    localStorage.clear();
    location.reload();
  }
}
