// const close = document.querySelectorAll(".close");
// const card = document.querySelectorAll(".card");

// for(let i = 0; i < close.length; i++){

//     close[i].addEventListener("click", function(){
//         card[i].style.display = "none";
//     })
// }

// // Dom Traversal : menelusuri element yang ada
// const close = document.querySelectorAll(".close");

// close.forEach(function(cls){
//     cls.addEventListener("click", function(e){
//         e.target.parentElement.style.display = "none";
//     })
// })

// Pakai Bubling atau dari parentnya
const container = document.querySelector(".container");

container.addEventListener("click", function(e){

    if(e.target.className == "close"){
        e.target.parentElement.style.display = "none";
        e.preventDefault;
        e.stopPropagation;
    }
    console.log(e.target);
})
