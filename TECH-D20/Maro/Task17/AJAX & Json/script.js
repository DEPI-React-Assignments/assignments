function getUsers(url) {

    fetch(url)

        .then(function (response) {

            return response.json();

        })

        .then(function (data) {

            displayUsers(data);

        })

        .catch(function (error) {

            console.log(error);

        });

}


function displayUsers(users) {

    var usersContainer = document.getElementById("users");

    users.forEach(function (user) {

        var button = document.createElement("button");

        button.innerHTML = user.username;

        button.onclick = function () {

            getPosts(user.id);

        };

        usersContainer.appendChild(button);

    });

}


function getPosts(userId) {

    fetch("https://jsonplaceholder.typicode.com/posts?userId=" + userId)

        .then(function (response) {

            return response.json();

        })

        .then(function (data) {

            displayPosts(data);

        })

        .catch(function (error) {

            console.log(error);

        });

}


function displayPosts(posts) {

    var postsContainer = document.getElementById("posts");

    postsContainer.innerHTML = "";

    var ul = document.createElement("ul");

    posts.forEach(function (post) {

        var li = document.createElement("li");

        li.innerHTML = post.title;

        ul.appendChild(li);

    });

    postsContainer.appendChild(ul);

}


getUsers("https://jsonplaceholder.typicode.com/users");