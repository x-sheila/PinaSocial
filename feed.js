document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem("username");
    if (!username) {
        alert("Please login first!");
        window.location.href = "./signin.html";
        return;
    }
    document.getElementById("welcome-user").textContent = username;
    loadPosts();
});

function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    window.location.href = "./signin.html";
}

 async function createPost() {
    const content = document.getElementById("post-content").value;
    if (!content) return alert("Please write something");

    const username = localStorage.getItem("username") || "Anonymous";

    await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify({ content, username})
    });

    document.getElementById("post-content").value = "";
    loadPosts();

  }

   async function loadPosts() {
    const res = await fetch("/api/posts");
    const posts =await res.json();
    const container = document.getElementById("posts-container");
    container.innerHTML = "";

    posts.forEach((post)  => {
        const postEl = document.createElement("div");
        postEl.classList.add("post-card");
        postEl.innerHTML = `
        <div class="post-header">
            <b>${post.username}</b>
            <small class="post-date">${new Date(post.date).toLocaleString()}</small>
        </div>
        <hr>
        <p>${post.content}</p>
        </hr>
        `;
        container.appendChild(postEl);
    });
   }
    
     
  
