let p = fetch("https://dummyjson.com/users/add", {
    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        firstName: "sonu",
        email: "sonu@gmail.com"
    })
})

.then((response) => {
    return response.json();
})

.then((data) => {
    console.log(data);
})

.catch((error) => {
    console.log(error);
});