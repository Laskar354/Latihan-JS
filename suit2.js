// Pilihan Computer

function getPilihanComputer(){

    var pilih = Math.random();
    if(pilih < 0.33){
        return "orang";
    } else if(pilih > 0.33 && pilih < 0.74){
        return "semut";
    } else if(pilih > 0.74){
        return "gajah";
    }
}

function getHasil(player, comp){
    if( player == comp){
        return "SERI";
    } else if(player == "orang"){
        if(comp == "semut"){
            return "MENANG"
        } else {
            return "KALAH"
        }
    } else if(player == "semut"){
        if(comp == "gajah"){
            return "MENANG"
        } else {
            return "KALAH"
        }
    } else if(player == "gajah"){
        if(comp == "orang"){
            return "MENANG"
        } else {
            return "KALAH"
        }
    }
}

function putarGambarComp(){

    const imgComp = document.querySelector(".img-computer");
    const gambar = ["semut", "orang", "gajah"];
    let i = 0;
    const waktuPutar = new Date().getTime()
    setInterval(function(){
        // Batasi waktu pemutaran gambar ::: 1000 artinya 1 detik
        if(new Date().getTime() - waktuPutar > 1000){
            clearInterval();
            return;
        }
        imgComp.setAttribute("src", "img/"+gambar[i++]+".png")
        if(i == gambar.length){
            i = 0   
        }
    }, 100);
}

const pPlayer = document.querySelectorAll('li img')
    // console.log(new Date().getTime()-waktu)
pPlayer.forEach(function(ply){

    ply.addEventListener("click", function(){
        const pilihanComp = getPilihanComputer();
        const pilihanPlayer = ply.className;
        const hasil = getHasil(pilihanPlayer, pilihanComp);

        putarGambarComp();

        setTimeout(function(){

            const imgComp = document.querySelector(".img-computer")
            imgComp.setAttribute('src', 'img/'+ pilihanComp +'.png')
            
            const info = document.querySelector(".info")
            info.innerHTML = hasil
        }, 1000)

    })
})