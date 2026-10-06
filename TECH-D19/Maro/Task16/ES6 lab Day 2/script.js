function getUsers(url) {

fetch(url)

    .then((response) => {

        return response.json();

    })

    .then((data) => {

        console.log(data);

        displayUsers(data);

    })

    .catch((error) => {

        console.log(error);

    });

}


function displayUsers(users) {

    let usersContainer =
        document.getElementById("users");


    users.forEach((user) => {

        let button =document.createElement("button");

        button.innerText =user.name;

        button.addEventListener("click",() => {getPosts(user.id);});

        usersContainer.append(button);

    });

}


async function getPosts(userId) {

    let response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );


    let data =await response.json();

    displayPosts(data);

}


function displayPosts(posts) {

    let postsContainer = document.getElementById("posts");


    postsContainer.innerHTML = "";

    let ul = document.createElement("ul");

    posts.forEach((post) => { let li = document.createElement("li");
        li.innerText = post.title;
        ul.append(li);
    });
    postsContainer.append(ul);
}


getUsers("https://jsonplaceholder.typicode.com/users");