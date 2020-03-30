let n = +prompt("nhap vao so n:");
function Finonaci(n){ // tim so fibonacci tu 1 => n
    let a = 1, b = 0, tam, i =1;
    while (i < n) {
        tam = a;
        a += b;
        b = tam;
        i++;
    }
    return a;
}
if (Finonaci(n) === n){ // so sanh a voi n
    alert("Bạn nhập đúng số fibonacci");
} else alert("Bạn nhập không đúng số fibonacci");