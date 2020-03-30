let point = [6,8,9,5,7,4,3];
function finMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log("Điểm số cao nhất là: " + finMax(point));
