//CREATE RETRIEVE UPDATE & DELETE

//Create
fetch("http://localhost:1234/users", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ name: "Jane Doe", email: "jane.doe@example.com" })
})
.then(response => response.json())
.then(data => console.log(data));

//Retrieve
fetch("http://localhost:1234/users")
  .then(response => response.json())
  .then(data => console.log(data));

//Update
fetch("http://localhost:1234/users/2", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "John Doe", email: "new.john@example.com" })
  })
  .then(response => response.json())
  .then(data => console.log(data));

  //Delete
fetch("http://localhost:1234/users/2", {
method: "DELETE"
})
.then(response => response.json())
.then(data => console.log("User deleted"));
  