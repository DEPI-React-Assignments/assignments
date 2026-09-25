const usersUrl = "https://jsonplaceholder.typicode.com/users";
const tabsContainer = document.getElementById("tabs");
const postsList = document.getElementById("postsList");
const statusBox = document.getElementById("status");

function showStatus(message) {
    statusBox.textContent = message;
}

function loadUsers() {
    fetch(usersUrl)
        .then((response) => response.json())
        .then((users) => {
            tabsContainer.innerHTML = "";

            users.forEach((user) => {
                const button = document.createElement("button");
                button.className = "tab";
                button.textContent = user.name;

                button.addEventListener("click", () => {
                    const allTabs = document.querySelectorAll(".tab");
                    allTabs.forEach((tab) => tab.classList.remove("active"));
                    button.classList.add("active");
                    loadPosts(user.id);
                });

                tabsContainer.appendChild(button);
            });

            const firstButton = tabsContainer.querySelector(".tab");
            if (firstButton) {
                firstButton.classList.add("active");
                loadPosts(users[0].id);
            }
        })
        .catch((error) => {
            showStatus("Error loading users: " + error.message);
        });
}

async function loadPosts(userId) {
    const postsUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

    try {
        showStatus("Loading posts...");
        const response = await fetch(postsUrl);
        const posts = await response.json();

        postsList.innerHTML = "";
        posts.forEach((post) => {
            const item = document.createElement("li");
            item.textContent = post.title;
            postsList.appendChild(item);
        });

        showStatus("");
    } catch (error) {
        showStatus("Error loading posts: " + error.message);
    }
}

loadUsers();
