// function buatObj(nama, nim, jurusan){
//     var mhs = {};
//     mhs.nama = nama,
//     mhs.nim = nim,
//     mhs.jurusan = jurusan

//     return mhs;
// }

// var obj = buatObj("laskar", "19.11.2817", "Informatika")
// console.log(obj)
// var obj2 = buatObj("Firman", "19.11.2817", "Teknik")
// console.log(obj2)

// function Anak(nama, umur, kelahiran){
//     this.nama = nama,
//     this.umur = umur,
//     this.kelahiran = kelahiran

//     this.lengkap = function(){
//     return "Nama : "+ this.nama+ "("+this.umur+") ~ "+ this.kelahiran;
//     }
// }

// var anak = new Anak("Laskar", "12", "Wakontu")

function Angkot(sopir, penumpang, jurusan, kas ){

    this.sopir = sopir;
    this.penumpang = penumpang;
    this.jurusan = jurusan;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang);
        return this.penumpang
    }



    this.penumpangTurun = function(namaPenumpang, ongkos){
        if(this.penumpang.length == 0){
            alert("Penumpang masih kosong, Isi dulu tod!");
            return false;
        }

        for(i = 0; i < this.penumpang.length; i++){
            if(this.penumpang[i] == namaPenumpang){
                this.penumpang[i] = undefined;
                this.kas += ongkos;
                return this.penumpang;
            }
        }
    }
}


var angkot1 = new Angkot("Laskar", [], ["wakontu", "lasosodo"], 0)
