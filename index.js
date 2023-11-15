const asd = document.querySelectorAll("section#b ul li")[1]
const p = document.querySelectorAll("section#b p")[0]
const ul = document.querySelector("section#b ul")

const itemBaru = document.createElement("li")
const textItem = document.createTextNode("Item Baru")

itemBaru.appendChild(textItem)

// asd.onclick = function(){
//     asd.style.backgroundColor = "black";
//     asd.style.color = "white";
// };

p.addEventListener("click", function(){
    ul.appendChild(itemBaru);
})