  async function signup() {
    const username = document.getElementById("signup-username").value;
    const password =document.getElementById("signup-password").value;

    if (!username || !password) {
        alert("Please fill in all fields");
        return;
    }

    try {
    const response = await fetch("/api/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    alert(data.message);

    if (response.status === 201) {
        window.location.href = "./signin.html";
    }
} catch (error) {
   alert("Server error. Try again.");
   console.error(error);
}
}

 async function signin() {
    const username = document.getElementById
    ("signin-username").value;
    const password =document.getElementById
    ("signin-password").value;

      if (!username || !password) {
        alert("Please fill in all fields");
        return;
      }
      try {
    const response = await fetch("/api/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (response.status === 200) {
        alert(data.message);
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username);
        window.location.href = "./feed.html";
    } else {
        alert(data.message);
    }
} catch (error) {
    alert("Server error. Try again.");
    console.error(error);
}
 }

 function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.href = "./signin.html"
 }


    
