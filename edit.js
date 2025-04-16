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
  if (card) {
    card.remove();
  }
} 