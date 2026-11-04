// 1. Select the button using its ID
const connectButton = document.getElementById('connectBtn');

// 2. Add a click event listener to the button
connectButton.addEventListener('click', function() {
    
    // Check if the button currently says "Connect"
    if (connectButton.textContent === 'Connect') {
        // Change the text and add the green styling class
        connectButton.textContent = 'Following';
        connectButton.classList.add('connected');
    } else {
        // Revert back if clicked again (toggle behavior)
        connectButton.textContent = 'Connect';
        connectButton.classList.remove('connected');
    }
    
});
