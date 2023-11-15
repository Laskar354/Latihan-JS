
var s = "";
for(var i = 10; i > 0; i--){
    for(var j = 10; j > 0; j--){
        if(j > i){
            s += "  "
        } else {
            s += "* ";
        }
    }
    s += "\n";
}

console.log(s);