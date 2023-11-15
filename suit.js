var ulang = true;
while(ulang){
    // Pilihan Player
    var player = prompt("Pilih salah satu antara semut, orang dan Gajah");
    // Pilihan Komputer
    var com = ""
    var pilih = Math.random();
    if(pilih < 0.33){
        com = "orang";
    } else if(pilih > 0.34 && pilih < 0.73){
        com = "semut";
    } else if(pilih > 0.74){
        com = "gajah";
    }
    // Peraturan
    var hasil = ""
    if( player == com){
        hasil = " mendapat hasil SERI!";
    } else if(player == "orang"){
        if(com == "semut"){
            hasil = "MENANG TOD!"
        } else {
            hasil = "KALAH ajg!"
        }
    } else if(player == "semut"){
        if(com == "gajah"){
            hasil = "MENANG TOD!"
        } else {
            hasil = "KALAH ajg!"
        }
    } else if(player == "gajah"){
        if(com == "orang"){
            hasil = "MENANG TOD!"
        } else {
            hasil = "KALAH ajg!"
        }
    } else{
        hasil = "memasukkan pilihan yang salah SALAH"
    }
    // Hasil
    alert("Kamu memilih : "+ player + " dan computer memilih : "+ com + " \n Kamu "+ hasil)
    ulang = confirm("Ulangi lagi?")
}
alert("Terima kasih sudah bermain dongo")