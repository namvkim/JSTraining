// task 1: Cho một chuỗi, Viết hàm đảo ngược từng từ trong câu
var s = "Hello my teacher";
function ReverseString(string) {
    var result = "", x = "";
    for (var i = 0; i < string.length; i++) {
        if (string[i] != ' ') {
            x = x + string[i];
        } else {
            result = x + " " + result;
            x = "";
        }
    }
    return x + " " + result;
}
var result = ReverseString(s);

// task 2: Viết hàm đệ quy đảo ngược chuỗi.
var s = "Hello my teacher";
function ReverseStringRecursive(string) {
    var s = string.split('');
    function RvStr(i, j) {
        if (i >= j) return;
        var x = s[i];
        s[i] = s[j];
        s[j] = x;
        RvStr(i + 1, j - 1);
    }
    RvStr(0, s.length - 1);
    return s.join('');
}
var result = ReverseStringRecursive(s);

// task 3: Cho một mảng, Viết hàm đảo ngược các item trong array đó.
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function ReverseArray(array) {
    var n = Math.floor(array.length / 2);
    for (var i = 0; i <= n; i++) {
        var x = array[i];
        array[i] = array[array.length - i - 1];
        array[array.length - i - 1] = x;
    }
    return array;
}
var result = ReverseArray(arr);

// task 4: viết hàm đệ quy đảo ngược một mảng
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function ReverseArrayRecursive(array) {
    function RvArr(i, j) {
        if (i >= j) return;
        var x = array[i];
        array[i] = array[j];
        array[j] = x;
        RvArr(i + 1, j - 1);
    }
    RvArr(0, array.length - 1);
    return array;
}
var result = ReverseArrayRecursive(arr);

// task 5: viết hàm đệ quy tính tổng
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function Sum(arr, n) {
    if (n == 1)
        return arr[0];
    return Sum(arr, n - 1) + arr[n - 1];
}
var result = Sum(arr, arr.length);

// task 6: Viết hàm đệ quy để biết một số là thuộc dãy fibonacci
function Fibonacci(n) {
    if (n == 1 || n == 2)
        return 1;
    return Fibonacci(n - 1) + Fibonacci(n - 2);
}
function isFibonacci(n) {
    var i = 2;
    while (n > Fibonacci(i)) {
        i++
    }
    if (n == Fibonacci(i)) {
        return true;
    } else {
        return false;
    }
}
var result = isFibonacci(9);

// task 7: Viết một class bao gồm 4 methods: add, update, remove, so sánh 
class Student {
    constructor(name, age, score) {
        this.name = name,
            this.age = age,
            this.score = score
    }
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
}

var st = new Student("nam", 20, 8);
st.setName = 'teacher';
console.log(st.getName);