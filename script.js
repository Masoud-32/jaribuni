// Get references to the HTML elements
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

// Add click event listeners to the tab buttons
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove the 'active' class from all tab buttons and tab contents
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.style.display = 'none');
    
    // Add the 'active' class to the clicked button and show the corresponding content
    button.classList.add('active');
    const tabId = button.getAttribute('data-tab');
    document.getElementById(tabId).style.display = 'block';
  });
});
