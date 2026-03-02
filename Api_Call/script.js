function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector("#userTable tbody");
            tableBody.innerHTML = "";

            data.forEach(user => {
                const row = `
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.address.city}</td>
                    </tr>
                `;
                tableBody.innerHTML += row;
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}