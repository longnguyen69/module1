// tạo được mảng n phần tử nhập
let num = +prompt("nhập vào số lượng phần tử của mảng: ");
let arrin = [];
for (let i = 0; i < num; i++) {
    arrin.push(+prompt("Nhập vào phần tử thứ " + (i + 1)));
}
console.log(arrin); //mảng ban đầu

let x = +prompt("nhập số muốn xóa!");

// hàm TryRemoveFromArray
function tryRemoveFromArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x){
            let arrout = arr.splice(i, 1);
            arr = arrout;
        }
    }
    return arr;
}
console.log(tryRemoveFromArray(arrin));