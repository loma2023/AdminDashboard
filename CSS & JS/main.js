// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};


fetch('https://script.google.com/macros/s/AKfycbwM2Wj1suXYuw0mz9u_bn20jRWqA-X8n0FkHaWf5foknx4IgiyaF2_ZHKGxbVmvfzAMqw/exec')
  .then((response) => response.json())
  .then((row) => sss(row))

function sss(row) {
  let element = "";
  let colum = "";
  let total = 0;
  for (let i = 1; i < row.length; i++) {
    colum = row[i];
    element += `
        <tr>
            <td>${colum[1]}</td>
            <td>${colum[2]}</td>
            <td>${colum[3]}</td>
            <td>${colum[4]}</td>
            <td>${colum[5]}</td>
            <td>${colum[6]}</td>
            <td><a id="${i}" class="fas fa-eye"   onclick="view(id)"></a></td>
            <td><a id="${colum[0]}" class="fas fa-trash" onclick="deletevalue(event)" ></a></td>
            
        </tr>`

    total = total + parseFloat(colum[6].replace('KWD', '')) 
  }
  document.querySelector(".table-body").innerHTML = element
  document.querySelector(".orders").innerHTML = row.length - 1
  document.querySelector(".total").innerHTML = total

}

function view(id) {
  fetch('https://script.google.com/macros/s/AKfycbwM2Wj1suXYuw0mz9u_bn20jRWqA-X8n0FkHaWf5foknx4IgiyaF2_ZHKGxbVmvfzAMqw/exec')
    .then((response) => response.json())
    .then((row) => {
      let colum = row[id]
      let element = "" ;
      for (let i = 7; i < 41; i++) {
        element += `
        <tr>
            <td>${colum[i]}</td>         
            <td>${colum[i + 1]}</td>         
            <td>${colum[i + 2]}</td>         
            <td>${colum[i + 3]}</td>         
        </tr>` 
        i = i + 3  
      }
      document.querySelector(".table-body").innerHTML = element
      document.querySelector(".table-head").innerHTML = `
      <tr>
        <td>item</td>
        <td>weight & color</td>
        <td>price</td>
        <td>quantaty</td>
      </tr>`
    })
    setTimeout(() => {
      document.querySelector(".fa-arrow-left").style.display = "block"
    }, 2000);
       
  }

var script_url = "https://script.google.com/macros/s/AKfycbwM2Wj1suXYuw0mz9u_bn20jRWqA-X8n0FkHaWf5foknx4IgiyaF2_ZHKGxbVmvfzAMqw/exec";

function deletevalue(event) {
  let btn = event.target;
  let id1 = btn.id;
  let name = "";
  btn.parentElement.innerText = " جار الحذف "
  var url = script_url + "?callback=ctrlq&name=" + name + "&id=" + id1 + "&action=delete";

  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp"
  });

  setTimeout(() => {
    location.href = "index.html"
  }, 5000);
}
