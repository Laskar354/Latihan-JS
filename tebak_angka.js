var ulang = true
while(ulang){

    // Pilihan Computer
    var comp = Math.floor(Math.random() * 11 + 1);


    for(var turn = 3; turn >= 1; turn--){
        // Pilih angka
        var player = prompt("Masukkan angka dari 1 - 10")

        if(player == comp){
            alert('Selamat anda berhasil');
            break;
        } else if(player > comp){
            alert("Jawaban kamu terlalu besar \n Sisa kesempatan "+ turn)
        } else if(player < comp){
            alert("Jawaban kamu terlalu kecil \n Sisa kesempatan "+ turn)
        } else {
            alert("Jawabanmu salah \n Sisa kesempatan "+ turn)
        }
    }
    if(turn == 0){
        alert("Game selesai, Kesempatanmu habis")
    }
    ulang = confirm("Main lagi?")
}
alert("Terimakasih telah bermain")