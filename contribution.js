document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contribution-form');
  const formContainer = document.getElementById('form-container');
  const confirmationMessage = document.getElementById('confirmation-message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    //Create new food spot from form data
    const newFoodSpot = new FoodSpot(
      form.elements['name'].value,
      {
        street: form.elements['street'].value,
        city: form.elements['city'].value,
        state: form.elements['state'].value,
        zip: form.elements['zip'].value
      },
      form.elements['category'].value,
      parseFloat(form.elements['rating'].value),
      false,
      form.elements['imageURL'].value
    );

    //Add to FoodSpotsList
    FoodSpotsList.push(newFoodSpot);
    
    localStorage.setItem('foodSpotsList', JSON.stringify(FoodSpotsList));
    
    //Hide the form
    formContainer.style.display = 'none';
    
    //Show the confirmation message
    confirmationMessage.style.display = 'block';
  });
});

function resetForm() {
  //Reset the form
  document.getElementById('contribution-form').reset();
  
  //Hide the confirmation message
  document.getElementById('confirmation-message').style.display = 'none';
  
  //Show the form
  document.getElementById('form-container').style.display = 'block';
}
