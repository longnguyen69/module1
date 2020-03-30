
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
let n = +prompt("nhap vao so n:");
if (Finonaci(n) === n){ // so sanh a voi n
    console.log("true");
} else {
    console.log("false");
}