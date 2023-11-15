const btnUbah = document.getElementById("btnUbah")
const btnAcak = document.getElementById("btnAcak")

btnUbah.addEventListener('click', function(){
    document.body.classList.toggle("warna")
})

btnAcak.addEventListener('click', function(){
    const r = Math.round(Math.random()*255+1)
    const g = Math.round(Math.random()*255+1)
    const b = Math.round(Math.random()*255+1)


    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
})

// Slider ganti warna
// const sldMerah = document.querySelector('input[name=sldMerah]')
// const sldHijau = document.querySelector('input[name=sldHijau]')
// const sldBiru = document.querySelector('input[name=sldBiru]')

// sldMerah.addEventListener("input", function(){
//     const r = sldMerah.value
//     const g = sldHijau.value
//     const b = sldBiru.value

//     document.body.style.backgroundColor = "rgb("+r+","+g+","+b+")"
// })
// sldHijau.addEventListener("input", function(){
//     const r = sldMerah.value
//     const g = sldHijau.value
//     const b = sldBiru.value

//     document.body.style.backgroundColor = "rgb("+r+","+g+","+b+")"
// })
// sldBiru.addEventListener("input", function(){
//     const r = sldMerah.value
//     const g = sldHijau.value
//     const b = sldBiru.value

//     document.body.style.backgroundColor = "rgb("+r+","+g+","+b+")"
// })

// Slider Ganti Warna 2

const sld = document.querySelectorAll("input[type=range]")

for(i=0; i < sld.length; i++){
    
    sld[i].addEventListener('input', function(){
        const r = sld[0].value;
        const g = sld[1].value;
        const b = sld[2].value;
        document.body.style.backgroundColor = "rgb("+r+","+g+","+b+")"
    })
}

document.body.addEventListener("mousemove", function(event){
    console.log(event)
    // console.log(window.innerHeight)
    const smbX = Math.round((event.clientX/window.innerWidth)*255)
    const smbY = Math.round((event.clientY/window.innerHeight)*255)
    const b = Math.floor((Math.random()*255+1))
    
    document.body.style.backgroundColor = "rgb("+smbX+","+smbY+","+0+")"
})
