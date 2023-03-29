//thêm số
let array = [];

function addNumber() {
    const number = parseInt(document.getElementById("number-input").value);
    if (isNaN(number)) {
        document.getElementById("output-number").innerHTML = "Vui lòng nhập số nguyên hợp lệ.";
    } else {
        array.push(number);
        document.getElementById("output-number").innerHTML = ` ${number} `;
    }
}
// tổng số dương
function calculateSum() {
    const sum = array.reduce((acc, cur) => acc + (cur > 0 ? cur : 0), 0);
    document.getElementById("output").innerHTML = `Tổng các số dương trong mảng: ${sum}`;
}
//điếm số dương
function countPositive() {
    const count = array.filter(x => x > 0).length;
    document.getElementById("output").innerHTML = `Số số dương trong mảng: ${count}`;
}
//tìm số nhỏ nhất
function findMin() {
    const min = Math.min(...array);
    document.getElementById("output").innerHTML = `Số tối thiểu trong mảng: ${min}`;
}
//tìm số dương nhỏ nhất
function findMinPositive() {
    const minPositive = Math.min(...array.filter(x => x > 0));
    if (minPositive === Infinity) {
        document.getElementById("output").innerHTML = "Không có  số.";
    } else {
        document.getElementById("output").innerHTML = `Số dương tối thiểu trong mảng: ${minPositive}`;
    }
}
//tìm số chẵn cuối cùng
function findLastEven() {
    const lastEven = array.reverse().find(x => x % 2 === 0);
    array.reverse();
    if (lastEven === undefined) {
        document.getElementById("output").innerHTML = "-1";
    } else {
        document.getElementById("output").innerHTML = `Số chẵn cuối cùng trong mảng: ${lastEven}`;
    }
}
//đổi chỗ
function swapValues() {
    const pos1 = parseInt(document.getElementById("pos1-input").value);
    const pos2 = parseInt(document.getElementById("pos2-input").value);
    if (isNaN(pos1) || isNaN(pos2) || pos1 < 0 || pos1 >= array.length || pos2 < 0 || pos2 >= array.length) {
        document.getElementById("output").innerHTML = "Vui lòng nhập các vị trí hợp lệ trong mảng.";
    } else {
        [array[pos1], array[pos2]] = [array[pos2], array[pos1]];
        document.getElementById("output").innerHTML = `Giá trị tại các vị trí ${pos1} và ${pos2} đã được hoán đổi.`;
    }
}
//sắp xếp tăng dần
function sortAscending() {
    array.sort((a, b) => a - b);
    document.getElementById("output").innerHTML = "Mảng được sắp xếp theo thứ tự tăng dần.";
}
//tìm số nguyên số đầu tiên
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}


//đếm số nguyên
function countIntegers() {
    const floats = document.getElementById("input2").value.split(",").map(Number);
    const integers = floats.filter(x => Number.isInteger(x));
    const count = integers.length;
    document.getElementById("output").innerHTML = `Số nguyên trong mảng float: ${count}`;
}
// so sánh số lương số âm và số dương
function comparePosNeg() {
    const posCount = array.filter(x => x > 0).length;
    const negCount = array.filter(x => x < 0).length;
    if (posCount === negCount) {
        document.getElementById("output").innerHTML = "Có một số lượng bằng nhau của số dương và âm.";
    } else if (posCount > negCount) {
        document.getElementById("output").innerHTML = `có ${posCount - negCount} nhiều số dương hơn số âm.`;
    } else {
        document.getElementById("output").innerHTML = `có ${negCount - posCount} nhiều số âm hơn số dương.`;
    }
}
