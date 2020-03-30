// tạo được mảng n phần tử nhập
let num = +prompt("nhập vào số lượng phần tử của mảng: ");
let arrIn = [];
for (let i = 0; i < num; i++) {
    arrIn.push(+prompt("Nhập vào phần tử thứ " + (i + 1)));
}

console.log(arrIn); //mảng ban đầu

let x = +prompt("nhập số muốn xóa!");

// hàm TryRemoveFromArray
function tryRemoveFromArray(arr) {
    let arrOut = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            arrOut = arr.splice(i, 1);
        }
    }
    console.log(arrOut); // mang sau khi xoa
    return arrOut;
}

tryRemoveFromArray(arrIn);
