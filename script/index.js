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

showDataInTable();
async function showDataInTable() {
  try {
    let res = await fetch("http://localhost:3000/Blog");
    let data = await res.json();
    showData(data);
  } catch (error) {
    console.log(error);
  }
}
function showData(data) {
  data.forEach((element) => {
    let tabledata = `
            <td>${element.id}</td>
            <td>${element.author}</td>
            <td>${element.title}</td>
            <td>${element.category}</td>
            <td>${element.created_date}</td>
            <td><img src="./img/view.png" alt="" onclick="viewPage(${element.id})"/></td>
            <td><img src="./img/edit.png" alt="" onclick="editBlog(${element.id})" /></td>
            <td><img src="./img/delete.png" alt="" onclick="deleteData(${element.id})"/></td>
          `;
    let tr = document.createElement("tr");
    tr.innerHTML = tabledata;
    document.querySelector("tbody").append(tr);
  });
}
function deleteData(idT) {
  fetch(`http://localhost:3000/Blog/${idT}`, {
    method: "DELETE",
  });
  showDataInTable();
}
function viewPage(idView) {
  localStorage.setItem("blogIDView", idView);
  window.open("./view.html", "_self");
}
function editBlog(idEdit) {
  localStorage.setItem("blogIDEdit", idEdit);
  window.open("./edit.html", "_self");
}
