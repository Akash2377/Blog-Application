let nav = `<div>
          <h1><a href="./index.html">Home</a></h1>
          <h1><a href="./create.html">Create Blog</a></h1>
        </div>
        <div>
          <img src="./img/logo.png" alt="" />
        </div>
        <div>
         <button id="LoginBtn">Login</button>
        </div>`;
document.getElementById("navbar").innerHTML = nav;
async function createBlog() {
  let today = new Date();
  let current_date = today.getDate();
  let current_month = today.getMonth() + 1;
  let current_year = today.getFullYear();

  fetch(`http://localhost:3000/Blog`, {
    method: "POST",
    body: JSON.stringify({
      created_date: current_month + "/" + current_date + "/" + current_year,
      title: document.getElementById("titleInput").value,
      author: document.getElementById("authorInput").value,
      category: document.getElementById("categoryInput").value,
      body: document.getElementById("blogBodyP").value,
      tags: document.getElementById("tagsInput").value,
    }),
    headers: { "content-type": "application/json" },
  });
}
