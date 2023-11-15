const container = document.querySelector(".container");
const jumbo = document.querySelector(".jumbo");
const images = document.querySelectorAll(".image");

container.addEventListener("click", function(e){

    if(e.target.className == "image"){
        
        jumbo.setAttribute("src", e.target.src)

        jumbo.classList.add("fade")
        setTimeout(function(){
            jumbo.classList.remove("fade")
        }, 400)


        images.forEach(function(image){
            image.classList.remove("samar")
        })
        e.target.classList.add("samar");

    }
})