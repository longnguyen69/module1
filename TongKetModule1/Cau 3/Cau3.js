let n = +prompt("nhap vao so n:")
function Finonaci(n){
    let a = 1, b = 0, tam, i =1;
    while (i < n) {
        tam = a;
        a += b;
        b = tam;
        i++;
    }
    return a;
}
if (Finonaci(n) === n){
    alert("Bạn nhập đúng số fibonacci");
} else alert("Bạn nhập không đúng số fibonacci");