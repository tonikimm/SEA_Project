document.addEventListener('DOMContentLoaded', () => {
    const savedFoodSpots = localStorage.getItem('foodSpotsList');
    if (savedFoodSpots) {
        FoodSpotsList = JSON.parse(savedFoodSpots);
    }

    const spinButton = document.getElementById('spin-button');
    const resultContainer = document.getElementById('result');

    spinButton.addEventListener('click', () => {
        //Get a random food spot
        const randomIndex = Math.floor(Math.random() * FoodSpotsList.length);
        const randomSpot = FoodSpotsList[randomIndex];

        //Create and display the card
        displayFoodSpot(randomSpot);

        //Hide the original spin button
        spinButton.style.display = 'none';
    });

    //Function to display a food spot card
    function displayFoodSpot(spot) {

        const formattedAddress = `${spot.address.street}, ${spot.address.city}, ${spot.address.state} ${spot.address.zip}`;

        const cardHTML = `
      <div class="card">
        <div class="card-content">
          <div class="card-header">
            <h2>${spot.name}</h2>
          </div>
          <div class="card-details">
            <img src="${spot.imageURL}" alt="${spot.name} Image" />
            <ul>
              <li><strong>Address:</strong> ${formattedAddress}</li>
              <li><strong>Category:</strong> ${spot.category}</li>
              <li><strong>Rating:</strong> ${spot.rating}/5</li>
              <li><strong>Visited By Toni?</strong> ${spot.visited ? '<i class="fa-solid fa-square-check" style="color: #4CAF50;"></i>' : '<i class="fa-solid fa-square-xmark" style="color: #f44336;"></i>'}</li>
            </ul>
          </div>
        </div>
      </div>
    `;

        resultContainer.innerHTML = cardHTML;
        resultContainer.style.display = 'block';

        //Add a button to spin again
        const spinAgainButton = document.createElement('button');
        spinAgainButton.textContent = 'Spin Again';
        spinAgainButton.className = 'spin-again-button';
        spinAgainButton.addEventListener('click', () => {
            const newRandomIndex = Math.floor(Math.random() * FoodSpotsList.length);
            const newRandomSpot = FoodSpotsList[newRandomIndex];
            displayFoodSpot(newRandomSpot);
        });

        resultContainer.appendChild(spinAgainButton);
    }
});
