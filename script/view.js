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
let id = localStorage.getItem("blogIDView");
showData(id);
async function showData(id) {
  try {
    let url = `http://localhost:3000/Blog/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    showDataInInput(data);
  } catch (error) {
    console.log(error);
  }
}
function showDataInInput(data) {
  document.getElementById("titleInput").value = `${data.title}`;
  document.getElementById("authorInput").value = `${data.author}`;
  document.getElementById("categoryInput").value = `${data.category}`;
  document.getElementById("blogBodyP").innerText = `${data.body}`;
  document.getElementById("tagsInput").value = `${data.tags}`;
}
