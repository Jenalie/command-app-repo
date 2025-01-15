document.getElementById('submitBtn').addEventListener('click', function() {
    const command = document.getElementById('commandInput').value.trim();
    if (!command) {
        alert("Please enter a command.");
        return;
    }

    const [commandName, ...args] = command.split(' ');

    if (!commandName) {
        document.getElementById('output').innerText = 'Invalid command format.';
        return;
    }

    // Perform Ajax request to server
    fetch('php/command_handler.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ commandName, args })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('output').innerText = data.result || 'Error in command execution.';
    })
    .catch(error => {
        document.getElementById('output').innerText = 'An error occurred.';
    });
});