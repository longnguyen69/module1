
function finonaci(n){ // tim so fibonaci tu 1 => n
    let a = 1, b = 0, tam, i =1;
    while (i <= n) {
        tam = a;
        a += b;
        b = tam;
        i++;
    }
    return a;
}
let n = +prompt("nhap vao so n:");
function isFibonacci(n) {
    if (finonaci(n) === n){ // so sanh a voi n
        return true;
    } else {
        return false;
    }
}
isFibonacci(n);